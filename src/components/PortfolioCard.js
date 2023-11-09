import React from "react";
import IconLink from "../pages/portfolio/IconLink";
import { Box } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { FavoritosContext } from '../context/FavoritosContext'

function PortfolioCard({ proyecto }) {

  const { id } = useParams();
  const { favoritos, ResetearFavoritos, cantidadFavoritos, BorrarFavorito, AgregarFavorito } = useContext(FavoritosContext);
  const { image, live, source, title } = proyecto;

  const EsFavorito = () => {
    const result = favoritos.find(({ id }) => id === proyecto.id)
    if (result == undefined) {
      return true
    } else {
      return false
    }
  }

  return (
    <Box display={"flex"} style={{ height: "100%", width: "50%" }} flexDirection={"column"} justifyContent={"center"} alignItems={"center"}>
      <Box style={{ height: "100%", width: "50%" }} component={"img"} src={image} alt={"mockup"} />
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box className={"portfolio"} display={"flex"} flexDirection={"column"} gap={"0.5rem"} alignItems={"center"} fontSize={"1.5rem"} py={"2rem"}>
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
        </Box>
       {/*  {EsFavorito() ?

          */} 
          <button className="btn btn-outline-dark text-uppercase mr-2 px-4" onClick={() => AgregarFavorito(proyecto)}>
            Agregar a favoritos
          </button> 
          {/*
           <button style={{ borderRadius: 10 }} className="mt-4 btn btn-primary" onClick={() => BorrarFavorito(proyecto)}>Borrar favorito</button>

        } */}

      </Box>
    </Box>
  );
}

export default PortfolioCard;
