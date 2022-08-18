import React, {useState} from 'react'
import {Modal} from '../Modal/Modal'
import {Link } from 'react-router-dom'
import './Header.css'


function Header() {
	
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
			modal ? <Modal/> : null
		}
	</header>
  )
}

export {Header}