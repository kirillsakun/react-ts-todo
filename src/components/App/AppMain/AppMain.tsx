import React from "react";
import './AppMain.scss'

interface ILayoutProps {
	children: React.ReactNode
}

const AppMain: React.FunctionComponent<ILayoutProps> = (props: ILayoutProps) => {
	return (
		<main className="app-main">
			{props.children}
		</main>
	)
}

export default AppMain;
