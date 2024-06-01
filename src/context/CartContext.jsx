import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const CartProvider = ({children}) => {
    const [carrito, setCarrito] = useState(() => {
        // Iniciamos el LocalStorage si no hay nada inicia un Array vacio
        const savedCarrito = localStorage.getItem("carrito");
        return savedCarrito ? JSON.parse(savedCarrito) : [];
      });

    //Guardamos los cambios en LocalStorage
    useEffect (() => {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }, [carrito])

    //Agregar Productos al Carrito
    const agregarProducto = (nuevoProducto) => {
        const condicion = verDuplicados(nuevoProducto.id)
        if (condicion) {
            // Si el producto esta en el carrito solo lo sumamos
            const temp = carrito.map((producto)=>{ 
                if (producto.id === nuevoProducto.id) {
                    return { ...producto, cantidad: producto.cantidad + nuevoProducto.cantidad}
                } else {
                    return  producto
                }
            })

            setCarrito(temp)
        } else {
            // Si el producto no esta en el carrito lo agregamos
            setCarrito([...carrito, nuevoProducto])
        }

    }

    //Mostrar la cantidad de item que tenemos en el carrito
    const cantidadCarrito = () => {
        const cantidadTotal =carrito.reduce((total, producto)=>total + producto.cantidad, 0)
        return cantidadTotal
    }

    // Eliminar Todo del carrito
    const vaciarCarrito = () => {
        setCarrito([])
    }

    // Eliminar producto especifico
    const borrarProductoEspecifico = (idProducto)=> {
        const productosFiltrados = carrito.filter((producto)=> producto.id !== idProducto)
        setCarrito(productosFiltrados)
    }


    //Productos duplicados y apilar
    const verDuplicados = (idProducto) => {
        const condicion = carrito.some((productosSeparados) => productosSeparados.id === idProducto)
        return condicion
    }

    // Precio Total
    const precioTotal = () => {
        const totalPedido = carrito.reduce((total, producto)=>total + (producto.precio * producto.cantidad), 0)
        return totalPedido

    }


    return (
    <CartContext.Provider value={{carrito, agregarProducto, cantidadCarrito, vaciarCarrito, borrarProductoEspecifico, precioTotal }}>
        {children}
    </CartContext.Provider>)
};

export {CartContext, CartProvider}
