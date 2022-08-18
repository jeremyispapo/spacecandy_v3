import React, { useContext } from 'react'
import './Store.css'
import {Card} from '../Card/Card'
import { Context } from '../../context/Context'

export const Store = () => {
	const {candys} = useContext(Context)
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
						id={candy.id}
						key={i}
						/>
				))
			}
			
		</div>
	</main>
  )
}
