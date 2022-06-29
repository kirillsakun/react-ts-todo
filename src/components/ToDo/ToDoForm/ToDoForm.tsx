import React, { useState } from 'react';
import { ToDoItemPropertiesInterface } from '../../../types/ToDo';

interface ToDoFormPropsInterface {
	addToDo: (newToDo: ToDoItemPropertiesInterface) => void
}

const ToDoForm: React.FunctionComponent<ToDoFormPropsInterface> = ({ addToDo }) => {
	const [newTodoText, setNewTodoText] = useState<string>('');

	const onSubmit = (event: React.FormEvent) => {
		const id = Date.now();
		const isComplete = false;

		event.preventDefault();

		addToDo({
			id,
			isComplete,
			text: newTodoText,
		});

		setNewTodoText('');
	};

	return (
		<form onSubmit={onSubmit}>
			<input
				required
				type="text"
				value={newTodoText}
				onChange={(event) => setNewTodoText(event.target.value)}
			/>
			<button type="submit">Add</button>
		</form>
	);
};


export default ToDoForm;
