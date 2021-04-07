import { useState } from 'react';

const AddMenu = ({ onAdd }) => {
	const [name, setText] = useState('');
	const [category, setText] = useState('');
	const [short_description, setText] = useState('');
	const [description, setText] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!name) {
			alert('Please add a menu');
			return;
		}

		onAdd({ name, category, short_description, description, reminder });

		setText('');
		setReminder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Name</label>
				<input
					type="text"
					placeholder="Add Menu Name"
					value={name}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Category</label>
				<input
					type="text"
					placeholder="Add Category"
					value={category}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Short Description</label>
				<input
					type="text"
					placeholder="Add Short Description"
					value={short_description}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Description</label>
				<input
					type="text"
					placeholder="Add Description"
					value={description}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control form-control-check">
				<label>Set Checkbox?</label>
				<input
					type="checkbox"
					checked={reminder}
					value={reminder}
					onChange={(e) => setReminder(e.currentTarget.checked)}
				/>
			</div>

			<input type="submit" value="Save Task" className="btn btn-block" />
		</form>
	);
};

export default AddMenu;
