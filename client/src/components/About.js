import { Link } from 'react-router-dom';

const About = () => {
	return (
		<div>
			<h4>Version 1.0.0</h4>
			<h4>
				Supper Club is an app to perform CRUD operations on custom menues so
				that your group of friends can throw the perfect party
			</h4>
			<Link to="/">Go Back</Link>
		</div>
	);
};

export default About;
