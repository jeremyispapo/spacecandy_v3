import React, {useState} from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {Header} from './components/Header/Header'

import {Hero} from './components/Hero/Hero'
import {Admin} from './components/Admin/Admin'
import {Store} from './components/Store/Store'
import './App.css'

function App() {
	const [candys, setCandys] = useState([])
	
		return (
		<>
			<BrowserRouter>
				<Header />
				<Routes>
					<Route path="/" element={ <Hero/> } />
					<Route path="/create-candy" element={ 
					
						<Admin 
						candys={candys} 
						setCandys={setCandys}
						/> 
					} />
					<Route path="/store" element={
						<Store 
						candys={candys}
						setCandys={setCandys}
						/>
					} />
				</Routes>
			</BrowserRouter>
		</>
	)
}

export default App;
