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
                            <th className='thName'>Team</th>
                            <th className='conteTablaE'>MP</th>
                            <th className='conteTablaE'>W</th>
                            <th className='conteTablaE'>D</th>
                            <th className='conteTablaE'>L</th>
                            <th className='conteTablaE'>GF</th>
                            <th className='conteTablaE'>GA</th>
                            <th className='conteTablaE'>GD</th>
                            <th className='conteTablaE'>Pts</th>
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
                                <td className='conteTablaE'>{ele.mp}</td>
                                <td className='conteTablaE'>{ele.w}</td>
                                <th className='conteTablaE'>{ele.l}</th>
                                <th className='conteTablaE'>{ele.d}</th>
                                <th className='conteTablaE'>{ele.gf}</th>
                                <th className='conteTablaE'>{ele.ga}</th>
                                <th className='conteTablaE'>{ele.gd}</th>
                                <th className='conteTablaE'>{ele.pts}</th>
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