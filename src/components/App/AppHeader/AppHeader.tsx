import React from "react";
import './AppHeader.scss'

const AppHeader:React.FunctionComponent = () => {
	return (
		<header className="app-header">
			<div className="container app-header__container">
				<h1>Basic to do list</h1>
			</div>
		</header>
	)
}

export default AppHeader;
