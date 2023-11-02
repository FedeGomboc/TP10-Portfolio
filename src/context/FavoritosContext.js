import React, { createContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {
  const [favoritos, setFavoritos] = useState([]);

  let cantidadFavoritos = favoritos.length;

  const AgregarFavorito = (favorito) => {
    console.log([...favoritos, favorito])
    setFavoritos([...favoritos, favorito]);
  };

  const ResetearFavoritos = () => {
    setFavoritos([]);
  };

  const BorrarFavorito = (deletedItem) => {
    let newArray = favoritos.filter((item) => item.id !== deletedItem.id);
    setFavoritos(newArray);
  };

  return (
    <FavoritosContext.Provider
      value={{
        favoritos,
        cantidadFavoritos,
        AgregarFavorito,
        ResetearFavoritos,
        BorrarFavorito,
      }}
    >
      {props.children}
    </FavoritosContext.Provider>
  );
};

export default FavoritosProvider;
