import React from 'react'
import './Team.css';

const Team = ({name,flag,cod, id}) => {
    const handleClick = (e) => {
        e.preventDefault();
        const idTeam = e.target.dataset.id;
        // console.log(e.target.dataset.id); //id del equipo
    }



  return (
    <div className='teamContainer'>
        <figure>
            <img src={flag} alt= {name}/>
        </figure>
        <h3 data-id={id}>{name}</h3>
        <p>{cod}</p>
    </div>
  )
}

export default Team