const ListItem = props => {
	return (
		<article className='list-item'>
			<img
				className='card-img'
				src={props.show.images.jpg.image_url}
			></img>
			<p className='card-title'>
				<strong>{props.show.title}</strong>
			</p>
			<p className='card-date'>{props.show.aired.prop.from.year}</p>
			<p className='card-score'>{props.show.score}</p>
		</article>
	);
};

export default ListItem;
