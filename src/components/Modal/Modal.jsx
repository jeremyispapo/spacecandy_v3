import React, {useContext} from 'react'
import ItemCard from '../ItemCard/ItemCard'
import { Context } from '../../context/Context'
import './Modal.css'


export const Modal = () => {
  const {carrito} = useContext(Context)
  const total = carrito.reduce((acumulador,{price})=> acumulador + price,0)
  return (
	<div className="modal">
		<h2 className="modal__title">Carrito de Compra:</h2>
		<ul className="modal__content">
			{
				carrito.map((item, i)=>
				<ItemCard item={item} indexValue={i} key={i} />
  				)
			}

			{
				carrito.length === 0 ? "No hay elementos" : null
			}
			{

				carrito.length === 0 ? null : <li className='modal__results'> Total a pagar: {total} </li>
			}

		</ul>
	</div>
  )
}
