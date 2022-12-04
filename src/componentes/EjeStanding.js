import React from 'react'

const EjeStanding = ({grupo, equipos}) => {
  return (
    <div>
        <p>{`GROUP ${grupo}`}</p>
        {
            equipos.map(ele=>(
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
                </tbody>
            </table>
                </div>

            ))
        }

    </div>
  )
}

export default EjeStanding