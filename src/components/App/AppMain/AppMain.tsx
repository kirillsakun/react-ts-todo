import React from 'react';
import './AppMain.scss';

interface ILayoutProps {
	children: React.ReactNode
}

const AppMain: React.FunctionComponent<ILayoutProps> = ({ children }) => (
	<main className="app-main">
		{children}
	</main>
);

export default AppMain;
