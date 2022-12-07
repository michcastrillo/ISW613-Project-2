import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './MatchsUni.css';

const MatchsUni = ({datePlay,hourPlay,group,flagOne,teamOne,scoreOne,flagTwo,teamWTwo,scoreTwo,id}) => {
  const nav = useNavigate();
  const handleBtn = (e) => {
    console.log(e.target.dataset.id)
    const idMatch = e.target.dataset.id;
    nav(`/infomatch/${idMatch}`)

  }

  return (
    <div className='conteinerMU' key={Math.random()*1000} >
      <div className='conteMatchs'>
        <h2>{`Grupo ${group}`}</h2>
        <div className='conteTeam'>
            <h3>{teamOne}</h3>
            <img src={flagOne} alt={teamOne}/>
            <p>{scoreOne}</p>
            <h3>vrs</h3>
            <p>{scoreTwo}</p>
            <img src={flagTwo} alt= {teamOne}/>
            <h3>{teamWTwo}</h3>
        </div>
        <h3 className='datePtd'>{`${datePlay}  ${hourPlay}`}</h3>
        <button className='btnInfo' data-id={id} onClick={handleBtn}>See more</button>
      </div>
    </div>
  )
}

export default MatchsUni