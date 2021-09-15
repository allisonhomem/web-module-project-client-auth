import React, {useState} from 'react';
import {useHistory} from 'react-router-dom';
import axiosWithAuth from '../tools/axiosWithAuth.js';

const AddFriend = () => {
    const [formValue, setFormValue] = useState({
        id: '',
        name: '',
        age: '',
        email: ''
    })
    const {push} = useHistory();

    const add = (event) => {
        event.preventDefault();

        setFormValue({
            ...formValue,
            id: Math.floor(Math.random()*10000000)
        });

        axiosWithAuth().post('/friends', formValue)
                       .then(res => {
                        console.log(res);
                        push('/protected')})
                       .catch(err =>
                        console.error('uh-oh, something went wrong', err))
    }

    const handleChange = (event) => {
        setFormValue({
            ...formValue,
            [event.target.name]: event.target.value
        })
    }

    return(
        <div className='a_page'>
          <form className='nice_form'
                onSubmit={add}>
            <label>Name:
                <input type='text'
                       name='name'
                       value={formValue.name}
                       onChange={handleChange}/>
            </label>

            <label>Age:
                <input type='text'
                       name='age'
                       value={formValue.age}
                       onChange={handleChange}/>
            </label>

            <label>Email:
                <input type='text'
                       name='email'
                       value={formValue.email}
                       onChange={handleChange}/>
            </label>

            <button type='submit'
                    className='cute_button'>Add Friend</button>
          </form>
        </div>
    )
}

export default AddFriend;