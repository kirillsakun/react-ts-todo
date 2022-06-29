import React, { useMemo } from 'react';
import { ToDoItemPropertiesInterface, ToDoItemActionInterface } from '../../../types/ToDo';
import './ToDoItem.scss';

interface ToDoFormPropsInterface extends ToDoItemPropertiesInterface, ToDoItemActionInterface {}


const ToDoItem: React.FunctionComponent<ToDoFormPropsInterface> = ({
	isComplete, id, text, deleteItem, setCompleteState,
}) => {
	const stateButtonText = useMemo(() => (isComplete ? 'Mark as incomplete' : 'Mark us complete'), [isComplete]);

	const className = useMemo(() => (isComplete ? 'todo__item todo__item--completed' : 'todo__item'), [isComplete]);

	return (
		<li className={className}>
			<div className="todo__text">
				{ text }
			</div>
			<div className="todo__actions">
				<button type="button" onClick={() => deleteItem(id)}>Delete</button>
				<button
					type="button"
					onClick={() => {
						setCompleteState(id, !isComplete);
					}}
				>
					{ stateButtonText }
				</button>
			</div>
		</li>
	);
};

export default ToDoItem;
