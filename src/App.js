import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import FavoritosProvider from './context/FavoritosContext';
import CreacionesProvider from './context/CreacionesContext';

function App() {
   return (
      <div>
         <CreacionesProvider>
         <FavoritosProvider>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
         </FavoritosProvider>
         </CreacionesProvider>
      </div>
   );
}


export default App;
