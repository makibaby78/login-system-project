import React, { useRef } from 'react'
import { validate } from 'react-email-validator'
import { Link, useNavigate} from 'react-router-dom'
import Axios from 'axios'
import './register.css'

function Register() {
    
    const nameRef = useRef(null)
    const emailRef = useRef(null)
    const passRef = useRef(null)
    const navigate = useNavigate()

    const registerForm = (e) => {
        e.preventDefault();
        const nameVal = nameRef.current.value
        const emailVal = emailRef.current.value
        const passVal = passRef.current.value

        if(nameVal===""||passVal===""||emailVal===""){
            console.log("empty fields")
        }else if(validate(emailVal)===false){
            console.log("invalid email")
        }else{
            Axios.get(`https://login-system-user-management.herokuapp.com/users/check/${emailVal}`).then(async (response) => {
                console.log(response.data.emailAvailable)
                console.log("Email is not available")
                if(response.data.emailAvailable){
                    Axios.post("https://login-system-user-management.herokuapp.com/users/", {
                        name: nameVal,
                        password: passVal,
                        email: emailVal,
                    });
                    console.log("registered")
                    navigate('/login')
                }
              });

        }
    }

  return (
    <div className='register-wrapper sp form-wrapper-outer'>
        <div className='form-wrapper'>
            <h2>Create An Account</h2>
            <form>
                <div className='rw-inner'>
                    <div className='form-input'>
                        <input ref={nameRef} name="name" type="text" placeholder="Full Name" aria-label="Full Name" />
                    </div>
                    <div className='form-input'>
                        <input ref={emailRef} name="email" type="email" placeholder="Email Address" aria-label="Email Address" />
                    </div>
                    <div className='form-input'>
                        <input ref={passRef} name="password" type="password" autoComplete="off" placeholder="Password" aria-label="Password" />
                    </div>
                    <div className='form-submit'>
                        <button type="submit" onClick={(e)=>registerForm(e)}>Register</button>
                    </div>
                    <p className='t-center'>Already have an account? <Link to="/login" className='link-style'>Login here</Link></p>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Register