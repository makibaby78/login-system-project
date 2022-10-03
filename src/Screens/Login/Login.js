import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom"
import Axios from 'axios'
import './login.css'

function Login() {
  const [email, setEmail] = useState("")
  const [pass, setPass] = useState("")
  const [match, setMatch] = useState(true)
  const navigate = useNavigate()

  const emailChange = (e) => {
    setEmail(e.target.value);
    console.log(email)
  }

  const passChange = (e) => {
    setPass(e.target.value);
    console.log(pass)
  }
  


  function LoginForm(e) {
    e.preventDefault();
    Axios.get(`https://login-system-user-management.herokuapp.com/users/email/${email}/${pass}`).then(async (response) => {
      console.log(response.data)
      setMatch(await response.data.match)
    });
    if(match){
      console.log("success")
      navigate('/profile')
    }
  }

  return (
    <div className='login-wrapper form-wrapper-outer'>
      <div className='form-wrapper'>
        <h2>Login Into Your Account</h2>
        <form>
          <div className='rw-inner'>
              <div className='form-input'>
                <input onChange={emailChange} name="email" type="email" placeholder="Email Address" aria-label="Email Address" />
              </div>
              <div className='form-input'>
                <input onChange={passChange} name="password" type="password" autoComplete="off" placeholder="Password" aria-label="Password" />
              </div>
              <div className='form-submit'>
                <button type="submit" onClick={()=>navigate('/profile')}>Login</button>
              </div>
              <p className='t-center'>Don't have an account? <Link to="/register" className='link-style'>Register here</Link></p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login