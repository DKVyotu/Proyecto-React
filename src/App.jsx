import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Origen from './components/Origen/Origen';
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        
        <Route path="/" element={<Home />}/>

        <Route path="/Productos" element={<ItemListContainer />}/>
        <Route path="/Categoria/:idCategoria" element={<ItemListContainer />}/>
        
        <Route path="/Origen" element={<Origen />}/>
        
        <Route path="/Producto/:idProducto" element={<ItemDetailContainer />}/>
      </Routes>

      <Footer />

      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
