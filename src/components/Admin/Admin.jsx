import React, {useState,useContext} from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../../context/Context'
import {RenderCandy} from '../../utils/renderCandy'
import './Admin.css'

export const Admin = () => {
  const {candys,setCandys} = useContext(Context)

  const [msg, setMsg] = useState(false)

	function createCandy({name,color,type,power,price}) {
		const newCandy = {
			name,
			color,
			type,
			power,
			price
		}
		const newList = [...candys,newCandy]
		setCandys(newList)
    setNombreCandy('')
    setPowerCandy('')
    setPriceCandy('')
    setMsg(true)
	}


	const [nombreCandy, setNombreCandy] = useState('')
	const [colorCandy, setColorCandy] = useState('')
	const [typeCandy, setTypeCandy] = useState('0')
	const [powerCandy, setPowerCandy] = useState('')
	const [priceCandy, setPriceCandy] = useState('')

  return (
    <main className="admin">
      <div className="admin__wrapper">
        <section className="admin__create">
          <h2 className="admin__title">🚧 Crear Caramelo 🚧</h2>
          {
            msg ? 
              <div className="msg">✅ Se creo un Caramelo nuevo </div>
            : null
          }
          <form className="admin__form form">
            <label className="form__section" htmlFor="namecandy">
              <h3 className="form__title">Nombre: {nombreCandy}</h3>
              <input
                className="form__input-default"
                type="text"
                maxLength="20"
                id="namecandy"
                value={nombreCandy}
                onChange={(e) => setNombreCandy(e.target.value)}
              />
            </label>
            <label className="form__section" htmlFor="typecandy">
              <h3 className="form__title">Tipo</h3>
              <select
                name="typecandy"
                id="typecandy"
                onChange={(e) => setTypeCandy(e.target.value)}
              >
                <option select="true" value="0">
                  Tipo Caramelo
                </option>
                <option value="lollipop">Lollipop</option>
                <option value="candy">Candy</option>
                <option value="Chicle">Chicle</option>
              </select>
            </label>
            <label className="form__section" htmlFor="colorcandy">
              <h3 className="form__title">Color {colorCandy}</h3>
              <input
                type="color"
                name="colorcandy"
                id="colorcandy"
                onChange={(e) => setColorCandy(e.target.value)}
              />
            </label>
            <label className="form__section" htmlFor="powercandy">
              <h3 className="form__title">Poder {powerCandy}</h3>
              <textarea
                className="form__textarea"
                name="powercandy"
                id="powercandy"
                placeholder="Describe el efecto de tu caramelo"
                onChange={(e) => setPowerCandy(e.target.value)}
              ></textarea>
            </label>
            <label className="form__section" htmlFor="pricecandy">
              <h3 className="form__title">Precio</h3>
              <input
                className="form__input-default"
                type="text"
                id="pricecandy"
                onChange={(e) => setPriceCandy(e.target.value)}
              />
            </label>
            <input
              className="btn--create"
              type="button"
              value="Crear Caramelo🍬"
              onClick={() => {
                createCandy({
                  name: nombreCandy,
                  color: colorCandy,
                  type: typeCandy,
                  power: powerCandy,
                  price: priceCandy,
                });
              }}
            />
          </form>
            <div className="preview__candy">
              <RenderCandy type={typeCandy} color={colorCandy} />
            </div>
            <Link className="btn--create link" to="/store">
              Ir a la Tienda
            </Link>
        </section>
      </div>
    </main>
  );
}