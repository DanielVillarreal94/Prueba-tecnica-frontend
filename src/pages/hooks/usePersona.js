import { useEffect, useState } from "react";
import { personaApi } from "../api/personaApi";

export const usePersonas = () => {
    const [ personas, setPersonas ] = useState([]);

    useEffect(() => {
        getPersonas();
    },[]);

    const getPersonas = async () => {
        const resp = await personaApi.get('http://localhost:3004/api/hogar');
        setPersonas(resp.data.personas);
    }

    return {
        personas
    }
}

export const createPersonas = async( req ) => {
    const resp = await personaApi.post('http://localhost:3004/api/hogar', req);  
    return resp.data;
}