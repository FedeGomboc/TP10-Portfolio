import React, { useState } from "react";
import IconLink from "./IconLink";
import { Box } from "@mui/material";
import { useContext } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import {FavoritosContext} from '../../context/FavoritosContext'

function PortfolioCard({proyecto}) {

const { id } = useParams();  
  const {AgregarFavorito} = useContext(FavoritosContext)

  const { image, live, source, title } = proyecto;
  
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box component={"img"} src={image} alt={"mockup"} />
      <h1 style={{ fontSize: "2rem" }}>{title}</h1>
      <Box
        className={"portfolio"}
        display={"flex"}
        flexDirection={"column"}
        gap={"0.5rem"}
        alignItems={"center"}
        fontSize={"1.5rem"}
        py={"2rem"}
      >
        <Box p={1} border={"2px solid black"} borderRadius={"25px"}>
          <IconLink link={source} title={"Source Code"} icon={"fa fa-code"} />
        </Box>
        <button className="btn btn-outline-dark text-uppercase mr-2 px-4" onClick={() => AgregarFavorito(proyecto)}>
                       Agregar a favoritos
         </button>
      </Box>
    </Box>
  );
}

export default PortfolioCard;
