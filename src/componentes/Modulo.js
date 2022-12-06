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
        <ul>
          <li>
            <Link to={'/home'}>Home</Link>
          </li>
          <li>
            <Link to={'/teams'}>Teams</Link>
          </li>
          <li>
            <Link to={'/matchs'}>Matchs</Link>
          </li>
          <li>
            <Link to={'/standing'}>Standing</Link>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Modulo