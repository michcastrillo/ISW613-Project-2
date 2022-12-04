import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Modulo from './Modulo';
import { Prueba } from './Prueba';
import Team from './Team';

const Teams = () => {

  const [teams, setTeams] = useState([]);

  const handleClick = (e) => { //get all teams
    e.preventDefault();
    // const api = "https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/team"; 
    // const token = JSON.parse(sessionStorage.getItem('loginToken'));
    // axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}})
    // .then(res => {
    //   console.log(res.data.data);
    //   setTeams(res.data.data);
    //   console.log(teams)
    //   console.log(res)
    // })
    // .catch((error) => {
    //   console.log(error)
    // })
  }


  useEffect(()=>{
    const api = "https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/team"; 
    const token = JSON.parse(sessionStorage.getItem('loginToken'));
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => {
      console.log(res.data.data);
      setTeams(res.data.data);
      console.log(teams)
      console.log(res)
    })
    .catch((error) => {
      console.log(error)
    })

  },[]);

  const recorrer = () =>{
    teams.map(ejemplo => {
      console.log(ejemplo.name_en)
    })

  }




  return (
    <div>
      <Modulo/>
      <h1>Teams</h1>
      {/* <button onClick={recorrer}>Ver</button>
      <Team listTeams={teams}/> */}
      {
        teams.length && (
          teams.map(ele=>(
            <Team key={Math.random()*1000} name={ele.name_en} flag={ele.flag} cod={ele.iso2} id={ele.id}/>
          ))
        )
      }
    </div>
  )
}

export default Teams