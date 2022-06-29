import React, { useState } from 'react';
import ToDoForm from './ToDoForm/ToDoForm';
import ToDoList from './ToDoList/ToDoList';
import { ToDoItemPropertiesInterface, ToDoItemActionInterface } from '../../types/ToDo';

import './ToDo.scss';


const ToDo:React.FunctionComponent = () => {
	const [toDoList, setToDoList] = useState<ToDoItemPropertiesInterface[]>([
		{
			id: 0,
			isComplete: false,
			text: 'Lorem ipsum dolor sit am',
		},
		{
			id: 1,
			isComplete: false,
			text: 'Lorem ipsum dolor sit am 2',
		},
	]);

	const addToDo = (newToDo:ToDoItemPropertiesInterface) => {
		setToDoList([...toDoList, newToDo]);
	};

	const setToDoCompleteState = (id: number, isComplete: boolean) => {
		setToDoList(toDoList.map((item) => {
			if (item.id === id) {
				// eslint-disable-next-line no-param-reassign
				item.isComplete = isComplete;
			}
			return item;
		}));
	};

	const deleteToDo = (id:number) => {
		setToDoList(toDoList.filter((item) => item.id !== id));
	};

	const toDoItemActions: ToDoItemActionInterface = {
		setCompleteState: setToDoCompleteState,
		deleteItem: deleteToDo,
	};

	return (
		<div className="todo">
			<ToDoForm addToDo={addToDo} />
			<ToDoList items={toDoList} actions={toDoItemActions} />
		</div>
	);
};

export default ToDo;
