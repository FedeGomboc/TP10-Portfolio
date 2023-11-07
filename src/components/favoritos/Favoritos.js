import React, { useContext } from "react";
import { FavoritosContext } from "../../context/FavoritosContext";
import { Button } from "@mui/material";
import PortfolioCard from "../portfolio/PortfolioCard";
import { Container, Row, Col } from "react-bootstrap";
import {Box, Grid} from "@mui/material";


export default function Favoritos() {
  const { favoritos, ResetearFavoritos, cantidadFavoritos } =    useContext(FavoritosContext);

  return (
    <>
      <div className="container">
        <div style={{display: "flex", alignItems: "center", flexDirection: "column",}}>
          <h1 className="pt-5" style={{ fontWeight: "bold", marginTop: 50 }}>FAVOURITES</h1>
          {cantidadFavoritos > 0 ? (
            <Button className="m-4" onClick={() => ResetearFavoritos()} variant="primary">Borrar favoritos</Button>
          ) : (
            <h1 className="pt-5" style={{fontSize: 25 }}>
              Agrega proyectos a favoritos para verlos aquí
            </h1>
          )}
        </div>
          <Grid container spacing={2} justifyContent="center" >
            {favoritos.map((project, index) => (
              <Grid item xs={12} md={6} key={index}>
                <PortfolioCard proyecto={project} />
              </Grid>
            ))}
          </Grid>
        </div>
    </>
  );
}
