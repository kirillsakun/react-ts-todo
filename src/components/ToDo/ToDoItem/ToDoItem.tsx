import React, {useMemo} from 'react';
import {ToDoItemPropertiesInterface, ToDoItemActionInterface} from "../../../types/ToDo";
import './ToDoItem.scss'

interface ToDoFormPropsInterface extends ToDoItemPropertiesInterface, ToDoItemActionInterface {}


const ToDoItem: React.FunctionComponent<ToDoFormPropsInterface> = (props) => {

	const stateButtonText = useMemo(() => {
		return props.isComplete ? 'Mark as incomplete' : 'Mark us complete'
	}, [props.isComplete])

	const className = useMemo(() => {
		return props.isComplete ? 'todo__item todo__item--completed' : 'todo__item'
	}, [props.isComplete])

	return (
		<li className={className}>
			<div className="todo__text"> {props.text} </div>
			<div className="todo__actions">
				<button onClick={() => props.deleteItem(props.id)}>Delete</button>
				<button onClick={() => {
					props.setCompleteState(props.id, !props.isComplete)
				}}>{stateButtonText}</button>
			</div>
		</li>
	)
}

export default ToDoItem
