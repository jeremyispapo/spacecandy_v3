import React, {useState} from 'react'
import { createContext } from 'react'

export const Context = createContext()

export const ContextProvider = ({children}) => {
	const [candys, setCandys] = useState([])
	const [carrito, setCarrito] = useState([])
  return (
	<Context.Provider value={{candys, setCandys,carrito,setCarrito}}>
		{children}
	</Context.Provider>
  )
}