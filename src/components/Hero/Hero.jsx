import React from 'react'
import { Link } from 'react-router-dom'
import moon from '../../assets/images/moon.png'
import './Hero.css'

export const Hero = () => {
  return (
	<main className="main">
		<div className="hero">
			<img className="luna" width="240" height="240" src={moon} alt="Luna" />
			<h1 className="hero__title">SpaceCandy</h1>

			<div className="buttons">
				<Link to="/create-candy" className="btn">Crear Caramelo 🚧</Link>
				<Link to="/store" className="btn">Comprar Caramelo 💵</Link>
			</div>
		</div>
	</main>
  )
}
