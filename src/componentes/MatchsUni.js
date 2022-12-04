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
    <div className='conteinerP' key={Math.random()*1000} >
      <div className='conteMatchs'>
        <h2>{`Grupo ${group}`}</h2>
        <h3>{`${datePlay}  ${hourPlay}`}</h3>
        <div className='conteTeam'>
            <h3>{teamOne}</h3>
            <img src={flagOne} alt={teamOne}/>
            <h3>{scoreOne}</h3>
            <h3>vrs</h3>
            <h3>{scoreTwo}</h3>
            <img src={flagTwo} alt= {teamOne}/>
            <h3>{teamWTwo}</h3>
        </div>
        <button data-id={id} onClick={handleBtn}>See more</button>
      </div>
    </div>
  )
}

export default MatchsUni