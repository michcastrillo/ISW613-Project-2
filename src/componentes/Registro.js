import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Registro.css';

const objInicial = {
    name: "",
    mail: "",
    pass: "",
    conpass: ""
}

const Registro = () => {
    const [formulario, setFormulario] = useState(objInicial);
    const navigate = useNavigate();

    
    const hanbleForm = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value
        });
    }

    const handleClick = (e) => {
        e.preventDefault();
        console.log(formulario.name,formulario.mail,formulario.pass,formulario.conpass)

        axios.post("https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/user", {
            name : formulario.name,
            email: formulario.mail,
            password: formulario.pass,
            passwordConfirm: formulario.conpass
        },{
          headers:{
            'Content-Type': 'application/json'
          }
        })
        .then((res) => {
          console.log(res.status);
          console.log(res.data.data.token); //get token
          sessionStorage.setItem("registerToken", JSON.stringify(res.data.data.token));
          sessionStorage.setItem("nameUser", JSON.stringify(formulario.name));
          console.log("Server response: ", res);
          navigate('/login');


        })
        .catch((err) => {
            console.log("Server respondend with error: ", err);
        })
    }

  return (
    <>
    <h2>Sign up</h2>
    <form>
        <label htmlFor='name'>Name</label>
        <input type='text' id='name' name='name' onChange={hanbleForm}></input>
        <label htmlFor='mail'>Email</label>
        <input type='email' id='mail' name='mail' onChange={hanbleForm}></input>
        <label htmlFor='pass'>Password</label>
        <input type='password' id='pass' name='pass' onChange={hanbleForm}></input>
        <label htmlFor='conpass'>Confirm password</label>
        <input type='password' id='conpass' name='conpass' onChange={hanbleForm}></input>
        <button onClick={handleClick}>Register</button>
    </form>
    </>
  )
}

export default Registro