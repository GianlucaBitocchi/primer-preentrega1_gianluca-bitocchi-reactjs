import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";


import "bulma/css/bulma.css";
import "./App.css";


function App() {

    return (

        <div className="App">
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="*" element={<h1>404 NOT FOUND</h1>} />
                </Routes>
            </BrowserRouter>
            <footer className="has-background-black">
                <p className="has-text-success mt-6 p-4 texto">Copyright GBPROPARTS - 2023   ●   Todos los derechos reservados   ●   Creado por GianlucaBitocchi . </p>
            </footer>
        </div>
    )

}

export default App;