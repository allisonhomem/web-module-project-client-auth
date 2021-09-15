
const Friend = (props) => {
    const {friend} = props;
    return (
        <div className='friend_box'>
            <h3>{friend.name}</h3>
        </div>
    )
}

export default Friend;