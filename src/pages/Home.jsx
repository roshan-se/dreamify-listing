import React from 'react';
import EventList from '../components/EventList';
import FeaturedCategories from '../components/FeaturedCategories';
import HeroBanner from '../components/HeroBanner';
import PopularListing from '../components/PopularListing';
import PopularPlaces from '../components/PopularPlaces';

const Home = () => {
	return (
		<div>
			<HeroBanner />
			<FeaturedCategories />
			<PopularListing />
			<PopularPlaces />
			<EventList />
		</div>
	);
};

export default Home;
