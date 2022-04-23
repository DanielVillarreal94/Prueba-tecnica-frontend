import React from 'react';
import { PersonaTable } from './PersonaTable';
import { createPersonas, usePersonas } from '../pages/hooks/usePersona';
import Swal from 'sweetalert2'

export const PersonaFormulario = () => {

    const result = usePersonas();
  
    const identificacionRef = React.createRef();
    const nombre1Ref = React.createRef();
    const nombre2Ref = React.createRef();
    const apellido1Ref = React.createRef();
    const apellido2Ref = React.createRef();
    const fechaRef = React.createRef();
    const tipoDocRef = React.createRef();
    
    const cabezahRef = React.createRef();

    const state = {
        persona:{},
        status:null
    }

    const changeStage = () => {
        state.persona = ({
            persona:{
                nombre1: nombre1Ref.current.value,
                nombre2: nombre2Ref.current.value,
                apellido1: apellido1Ref.current.value,
                apellido2: apellido2Ref.current.value,
                fecha_nacimiento: fechaRef.current.value,
                tipo_documento: tipoDocRef.current.value,
                identificacion: identificacionRef.current.value,
                cabeza_hogar: cabezahRef.current.checked ? 'SI' : 'NO'
            }
        });             
    }

    const savePersona = async (e) => {
        e.preventDefault();

        //llenar state con formulario
        changeStage();
        const {ok, msg}=  await createPersonas(state.persona.persona)
        console.log(ok);
        if ( !ok ) {
            Swal.fire({
            title: 'Error!',
            text: msg,
            icon: 'warning',
            confirmButtonText: 'Ok'
          })
        } else {
            nombre1Ref.current.value = '';
            nombre2Ref.current.value = '';
            apellido1Ref.current.value = '';
            apellido2Ref.current.value = '';
            fechaRef.current.value = '';
            tipoDocRef.current.value = '';
            identificacionRef.current.value = '';
            Swal.fire({
                title: 'Registro existoso!!!',
                text: 'Se ha registrado la persona en la base de datos.',
                icon: 'success',
                confirmButtonText: 'Ok'
              });
              
        }
    }
    
    return(

        
        
        <div className="card">
            <div className="card-header text-uppercase">
                Conformación y condición socioeconómica del hogar   
            </div>
            <div className="card-body">
                <form onSubmit={savePersona}>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="flexCheckChecked" ref={cabezahRef} onChange={changeStage}/>
                        <label className="form-check-label" htmlFor="flexCheckChecked">
                            Cabeza de hogar
                        </label>
                    </div>
                    <br/>
                    <div className="row g-3">
                        <div className="col-md-6">
                            <label htmlFor="primerNombre" className="form-label">Primer nombre</label>
                            <input type="text" className="form-control" name="primerNombre" id="primerNombre" required ref={nombre1Ref} onChange={changeStage}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="segundoNombre" className="form-label">Segundo nombre</label>
                            <input type="text" className="form-control" name="segundoNombre" id="segundoNombre" ref={nombre2Ref} onChange={changeStage}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="primerApellido" className="form-label">Primer apellido</label>
                            <input type="text" className="form-control" name="primerApellido" id="primerApellido" required ref={apellido1Ref} onChange={changeStage}/>
                        </div>
                        <div className="col-md-6">
                            <label htmlFor="segundoApellido" className="form-label">Segundo apellido</label>
                            <input type="text" className="form-control" name="segundoApellido" id="segundoApellido" ref={apellido2Ref} onChange={changeStage}/>
                        </div>
                        <div className="col-md-12">
                            <label htmlFor="fecha" className="form-label">Fecha nacimiento</label>
                            <input type="date" className="form-control" name="fecha" id="fecha" required ref={fechaRef} onChange={changeStage}/>
                        </div>
                        <div className="col-md-6">
                            <label className="form-label">Tipo documento</label>
                            <select className="form-select" ref={tipoDocRef} onChange={changeStage}>
                                <option defaultValue={true} value="CC">Cedula de ciudadania</option>
                                <option value="CE">Cedula de extranjeria</option>
                                <option value="TI">Tarjeta de identidad</option>
                                <option value="PAS">Pasaporte</option>
                            </select>
                        </div>
                        <div className="col-md-6">
                        <label htmlFor="identificacion" className="form-label">Número de identificación</label>
                            <input type="number" className="form-control" id="identificacion" name="identificacion" required ref={identificacionRef} onChange={changeStage}/>
                        </div>
                    </div>
                    <div className="d-grid gap-2 col-6 mx-auto mt-3">
                        <button className="btn btn-outline-success" type="submit">Agreagar</button>
                    </div>
                </form>
            </div>
            <hr/>

            {
                <PersonaTable personas = { result.personas } />
            }
            
        </div>
    )
}