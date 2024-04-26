import React, { useState, useEffect } from 'react';

import Productos from "../../data/Productos"; // Asegúrate de importar los productos

const Cards = () => {
  const [productosObtenidos, setProductosObtenidos] = useState([]);

  useEffect(() => {
    const obtenerProductos = async () => {
      try {
        const respuesta = await Productos; // Espera la promesa para obtener los productos
        setProductosObtenidos(respuesta);
      } catch (error) {
        console.error('Error al obtener los productos:', error);
      }
    };

    obtenerProductos();
  }, []);

  return (
    <div>
      {productosObtenidos.map((producto) => (
        <h1 key={producto.id}>Producto {producto.precio}</h1>
      ))}
    </div>
  );
};

export default Cards;

------------------------------

import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import "./itemlistcontainer.css"

import getProducts from "../../data/data";

const ItemListContainer = ({ saludo }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts()
      .then((respuesta) => {
        setProducts(respuesta);
      })
      .catch((error) => {
        console.error(error);
      })
      .finally(() => {
        console.log("Finalo la promesa");
      });
  }, []);

  return (
    <div>
      <p>{saludo}</p>
      <ItemList products = {products} />
    </div>
  );
};
export default ItemListContainer;
----------------------------------------------------------
import Item from "./Item"

const ItemList = ({ products }) => {
  return (
    <div>
      {
        products.map( (product) => (
          <Item key={product.id} product={product} />
        ))
      }
    </div>
  )
}
export default ItemList
-----------------------------------------------------------------
const Item = ({ product }) => {
    return (
      <div>
        <img src={product.image} style={{ width: "200px" }} />
        <p>{product.name}</p>
        <p>Precio: {product.price} </p>
      </div>
    );
  };
  export default Item;