import "./App.css";
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";

import Home from "./components/Home/Home"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

import Origen from './components/Origen/Origen';
import Error404 from "./components/Error404/Error404";

import Contacto from "./components/Contacto/Contacto";
import PreguntasFrecuentes from "./components/PreguntasFrecuentes/PreguntasFrecuentes"
import Terminos from "./components/Terminos/Terminos"
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer position="bottom-left" limit={4} />

        <NavBar />
    
        <Routes>
          
          <Route path="/" element={<Home />}/>
          <Route path="/Carrito" element={<Cart />}/>
    
          <Route path="/Productos" element={<ItemListContainer />}/>
          <Route path="/Categoria/:idCategoria" element={<ItemListContainer />}/>
          
          <Route path="/Origen" element={<Origen />}/>
          
          <Route path="/Producto/:idProducto" element={<ItemDetailContainer />}/>
    
          <Route path="/Contacto" element={<Contacto />}/>
          <Route path="/PreguntasFrecuentes" element={<PreguntasFrecuentes />}/>
          <Route path="/TerminosCondiciones" element={<Terminos />}/>
          <Route path="/Checkout" element={<Checkout />}/>

          <Route path="*" element={<Error404/>}/>
          
        </Routes>
    
        <Footer />
    
        
      </CartProvider >
    </BrowserRouter>
  );
}

export default App;
