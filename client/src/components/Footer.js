import { Link } from 'react-router-dom';

const Footer = () => {
	return (
		<footer>
			<Link to="/about">About</Link>
			<p>Copyright &copy; 2021</p>
		</footer>
	);
};

export default Footer;
