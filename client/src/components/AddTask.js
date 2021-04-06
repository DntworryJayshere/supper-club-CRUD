import { useState } from 'react';

const AddTask = ({ onAdd }) => {
	const [text, setText] = useState('');
	const [day, setDay] = useState('');
	const [reminder, setReminder] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();

		if (!text) {
			alert('Please add a menu');
			return;
		}

		onAdd({ text, day, reminder });

		setText('');
		setDay('');
		setReminder(false);
	};

	return (
		<form className="add-form" onSubmit={onSubmit}>
			<div className="form-control">
				<label>Menu</label>
				<input
					type="text"
					placeholder="Add Menu"
					value={text}
					onChange={(e) => setText(e.target.value)}
				/>
			</div>
			<div className="form-control">
				<label>Ingredients</label>
				<input
					type="text"
					placeholder="Add Ingredients"
					value={day}
					onChange={(e) => setDay(e.target.value)}
				/>
			</div>
			<div className="form-control form-control-check">
				<label>Set Reminder</label>
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

export default AddTask;
