import React from 'react'
import './Store.css'
import {Card} from '../Card/Card'

export const Store = ({candys, setCarrito}) => {

  return (
	<main className='store'>
		<div className="store__wrapper">
			{
				candys.map((candy,i) => (
					<Card 
						title={candy.name} 
						price={candy.price}
						desc={candy.power}
						color={candy.color}
						type={candy.type}
						key={i}
						setCarrito={setCarrito}
						/>
				))
			}
			{/* <Card title={'hola'}/> */}
			
		</div>
	</main>
  )
}
