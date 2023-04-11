import { useRef } from 'react';
import ListItem from './ListItem';

const ListContainer = props => {
	const containerRef = useRef(null);

	const handleScrollLeft = e => {
		containerRef.current.scrollBy(-200, 0);
	};
	const handleScrollRight = e => {
		containerRef.current.scrollBy(200, 0);
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
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
					<ListItem />
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
