import React, {useState, useHistory} from 'react';
import axiosWithAuth from '../tools/axiosWithAuth';

const Login = () => {
    const {push} = useHistory();
    const [credentials, setCredentials] = useState({});

    const login = (event) => {
        event.preventDefault();
        axiosWithAuth().post('login/endpoint', credentials)
                       .then(res => {
                           localStorage.setItem('token', res.data.token);
                           push('/');
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
        <div className='login_page'>
          <form className='login_form'
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

            <button type='submit'>Log-in</button>
          </form>

        </div>
    );
} 

export default Login;