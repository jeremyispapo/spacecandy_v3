import React from 'react'
import {Route , Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
	<header className="header">
		<nav className="navbar">
			<h1 >
				<Link to="/" className="header__title">
				SpaceCandy
				</Link>
				</h1>
		<Link to="/create-candy">
		Ir a crear
		</Link>
			<div className="carrito">
				🛒
			</div>
		</nav>
	</header>
  )
}

export {Header}