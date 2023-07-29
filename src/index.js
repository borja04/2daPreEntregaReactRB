//impotar librferias
import './css/ItemDetail.css';
import React from "react";
import ReactDOM from "react-dom/client";
import NavBar from "./NavBar";
import ItemListContainer from "./ItemListContainer";
import ItemCount from "./ItemCount";
import ItemDetailContainer from "./ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { db } from "./config/firebase";
import { getDocs, collection } from "firebase/firestore";
import { useState, useEffect } from "react";


//referencia al div con id root
const el = document.getElementById("root");

//react toma control del elemento
const root = ReactDOM.createRoot(el);

function App() {
    // Estado local para almacenar la lista de elementos desde la base de datos
    const [itemList, setItemList] = useState([]);

    // Referencia a la colección "Items" en la base de datos
    const itemCollectionRef = collection(db, "Items");

    // UseEffect se ejecuta cuando el componente se monta ([] como segundo argumento asegura que solo se ejecute una vez)
    useEffect(() => {
        // Función asincrónica para obtener la lista de elementos de la base de datos
        const getItemList = async () => {
            // Obtiene todos los documentos de la colección "Items"
            const data = await getDocs(itemCollectionRef);
            console.log("data: " + data.docs);
            
            // Mapea los documentos obtenidos y agrega un campo "id" a cada objeto para tener una referencia única
            const filteredData = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

            // Muestra en la consola los datos obtenidos
            console.log(filteredData);

            // Actualiza el estado local con los datos filtrados de la base de datos
            setItemList(filteredData);
        }
        
        // Llama a la función para obtener los datos cuando el componente se monta
        getItemList();
        
    }, []); // El arreglo vacío asegura que esta función de efecto solo se ejecute una vez al montar el componente

    // Aquí continuaría el resto de tu código de la aplicación
    // ...

    // Devuelve el contenido de la app, puede ser una lista, una tabla, etc.
    return (
        
        <div className="App">
            <BrowserRouter>
                <NavBar />  
                <Routes>
                    <Route path='/' element={<ItemListContainer/>}/>
                    <Route path='/category/:categoryId' element={<ItemListContainer/>}/>
                    <Route path='/item/:itemId' element={<ItemDetailContainer />}/>
                </Routes> 
            </BrowserRouter>
            <div className='container'>
                {itemList.map((item) => (
                    <div className="card" key={item.id}>
                        <img className="card img" src={item.Img}></img>
                        <h2 className='card-title'>{item.Name}</h2>
                        <p className='card-description'>{item.Description}</p>
                        <p className='card-description card-price'>${item.Price}</p>
                        <button className='card-button'>Agregar</button>
                    </div>
                    
                ))}
            </div>

        </div>
    );

};

//mostrar contenido en la pantalla
root.render(<App />)
