import React from "react";
import Canva from "./page/canva/canva";
import { HashRouter,Routes,Route } from "react-router-dom";
const App = () =>{
  return(
    <HashRouter>
          <Routes>
            <Route path="/" element={<Canva/>} />
          </Routes>
    </HashRouter>
   
  )
}

export default App;
