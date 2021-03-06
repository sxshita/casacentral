import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Home from "../../pages/home/Home";
import Nosotros from "../../pages/nosotros/Nosotros";
import Contacto from "../../pages/contacto/Contacto";
import Navbar from "./Navbar";
import Modelos from "../../pages/modelos/Modelos";
import ModeloContainer from '../../pages/modelos/modelo/ModeloContainer';
import ModelosNav from "../../pages/modelos/ModelosNav";
import ScrolltoTop from "./ScrolltoTop";



function Menu(){
    return(
      <>
        <div>
           <Router>
                <Navbar/>
                <ScrolltoTop/>
                <Routes>
                    <Route exact path="/nosotros"  element={<Nosotros/>}/>
                    <Route exact path="/modelos" element={<><ModelosNav/> <Modelos/></>}/>
                    <Route exact path="/contacto" element={<Contacto/>}/>

                    <Route exact path="/" element={<Home/>}/>
                    <Route exact path="/marcas/:marcaId" element={<><ModelosNav/> <Modelos/></>}/>
                    <Route exact path="/modelos/:marcaId/:modeloId" element={<ModeloContainer/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Routes>
           </Router>
        </div>
      </>  
    );
}
export default Menu;