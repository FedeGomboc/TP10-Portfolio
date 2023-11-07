import React, { createContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {
  const [favoritos, setFavoritos] = useState([]);

  let cantidadFavoritos = favoritos.length;

  useEffect(() => {
    if (localStorage.getItem("favoritos") != null) {
      let storage = localStorage.getItem("favoritos");
      setFavoritos(JSON.parse(storage));
    }
  }, []);

  const AgregarFavorito = (favorito) => {
    setFavoritos([...favoritos, favorito]);
    localStorage.setItem("favoritos", JSON.stringify([...favoritos, favorito]))
  };

  const ResetearFavoritos = () => {
    setFavoritos([]);
    localStorage.removeItem("favoritos")
  };

  const BorrarFavorito = (deletedItem) => {
    let newArray = favoritos.filter((item) => item.id !== deletedItem.id);
    setFavoritos(newArray);
    localStorage.setItem("favoritos", JSON.stringify(newArray));
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
