import React from "react";
import Canva from "./page/canva/canva";
import { HashRouter,Routes,Route } from "react-router-dom";
import Canvalink from "./page/canvalink/canvalink";

const App = () =>{
  return(
    <HashRouter>
          <Routes>
            <Route path="/" element={<Canva/>} />
            <Route path="/courselink" element={<Canvalink/>} />
          </Routes>
    </HashRouter>
   
  )
}

export default App;
