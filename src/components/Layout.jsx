import React, { useState, useEffect } from 'react';

import { Navigation } from './Navigation';
import { Header } from './Header';
import { Features } from './Features';
import { About } from './About';
import { Plans } from './plans/Plans';
import { Contact } from './contact/Contact';

import JsonData from '../data/data.json';
import SmoothScroll from 'smooth-scroll';

export const scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});

const Layout = () => {
	const [landingPageData, setLandingPageData] = useState({});
	useEffect(() => {
		setLandingPageData(JsonData);
	}, []);

	return (
		<>
			<Navigation />
			<Header data={landingPageData.Header} />
			<Features data={landingPageData.Features} />
			<About data={landingPageData.About} />
			<Plans data={landingPageData.Plans} />
			<Contact data={landingPageData.Contact} />
			{/* 
      
      
      <Gallery data={landingPageData.Gallery} />
      <Testimonials data={landingPageData.Testimonials} />
      <Team data={landingPageData.Team} />
       */}
		</>
	);
};

export default Layout;
