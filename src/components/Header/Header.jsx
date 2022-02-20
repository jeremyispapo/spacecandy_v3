import React from 'react'
import './Header.css'

function Header() {
  return (
	<header className="header">
		<nav className="navbar">
			<h1>SpaceCandy</h1>
			<div className="carrito">
				🛒
			</div>
		</nav>
	</header>
  )
}

export {Header}