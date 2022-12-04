import React, { useEffect, useState } from 'react'
import Modulo from './Modulo'
import DatePicker from 'react-datepicker'
import './Matchs.css';
import 'react-datepicker/dist/react-datepicker.css'
import MatchsUni from './MatchsUni';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
// import 'Matchs.css'

const Matchs = () => {

  const [fecha, setFecha] = useState(new Date());
  const dias = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,25,25,26,27,28,29];
  const [allM , setAllM] = useState([]);

  const handleAllMatchs = (e) => {
    e.preventDefault();
    setAllM([]);
    const api = "https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/match"; 
    const token = JSON.parse(sessionStorage.getItem('loginToken'));
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => {
    console.log(res.data.data);// this
    setAllM(res.data.data);
    console.log(res)
      })
    .catch((error) => {
      console.log(error)
      })
  }

  const handleBtnFecha = (e) => {
    e.preventDefault();
    setAllM([]);
    const dateStart = new Date(fecha);
    const dateFinal = dateStart.toLocaleDateString('en-us', {month: 'numeric', day: 'numeric',  year: 'numeric'});
    console.log(dateFinal)
    const token = JSON.parse(sessionStorage.getItem('loginToken'));
    axios.post("https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/bydate", {
      date : dateFinal
  },{
    headers:{
      'Content-Type': 'application/json',
      'Authorization' : `Bearer ${token}`
    }
  })
  .then((res) => {
    console.log(res.status);
    setAllM(res.data.data);
    console.log("Server response: ", res);
  })
  .catch((err) => {
      console.log("Server respondend with error: ", err);
  })
   
  }

  const handleDia = (e) => {
    const day = e.target.value;
    setAllM([]);
    const api = `https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/bymatch/${day}`; 
    const token = JSON.parse(sessionStorage.getItem('loginToken'));
    axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}})
    .then(res => {
    console.log(res.data.data);// this
    setAllM(res.data.data);
      })
    .catch((error) => {
      console.log(error)
      })
  }

  function dateGame(date) {
    const ele = new Date(`${date} ${'UTC'}`);
    const opciones = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    return ele.toLocaleString('en-us', opciones);
  }
  function hourGame(date){
    const hour = new Date(`${date} ${'GMT-0300'}`);
    const hourFinal = hour.toLocaleTimeString();
    return hourFinal;
  }

  return (
    <div>
      <Modulo  key={Math.random()*1000}/>
      <h1>MATCHS</h1>
      <div className='conteiner'>
        <div>
          <button onClick={handleAllMatchs}>All Matchas</button>
        </div>
        <div className='conteinerEle'>
          <label htmlFor="fecha">Date</label>
          <DatePicker 
          selected={fecha} 
          onChange={date =>setFecha(date)}
          />
          <button onClick={handleBtnFecha}>Match date</button>
        </div>
        <div className='conteinerEle'>
        <label htmlFor="fecha">Day</label>
          <select name='diaJuego' id='selecDay'onChange={handleDia} >
            {
            dias.length && (
              dias.map(element => (<option value={element} key={Math.random()*1000}>{element}</option>))
              )
            }
          </select>
        </div>
      </div>
      {
      allM.length && (
        allM.map(element=> (<MatchsUni
          key={Math.random()*1000}  
          datePlay={dateGame(element.local_date)}
          hourPlay={element.local_date}
          group={element.group}
          flagOne={element.away_flag}
          teamOne={element.away_team_en}
          scoreOne={element.away_score}
          flagTwo={element.home_flag          }
          teamWTwo={element.home_team_en}
          scoreTwo={element.home_score}
          id={element.id}
          />))
      )
    }




    </div>



  )
}

export default Matchs