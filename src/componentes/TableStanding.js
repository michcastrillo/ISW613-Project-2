import React from 'react'
import './TableStanding.css'

const TableStanding = ({grupo, equipos}) => {
  return (
    <div className='conteinerP'>
        <h2>{`GROUP ${grupo}`}</h2>
            <div>
                <table className="table">
                    <thead className="table__thead">
                        <tr>
                            <th>Team</th>
                            <th>MP</th>
                            <th>W</th>
                            <th>D</th>
                            <th>L</th>
                            <th>GF</th>
                            <th>GA</th>
                            <th>GD</th>
                            <th>Pst</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            equipos.map(ele=>(
                                <tr>
                                <td className='conteTeam'>
                                    <p>{ele.name_en}</p>
                                    <img src={ele.flag} alt={ele.name_en}/>
                                </td>
                                <td>{ele.mp}</td>
                                <td>{ele.w}</td>
                                <th>{ele.l}</th>
                                <th>{ele.d}</th>
                                <th>{ele.gf}</th>
                                <th>{ele.ga}</th>
                                <th>{ele.gd}</th>
                                <th>{ele.pts}</th>
                            </tr>
                            ))
                        }
                        {/* <tr>
                            <td className='conteTeam'>
                                <p>{ele.name_en}</p>
                                <img src={ele.flag} alt={ele.name_en}/>
                            </td>
                            <td>{ele.mp}</td>
                            <td>{ele.w}</td>
                            <th>{ele.l}</th>
                            <th>{ele.d}</th>
                            <th>{ele.gf}</th>
                            <th>{ele.ga}</th>
                            <th>{ele.gd}</th>
                            <th>{ele.pts}</th>
                        </tr> */}
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default TableStanding