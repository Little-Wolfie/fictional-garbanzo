const ListItem = () => {
	return (
		<article className='list-item'>
			<div className='card'>
				<div className='temp-img'></div>
				<p className='card-title'>
					<strong>Anime Title</strong>
				</p>
				<p className='card-date'>Release Date</p>
				<p className='card-score'>8.95</p>
			</div>
		</article>
	);
};

export default ListItem;
