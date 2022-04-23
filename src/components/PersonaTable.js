import React from 'react';

export const PersonaTable = ( {personas} ) => {
    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="card">
                    <div className="card-body">
                        <table className="table caption-top">
                            
                            <thead>
                                <tr>
                                <th scope="col">#</th>
                                <th scope="col">Identificación</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Apellido</th>
                                <th scope="col">Cabeza de familia</th>
                                <th scope="col">Fecha de nacimiento</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    personas.map((persona, index) => (
                                        <tr key={index}>
                                            <th scope="row">{index}</th>
                                            <td>{persona.identificacion}</td>
                                            <td>{persona.nombre1} {persona.nombre2}</td>
                                            <td>{persona.apellido1} {persona.apellido2}</td>
                                            <td>{persona.cabeza_hogar}</td>
                                            <td>{persona.fecha_nacimiento}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}