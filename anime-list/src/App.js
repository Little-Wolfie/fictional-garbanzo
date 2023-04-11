import './App.css';
import NavBar from './components/NavBar';
import ListContainer from './components/ListContainer';

function App() {
	return (
		<body className='App'>
			<NavBar />
			<ListContainer title='Hot Picks' />
			<ListContainer title='Latest' />
		</body>
	);
}

export default App;
