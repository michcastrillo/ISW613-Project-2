import React from 'react'
import './Group.css';

const Group = ({grupo, equipos}) => {

  return (
    <div>
        <h3 key={Math.random()*1000}>{`GRUPO ${grupo}`}</h3>
        {
        equipos.length && (
            equipos.map(ele => (
              <div className='conteGroup'>
                <li key={Math.random()*1000}>
                  <img src={ele.flag} alt={ele.name_en}/>
                  </li>
                <li key={Math.random()*1000} className="liPais">{ele.name_en}</li>
              </div>
            )))
        }
    </div>
  )
}

export default Group