export interface ToDoItemPropertiesInterface {
	id: number,
	isComplete: boolean,
	text: string,
}

export interface ToDoItemActionInterface {
	deleteItem: (id: number) => void,
	setCompleteState: (id:number, isComplete: boolean) => void
}
