import React from "react";
import './Card.css'

export const Card = () => {
  return (
    <div className="card">
      <div className="card__figure">
        <img src="fs" alt="caramelo" className="card__img" />
        <span className="card__price">$12</span>
      </div>
      <div className="card__content">
        <h3 className="card__title">Titulo Caramelo</h3>
        <p className="card__desc">Lorem ipsum dolor sit amet, consectet</p>
		<button className="card__button">Añadir al Carrito 🛒</button>
      </div>
    </div>
  );
};
