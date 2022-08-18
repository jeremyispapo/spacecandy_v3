import React, { useContext } from "react";
import { Context } from "../../context/Context";
import { RenderCandy } from "../../utils/renderCandy";
import "./ItemCard.css"

const ItemCard = (props) => {
  const {item,indexValue} = props
  const { deleteCarrito } = useContext(Context);
  return (
    <li className="ItemCard" >
      <p className="ItemCard__title" > {item.title} </p>
      <p className="ItemCard__price" > S./ {item.price}.00 </p>
      <button className="ItemCard__btn" onClick={() => deleteCarrito(indexValue)}> Quitar </button>
      <div className="ItemCard__img" > {
        <RenderCandy type={item.type} color={item.color} />
      } </div>
    </li>
  );
};

export default ItemCard
