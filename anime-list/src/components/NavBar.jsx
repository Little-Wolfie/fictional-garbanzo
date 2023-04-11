const NavBar = () => {
	return (
		<header className='nav-bar'>
			<h1>Some Anime List</h1>
			<form className='search-input'>
				<input type='text' />
				<button>Search</button>
			</form>
		</header>
	);
};

export default NavBar;
