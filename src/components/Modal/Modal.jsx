import React from 'react'
import './Modal.css'

export const Modal = ({carrito}) => {
	console.log(carrito)
  return (
	<div className="modal">
		<h2 className="modal__title">Carrito:</h2>
		<ul className="modal__content">
			<li className="modal__item"></li>
		</ul>
	</div>
  )
}
