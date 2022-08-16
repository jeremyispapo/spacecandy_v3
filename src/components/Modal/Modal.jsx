import React from 'react'
import './Modal.css'


export const Modal = ({carrito}) => {
	
  return (
	<div className="modal">
		<h2 className="modal__title">Carrito:</h2>
		<ul className="modal__content">
			{
				carrito.map((item, i)=>
				<li key={i}>
					{item.title} -- $ {item.price}
				</li>
  				)
			}
		</ul>
	</div>
  )
}
