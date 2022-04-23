import React from 'react';
import { PersonaFormulario } from '../../components/PersonaFormulario';

export const PersonaPage = () => {
    return(
        
        <div className="card">
            <div className="card-header">
                <h4 className="card-title">Solicitud de subsidio familiar de vivienda</h4>
            </div>
            <div className="card-body">
                
                <p className="col-12 bg-success text-light">Conformación del hogar</p>
                <PersonaFormulario />
            </div>
        </div>
    )
}