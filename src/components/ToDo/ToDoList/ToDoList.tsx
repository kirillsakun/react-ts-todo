import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import { ToDoItemPropertiesInterface, ToDoItemActionInterface } from '../../../types/ToDo';

interface ToDoListPropsInterface {
	items: ToDoItemPropertiesInterface[],
	actions: ToDoItemActionInterface
}


const ToDoList: React.FunctionComponent<ToDoListPropsInterface> = ({ items, actions }) => (
	<ul>
		{items.map((item) => (
			<ToDoItem
				key={item.id}
				id={item.id}
				isComplete={item.isComplete}
				text={item.text}
				deleteItem={actions.deleteItem}
				setCompleteState={actions.setCompleteState}
			/>
		))}
	</ul>
);

export default ToDoList;
