import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './Login.css';


// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom';
// import './Login.css';

// const inicialUser = {
//     mail: "", 
//     pass: ""
// };
//Id user
const inicialUser = {
  mail: "",
  pass: ""
}
const Login = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState(inicialUser);

    const handleSubmit = (e) => {

    }
    const handleChange = (e) => {
      setLogin({
        ...login,
        [e.target.name]: e.target.value
      });     
    }

    const handleLogin = (e) => {
      e.preventDefault();
      console.log(login.mail,login.pass)
      axios.post("https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/user/login", {
        email: login.mail,
        password: login.pass
    },{
      headers:{
        'Content-Type': 'application/json'
      }
    })
    .then((res) => {
      console.log(res.status);
      console.log(res.data.data.token); //get token
      sessionStorage.setItem("loginToken", JSON.stringify(res.data.data.token));
      console.log("Server response: ", res);
      navigate('/home');
    })
    .catch((err) => {
        console.log("Server respondend with error: ", err);
    })
    
    }
    const handleRegister = (e) => navigate('/register');

  return (
    <div className="wrapper">
        <form>
            <h2>Log in!</h2>
            <fieldset>
                <p>Email:</p>
                <input type="email" name='mail' id="email" onChange={handleChange} />
                <p>Password:</p>
                <input type="password" id="password" name='pass' onChange={handleChange}/>
                </fieldset>
                <button onClick={handleLogin}>Login</button>
                <button onClick={handleRegister}>Sign up</button>
          </form>
    </div>
  )
}

export default Login;
