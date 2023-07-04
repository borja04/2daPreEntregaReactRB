//impotar librferias
import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

//referencia al div con id root
const  el = document.getElementById("root");

//react toma control del elemento
const root = ReactDOM.createRoot(el);

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <NavBar />  
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                    <Route path='*' element={<h1>404 NOT FOUND</h1>}/> 
                </Routes> 
            </BrowserRouter>
        </div>
    )
};

//mostrar contenido en la pantalla
root.render(<App/>)

