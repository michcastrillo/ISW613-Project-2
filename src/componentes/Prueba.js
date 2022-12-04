import React from 'react'

export const Prueba = ({name,flag,cod, id}) => {


  return (
    <div>
      <figure>
        <img src={flag} alt= {name}/>
      </figure>
      <h2 data-id={id}>{name}</h2>
      <h3>{cod}</h3>
    </div>
    // <div>
    //     <h2>{grupo}</h2>
    //     {
    //         equipos.length && (
    //             equipos.map(ele => (<li key={Math.random()*1000}>{ele.name_en}</li>))
    //         )
    //     }
    // </div>
  )
}
