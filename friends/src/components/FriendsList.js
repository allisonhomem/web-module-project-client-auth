import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Friend from './Friend.js';
import axiosWithAuth from '../tools/axiosWithAuth.js';

const FriendsList = () => {
    const [friends, setFriends] = useState([]);
    const [didFetch, setDidFetch] = useState(false);

    useEffect(() => {
        axiosWithAuth().get("/friends")
                       .then(res => {
                        setFriends(res.data)
                        setDidFetch(true)})
                       .catch(err => 
                        console.error('uh-oh, something went wrong', err))
    },[]);

    console.log(friends);

    return(
        <div>
            <h2>Friends:</h2>
            {didFetch && friends.map((friend) => 
                <Friend friend={friend} key={friend.id}/>)}
            
            <Link to='/friends/addnew'>
                <button className='cute_button'>Add a New Friend</button>
            </Link>
        </div>
    );
}

export default FriendsList;