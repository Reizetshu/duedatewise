import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';


import '../assets/styles/LogIn.css';

const LogIn = () => {

  const navigate = useNavigate();
    
    const allUsers = useSelector(state => state.allUsers);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [login, setLogin] = useState(false);

    const onEmailChangeHandler = event => {
        setEmail(event.target.value);
    }

    const onPasswordChangeHandler = event => {
        setPassword(event.target.value);
    }

    // Submit Form Handler
    const onLogInHandler = async (event) => {
    // Prevent from reloading
    event.preventDefault();

    const checkUsers = await axios.post('http://localhost:8080/api/v1/auth/login', {
      email,
      password
    })
  
  // make the API call
  axios(checkUsers)
    .then((result) => {
      console.log(result)
      // // We will use localStorage to store User details
      // localStorage.setItem('userId', result.data.id);

      setLogin(true);
      navigate('/');
    })
    .catch((error) => {
      console.log(error)
      error = new Error();
    });
  }

  return (
    <>
    <form className='form-login' onSubmit={onLogInHandler}>
        <div className='login'>
            <p>Email:</p>
            <input 
            type='email' 
            placeholder='Enter email...' 
            onChange={onEmailChangeHandler}
            required/>
            <p>Password:</p>
            <input type='password' 
            placeholder='Enter password...' 
            onChange={onPasswordChangeHandler}
            required/>
            <div>
            <button type='submit'>Login</button>
            </div>
        </div>
    </form>
    </>
  )
}

export default LogIn;