import React from 'react'

const Team = ({name,flag,cod, id}) => {
    const handleClick = (e) => {
        e.preventDefault();
        const idTeam = e.target.dataset.id;
        // console.log(e.target.dataset.id); //id del equipo
    }



  return (
    <div>
        <figure>
            <img src={flag} alt= {name}/>
        </figure>
        <h2 data-id={id}>{name}</h2>
        <h3>{cod}</h3>
  </div>
    // <div>
    //     <table className="table">
    //             <thead className="table__thead">
    //                 <tr>
    //                     <th>Name</th>
    //                     <th>Flag</th>
    //                     <th>Information</th>
                        
    //                 </tr>
    //             </thead>
    //             <tbody>
    //                 {
    //                     listTeams.map(ele=>(
    //                         <tr  key={Math.random()*1000}>
    //                         <td>{ele.name_en}</td>
    //                         <td>
    //                         <img src={ele.flag} alt={ele.name_en}/>
    //                         </td>
    //                         <td>
    //                             <button data-id={ele.id} onClick={handleClick}>See</button>
    //                         </td>
    //                     </tr>

    //                     ))
    //                     // props.objList.map((obj, index)=>(
    //                         // <tr  key={Math.random()*1000}>
    //                         //     <td>{nameT}</td>
    //                         //     <td>
    //                         //     <img src={flagT} alt={nameT}/>
    //                         //     </td>
    //                         //     <td>
    //                         //         <button onClick={handleClick}>See</button>
    //                         //     </td>
    //                         // </tr>
    //                     }
    //             </tbody>
    //         </table>
    // </div>
  )
}

export default Team