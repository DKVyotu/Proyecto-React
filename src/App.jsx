import './App.css';

import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {


  return (
    <>
      <NavBar />
        
      <ItemListContainer props="Contenido de mi WEB" saludo={"Hola mundo"} />
    </>
  )
}

export default App;
