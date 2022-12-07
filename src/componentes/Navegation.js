import React from 'react'
import { Link } from 'react-router-dom'
import './Navegation.css'

const Navegation = () => {
    const nameU = JSON.parse(sessionStorage.getItem('nameUser'));
    const handleClick = (e)=>{
        sessionStorage.removeItem("loginToken");
        sessionStorage.removeItem("nameUser");
        sessionStorage.removeItem("registerToken");
    }
    
  return (
    <div className='conteinerNav'>
        <div>
            <p className='txtLR'>{`Welcome: ${nameU}`}</p>
        </div>
        <div className='linkClass'>
          <Link to={'/login'} onClick = {handleClick} className='Link'>Logout</Link>
        </div>
    </div>
  )
}

export default Navegation