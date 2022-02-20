import React from 'react'
import './Store.css'
import {Card} from '../Card/Card'

export const Store = () => {
  return (
	<main className='store'>
		<div className="store__wrapper">
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</main>
  )
}
