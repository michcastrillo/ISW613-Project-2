import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modulo from './Modulo'
import TableStanding from './TableStanding';

const Standing = () => {
  const [stand, setStand] = useState([]);
  const grupo = ["A","B","C","D","E","F","G","H"];

  useEffect(()=>{
    const api = "https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/standings"; 
    const token = JSON.parse(sessionStorage.getItem('loginToken'));
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => {
    console.log(res.data.data);// this
    setStand(res.data.data);
      })
    .catch((error) => {
      console.log(error)
      })
  },[]);
  
    const handleClick = () =>{
    setStand([]);
    const api = "https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/standings"; 
    const token = JSON.parse(sessionStorage.getItem('loginToken'));
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => {
    console.log(res.data.data);// this
    setStand(res.data.data);
      })
    .catch((error) => {
      console.log(error)
      })
  }

  const handleGrupo = (e) => {
    e.preventDefault();
    const group = e.target.value;
    setStand([]);
    const api = `https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/standings/${group}`; 
    const token = JSON.parse(sessionStorage.getItem('loginToken'));
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => {
    console.log(res.data.data);// this
    console.log(res.data.data)
    setStand(res.data.data);
      })
    .catch((error) => {
      console.log(error)
      })
  }

  return (
    <div>
      <Modulo/>
      <button onClick={handleClick}>See All</button>
      <label htmlFor="group">Group</label>
      <select name='groupId' id='selecDay' onChange={handleGrupo}>
        {
        grupo.length && (
          grupo.map(element => (<option value={element} key={Math.random()*1000}>{element}</option>)))
        }
        </select>
        {
        stand.length && (
          stand.map(ele=> <TableStanding grupo={ele.group} equipos={ele.teams}/>))
        }
    </div>
  )
}

export default Standing