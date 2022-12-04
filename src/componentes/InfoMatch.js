import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import Modulo from './Modulo'
import './InfoMatch.css'

const InfoMatch = () => {
    const {id}= useParams();
    const [match, setMatch] = useState([]);
    let homeGol = [];
    let awayGol = [];
    
    useEffect(()=>{
        setMatch([]);
        const api = `https://cors-anywhere.herokuapp.com/http://api.cup2022.ir/api/v1/match/${id}`; 
        const token = JSON.parse(sessionStorage.getItem('loginToken'));
        axios.get(api , { headers: {"Authorization" : `Bearer ${token}`}})
        .then(res => {
        console.log(res.data.data);// this
        setMatch(res.data.data);
        console.log(res)
          })
        .catch((error) => {
          console.log(error)
          })
    },[])

    function splitG (elements) {
      let x = elements.toString();
      let nAreg = x.split(',');
      return nAreg;
    }
    function dateGame(date) {
      const ele = new Date(`${date} ${'UTC'}`);
      console.log(ele.toLocaleTimeString())
      const opciones = {weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
      return ele.toLocaleString('en-us', opciones);
    }

    (() => {
      match.map(ele=>(homeGol = (splitG(ele.home_scorers))));
    })();

    (() => {
      match.map(ele=>(awayGol = (splitG(ele.away_scorers))));
    })();
    console.log(awayGol.length)


  return (
    <div>
        <Modulo/>
        {
        match.length && (
          match.map(ele => (
            <div className='conteGroup'>
              <h2>{`Grupo ${ele.group}`}</h2>
              <h3>{ele.time_elapsed}</h3>
              <h4>{dateGame(ele.local_date)}</h4>
              <h4>{`Day ${ele.matchday}`}</h4>
              <div className='conteTeam'>
                <h3>{ele.away_team_en}</h3>
                <img src={ele.away_flag} alt={ele.away_team_en}/>
                <h3>{ele.away_score}</h3>
                <h3>vrs</h3>
                <h3>{ele.home_score}</h3>
                <img src={ele.home_flag} alt= {ele.home_team_en}/>
                <h3>{ele.home_team_en}</h3>
            </div>
            <h2 className='nameGols'>Gols</h2>
            <div className='conteGols'>
              <div className='right'>
              {
                awayGol.length && (
                  awayGol.map(elements=>(elements === 'null' ? <li>{0}</li> : <li>{elements}</li>))
                )
              }
              </div>
              <div className='lef'>
                {
                homeGol.length && (
                  homeGol.map(elements=>(elements === 'null' ? <li>{0}</li> : <li>{elements}</li>))
                )
                }
              </div>
            </div>
            <Link to={'/matchs'}>Back</Link>
          </div>
          )))
        }
    </div>
  )
}

export default InfoMatch