import React from 'react';
import './App.module.scss';
import BaseLayout from "./components/BaseLayout";
import {BrowserRouter} from "react-router-dom";
import FavoritosProvider from './context/FavoritosContext';

function App() {
   return (
      <div>
         <FavoritosProvider>
         <BrowserRouter>
            <BaseLayout/>
         </BrowserRouter>
         </FavoritosProvider>
      </div>
   );
}


export default App;
