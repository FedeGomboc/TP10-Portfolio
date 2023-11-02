import React, { useContext } from "react";
import { FavoritosContext } from "../../context/FavoritosContext";
import { Button } from "@mui/material";
import PortfolioCard from "../portfolio/PortfolioCard";
import { Container, Row, Col } from "react-bootstrap";


export default function Favoritos() {
  const { favoritos, ResetearFavoritos, cantidadFavoritos } =    useContext(FavoritosContext);

  return (
    <>
      <div className="container">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <h1
            className="pt-5"
            style={{ fontWeight: "bold", color: "white", marginTop: 50 }}
          >
            FAVOURITES
          </h1>

          {cantidadFavoritos > 0 ? (
            <Button
              className="m-4"
              onClick={() => ResetearFavoritos()}
              variant="primary"
            >
              Borrar favoritos
            </Button>
          ) : (
            <h1 className="pt-5" style={{ color: "white", fontSize: 25 }}>
              ... add a proyect to favourites to see it here ...
            </h1>
          )}
        </div>
        <div className="row">
          <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            {favoritos.map((project, index) => {
              return (
                <>
                  <Col md={4} className="project-card">
                  <PortfolioCard proyecto={project}/>
                  </Col>
                </>
              );
            })}
          </Row>
        </div>
      </div>
    </>
  );
}
