import { useRef, useState, useEffect } from 'react';
import ListItem from './ListItem';

const ListContainer = props => {
	const [shows, setShows] = useState([]);
	const containerRef = useRef(null);
	const containerSize = 25;
	let url = 'https://api.jikan.moe/v4/anime?sfw';

	useEffect(() => {
		if (props.listType === 'score') {
			url = 'https://api.jikan.moe/v4/anime?sfw&order_by=score&sort=desc';
		} else if (props.listType === 'year') {
			url =
				// use template literal for date to be dynamic, use new Date().now maybe?
				'https://api.jikan.moe/v4/anime?sfw&min_score=6&start_date=2023&status=airing&order_by=start_date';
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
			<div className='title-wrapper'>
				<h2 className='container-title'>{props.title}</h2>
				<h3 className='more-link'>More...</h3>
			</div>

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
