import React, { useState, useEffect } from 'react'
import { useNavigate} from 'react-router-dom'

function Authenticator() {
    const navigate = useNavigate()
    const [token, setToken] = useState(true)
  
    useEffect(() => {
      if(token===true){
        navigate('/login')
      }
    })
  return (
    <div className='authenticator'></div>
  )
}

export default Authenticator