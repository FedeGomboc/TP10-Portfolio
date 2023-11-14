import React, { createContext, useEffect, useState } from "react";

export const FavoritosContext = createContext();

const FavoritosProvider = (props) => {
  let storage = localStorage.getItem("favoritos") ? JSON.parse(localStorage.getItem("favoritos")) : [];

  const [favoritos, setFavoritos] = useState(storage);

  let cantidadFavoritos = favoritos.length;  

  const AgregarFavorito = (favorito) => {
    setFavoritos([...favoritos, favorito]);    
  };

  const ResetearFavoritos = () => {
    setFavoritos([]);
    localStorage.removeItem("favoritos")
  };

  const BorrarFavorito = (deletedItem) => {
    console.log('favoritos ',favoritos)
    let arrayNuevo = favoritos.filter((item) => item.id != deletedItem.id);
    console.log('deletedItem ',deletedItem);
    console.log('arrayNuevo ',arrayNuevo)
    setFavoritos(arrayNuevo);    
  };

  useEffect(()=>{
    localStorage.setItem("favoritos", JSON.stringify(favoritos));
  },[favoritos])

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
