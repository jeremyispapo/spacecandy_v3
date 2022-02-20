import React from 'react'
import { Link } from 'react-router-dom'
import './Admin.css'

export const Admin = () => {
  return (
	<main className="admin">
		<div className="admin__wrapper">
			<section className="admin__create">
				<h2 className="admin__title">🚧 Crear Caramelo 🚧</h2>
				<form className="admin__form form">
					<label className="form__section" htmlFor="namecandy">
						<h3 className="form__title">Nombre</h3>
					<input className="form__input-default" type="text" maxLength="20" id="namecandy" />
					</label>
					<label className="form__section" htmlFor="typecandy">
						<h3 className="form__title">Tipo</h3>
						<select name="typecandy" id="typecandy">
							<option select="true" value="0">Tipo Caramelo</option>
							<option value="lollipop">Lollipop</option>
							<option value="candy">Candy</option>
							<option value="Chicle">Chicle</option>
						</select>
					</label>
					<label className="form__section" htmlFor="colorcandy">
						<h3 className="form__title">Color</h3>
						<input type="color" name="colorcandy" id="colorcandy" />
					</label>
					<label className="form__section" htmlFor="powercandy">
						<h3 className="form__title">Poder</h3>
						<textarea className="form__textarea" name="powercandy" id="powercandy" placeholder="Describe el efecto de tu caramelo "></textarea>
					</label>
					<label className="form__section" htmlFor="pricecandy">
						<h3 className="form__title">Precio</h3>
						<input className="form__input-default" type="text" id="pricecandy" />
					</label>
					<input className="btn--create" type="button" value="Crear Caramelo 🍬" />
					<div className="preview__candy"></div>
					<Link className="btn--create link" to="/store">Ir a la Tienda</Link>
				</form>
			</section>
		</div>
	</main>
  )
}