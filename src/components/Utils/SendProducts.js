import db from "../../db/db.js";
import { addDoc, collection } from "firebase/firestore";


const Productos = [
    {
      id: "1",
      nombre: "Pisco Puro",
      variedad: "Moscatel de Alejandría (Italia)",
      descripcion: "Envase de Vidrio => 500 ML",
      precio: 45,
      stock: 10,
      categoria: "Piscos",
      imagen: "/Imagenes/PiscoPuro1.png",
    },
    {
      id: "2",
      nombre: "Pisco Puro",
      variedad: "Moscatel de Alejandría (Italia)",
      descripcion: "Envase de Plastico => 1000 ML",
      precio: 60,
      stock: 5,
      categoria: "Piscos",
      imagen: "/Imagenes/BotellaPasticoGenerica.png",
    },
    {
      id: "3",
      nombre: "Pisco Puro",
      variedad: "Quebranta",
      descripcion: "Envase de Vidrio => 500 ML",
      precio: 45,
      stock: 99,
      categoria: "Piscos",
      imagen: "/Imagenes/PiscoPuroQuebranta.png",
    },
    {
      id: "4",
      nombre: "Pisco Puro",
      variedad: "Quebranta",
      descripcion: "Envase de Plastico => 1000 ML",
      precio: 60,
      stock: 29,
      categoria: "Piscos",
      imagen: "/Imagenes/BotellaPasticoGenerica.png",
    },
    {
      id: "5",
      nombre: "Pisco Puro",
      variedad: "Negra Criolla",
      descripcion: "Envase de Vidrio => 500 ML",
      precio: 45,
      stock: 34,
      categoria: "Piscos",
      imagen: "/Imagenes/PiscoPuroNegraCriolla.png",
    },
    {
      id: "6",
      nombre: "Pisco Puro",
      variedad: "Negra Criolla",
      descripcion: "Envase de Plastico => 1000 ML",
      precio: 60,
      stock: 12,
      categoria: "Piscos",
      imagen: "/Imagenes/BotellaPasticoGenerica.png",
    },
    {
      id: "7",
      nombre: "Pisco Acholado",
      variedad: "Moscatel de Alejandría, Negra Criolla y Quebranta",
      descripcion: "Envase de Vidrio => 500 ML",
      precio: 45,
      stock: 34,
      categoria: "Piscos",
      imagen: "/Imagenes/PiscoAcholado.png",
    },
    {
      id: "8",
      nombre: "Pisco Acholado",
      variedad: "Moscatel de Alejandría, Negra Criolla y Quebranta",
      descripcion: "Envase de Plastico => 1000 ML",
      precio: 60,
      stock: 12,
      categoria: "Piscos",
      imagen: "/Imagenes/BotellaPasticoGenerica.png",
    },
    {
      id: "9",
      nombre: "Vino",
      variedad: "Vino",
      descripcion: "Envase de Plastico => 1000 ML",
      precio: 60,
      stock: 12,
      categoria: "Vinos",
      imagen: "/Imagenes/BotellaPasticoGenerica.png",
    },
    {
      id: "10",
      nombre: "Macerado",
      variedad: "Macerado",
      descripcion: "Envase de Plastico => 1000 ML",
      precio: 60,
      stock: 12,
      categoria: "Macerados",
      imagen: "/Imagenes/BotellaPasticoGenerica.png",
    },
  
  ];


const sendProductos = () => {
    Productos.map(({id, ...rest}) => {
        addDoc(collection(db, "productos"), rest)
    });
}

sendProductos()