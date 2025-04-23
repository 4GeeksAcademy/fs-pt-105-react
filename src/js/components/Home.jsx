import React from "react";
import { Header} from './Header.jsx'
import { Core} from './Core.jsx'
import { Footer } from './Footer.jsx'
import { Card } from './Card.jsx'

export const Home = () => {
	return (
		<>
			<Header/>
			<Core/>
            <div className="card-style row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 row-cols-xl-4 g-3">
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
			<Footer/>
		</>
	);
};

