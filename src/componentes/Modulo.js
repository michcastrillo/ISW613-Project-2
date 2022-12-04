import axios from 'axios';
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Modula.css'
import Navegation from './Navegation';

const Modulo = () => {
 
  return (
    <div className='contePrincipal'>
      <Navegation/>
      <div className='conteiner'>
        <div>
          <Link to={'/home'}>Home</Link>
        </div>
        <div>
          <Link to={'/teams'}>TEAMS</Link>
        </div>
        <div>
          <Link to={'/matchs'}>Matchs</Link>
        </div>
        <div>
          <Link to={'/standing'}>Standing</Link>
        </div>
      </div>
    </div>
  )
}

export default Modulo