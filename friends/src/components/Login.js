

const Login = () => {
    return(
        <div className='login_page'>
          <form className='login_form'>
            <label> Username: 
              <input type='text'/>
            </label>

            <label> Password: 
              <input type='text'/>
            </label>

            <button type='submit'>Login</button>
          </form>

        </div>
    );
} 

export default Login;