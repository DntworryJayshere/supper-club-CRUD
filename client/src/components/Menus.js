import Menu from './Menu';

const Menus = ({ menus, onDelete, onToggle }) => {
	return (
		<>
			{menus.map((menu, index) => (
				<Menu key={index} meun={menu} onDelete={onDelete} onToggle={onToggle} />
			))}
		</>
	);
};

export default Menus;
