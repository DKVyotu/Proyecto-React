const Productos = [
  {
    id: "1",
    nombre: "Pisco Puro",
    variedad: "Moscatel de Alejandría (Italia)",
    descripcion: "Envase de Vidrio => 500 ML",
    precio: 45,
    stock: 10,
    categoria: "Pisco",
    imagen: "/Imagenes/PiscoPuro1.png",
  },
  {
    id: "2",
    nombre: "Pisco Puro",
    variedad: "Moscatel de Alejandría (Italia)",
    descripcion: "Envase de Plastico => 1000 ML",
    precio: 60,
    stock: 5,
    categoria: "Pisco",
    imagen: "/Imagenes/BotellaPasticoGenerica.png",
  },
  {
    id: "3",
    nombre: "Pisco Puro",
    variedad: "Quebranta",
    descripcion: "Envase de Vidrio => 500 ML",
    precio: 45,
    stock: 99,
    categoria: "Pisco",
    imagen: "/Imagenes/PiscoPuroQuebranta.png",
  },
  {
    id: "4",
    nombre: "Pisco Puro",
    variedad: "Quebranta",
    descripcion: "Envase de Plastico => 1000 ML",
    precio: 60,
    stock: 29,
    categoria: "Pisco",
    imagen: "/Imagenes/BotellaPasticoGenerica.png",
  },
  {
    id: "5",
    nombre: "Pisco Puro",
    variedad: "Negra Criolla",
    descripcion: "Envase de Vidrio => 500 ML",
    precio: 45,
    stock: 34,
    categoria: "Pisco",
    imagen: "/Imagenes/PiscoPuroNegraCriolla.png",
  },
  {
    id: "6",
    nombre: "Pisco Puro",
    variedad: "Negra Criolla",
    descripcion: "Envase de Plastico => 1000 ML",
    precio: 60,
    stock: 12,
    categoria: "Pisco",
    imagen: "/Imagenes/BotellaPasticoGenerica.png",
  },
  {
    id: "7",
    nombre: "Pisco Acholado",
    variedad: "Moscatel de Alejandría, Negra Criolla y Quebranta",
    descripcion: "Envase de Vidrio => 500 ML",
    precio: 45,
    stock: 34,
    categoria: "Pisco",
    imagen: "/Imagenes/PiscoAcholado.png",
  },
  {
    id: "8",
    nombre: "Pisco Acholado",
    variedad: "Moscatel de Alejandría, Negra Criolla y Quebranta",
    descripcion: "Envase de Plastico => 1000 ML",
    precio: 60,
    stock: 12,
    categoria: "Pisco",
    imagen: "/Imagenes/BotellaPasticoGenerica.png",
  },

];

const ObtenerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(Productos);
    }, 1000);
  });
};

export default ObtenerProductos;
