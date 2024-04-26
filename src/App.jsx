import './App.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import Footer from './components/Footer/Footer';
/* import Origen from './components/Origen/Origen'; */

function App() {


  return (
    <>
    
      <NavBar />

      <ItemListContainer />

      <Footer />

      <ToastContainer />
    </>
  )
}

export default App;
