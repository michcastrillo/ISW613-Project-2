import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Group from './Group';
import Modulo from './Modulo'
import Navegation from './Navegation';
import { Prueba } from './Prueba';

const Home = () => {
  const [group, setGroup] = useState([]);

  useEffect(()=>{
    const api = "https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/standings"; 
    const token = JSON.parse(sessionStorage.getItem('loginToken'));
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => {
      console.log(res.data.data);
      setGroup(res.data.data);
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })
  },[]);

  console.log(group.teams)

  return (
    <div>
      <Modulo key={Math.random()*1000}/>
      <div>
      <h2>WORLD CUP 2022</h2>
        {
          group.map(ele=> (
            <Group key={Math.random()*1000} grupo={ele.group} equipos={ele.teams}/>
          ))
        }
      </div>
    </div>
  )
}

export default Home