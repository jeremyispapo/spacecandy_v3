import React, { useState } from "react";
import { createContext } from "react";

export const Context = createContext();

export const ContextProvider = ({ children }) => {
  const [candys, setCandys] = useState([]);
  const [carrito, setCarrito] = useState([]);


  function deleteCarrito(id) {
    console.table(carrito)
    console.log(id)
    const newList = carrito.filter((_,index) => index !== id);
    setCarrito(newList);
  }


  return (
    <Context.Provider
      value={{ candys, setCandys, carrito, setCarrito, deleteCarrito }}
    >
      {children}
    </Context.Provider>
  );
};
