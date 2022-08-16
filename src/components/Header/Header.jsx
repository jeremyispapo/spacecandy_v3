import React, {useState,useContext} from 'react'
import {Modal} from '../Modal/Modal'
import {Link } from 'react-router-dom'
import './Header.css'
import { Context } from '../../context/Context'

function Header() {
	const {carrito} = useContext(Context)
	const [modal, setModal] = useState(false)
  return (
	<header className="header">
		<nav className="navbar">
			<h1 >
				<Link to="/" className="header__title">
				SpaceCandy
				</Link>
				</h1>
			<div className="carrito"
				onClick={() => setModal(!modal)}
			>
				🛒
			</div>
		</nav>
		{
			modal ? <Modal carrito={carrito} /> : null
		}
	</header>
  )
}

export {Header}