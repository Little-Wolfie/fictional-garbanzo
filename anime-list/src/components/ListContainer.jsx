import { useRef, useState, useEffect } from 'react';
import ListItem from './ListItem';

const ListContainer = props => {
	const [shows, setShows] = useState([]);
	const containerRef = useRef(null);
	const containerSize = 25;
	let url = 'https://api.jikan.moe/v4/anime';

	useEffect(() => {
		if (props.listType === 'score') {
			url = 'https://api.jikan.moe/v4/anime?order_by=score&sort=desc';
		} else if (props.listType === 'year') {
			url = 'https://api.jikan.moe/v4/anime?start_date=2023&sort=desc';
		}

		fetch(url)
			.then(res => res.json())
			.then(data => setShows(data.data));
	}, []);

	const handleScrollLeft = e => {
		containerRef.current.scrollBy(-250, 0);
	};
	const handleScrollRight = e => {
		containerRef.current.scrollBy(250, 0);
	};

	return (
		<div>
			<h2 className='container-title'>{props.title}</h2>
			<div className='container-wrapper'>
				<button
					className='scroll-btn scroll-left'
					onClick={handleScrollLeft}
				>
					{'<'}
				</button>
				<div
					className='container'
					ref={containerRef}
				>
					{shows.map(show => (
						<ListItem
							key={show.mal_id}
							show={show}
						/>
					))}
				</div>
				<button
					className='scroll-btn scroll-right'
					onClick={handleScrollRight}
				>
					{'>'}
				</button>
			</div>
		</div>
	);
};

export default ListContainer;
