import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../tools/axiosWithAuth';

const Login = () => {
    const {push} = useHistory();
    const [credentials, setCredentials] = useState({
        username: "",
        password: ""
    });

    const login = (event) => {
        event.preventDefault();
        axiosWithAuth().post("/login", credentials)
                       .then(res => {
                           localStorage.setItem('token', res.data.payload);
                           push('/protected');
                       })
                       .catch(err => 
                        console.error('uh-oh, something went wrong', err))
    }

    const handleChange = (event) => {
        setCredentials({
            ...credentials,
            [event.target.name]: event.target.value,
        })
    }

    return(
        <div className='a_page'>
          <form className='nice_form'
                onSubmit={login}>
            <label> Username: 
              <input type='text'
                     name='username'
                     value={credentials.username}
                     onChange={handleChange}/>
            </label>

            <label> Password: 
              <input type='text'
                     name='password'
                     value={credentials.password}
                     onChange={handleChange}/>
            </label>

            <button type='submit'
                    className='cute_button'>Log-in</button>
          </form>

        </div>
    );
} 

export default Login;