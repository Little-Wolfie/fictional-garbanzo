import './App.css';
import NavBar from './components/NavBar';
import ListContainer from './components/ListContainer';
import { useEffect, useState } from 'react';

function App() {
	return (
		<div className='App'>
			<NavBar />
			<ListContainer
				title='Hot Picks'
				listType='score'
			/>
			<ListContainer
				title='Latest'
				listType='year'
			/>
		</div>
	);
}

export default App;
