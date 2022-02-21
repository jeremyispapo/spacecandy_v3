import React from 'react'
import { Link } from 'react-router-dom'
import './Header.css'

function Header() {
  return (
	<header className="header">
		<nav className="navbar">
			<h1>SpaceCandy</h1>
			{/* <Link to="/create-candy">Holar</Link> */}
			<div className="carrito">
				🛒
			</div>
		<Link to="/create-candy">
		Ir a crear
		</Link>
		</nav>
	</header>
  )
}

export {Header}