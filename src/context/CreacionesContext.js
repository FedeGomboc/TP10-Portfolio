import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'

export const CreacionesContext = createContext();

const CreacionesProvider = (props) => {

    const [proyectos, setProyectos] = useState([]);

    useEffect(() => {        
        axios.get('proyectos.json')
        .then((response) => {
           let data = response.data
           setProyectos(data)
        })
        .catch((error) => {
            console.log(error)
        })
        },[])


    const ObtenerProyectoId = (id) => {
        return proyectos[id-1]
    }


    return (
        <CreacionesContext.Provider
          value={{
           proyectos,
           ObtenerProyectoId
          }}
        >
          {props.children}
        </CreacionesContext.Provider>
      );



}


export default CreacionesProvider;