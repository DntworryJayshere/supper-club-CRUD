import { FaTimes } from 'react-icons/fa';

const Menu = ({ menu, onDelete, onToggle }) => {
	return (
		<div
			className={`menu ${menu.reminder ? 'reminder' : ''}`}
			onDoubleClick={() => onToggle(menu.id)}
		>
			<h3>
				{menu.text}{' '}
				<FaTimes
					style={{ color: 'red', cursor: 'pointer' }}
					onClick={() => onDelete(menu.id)}
				/>
			</h3>
		</div>
	);
};

export default Menu;
