import React from 'react';
import AppHeader from './components/App/AppHeader/AppHeader';
import AppFooter from './components/App/AppFooter/AppFooter';
import AppMain from './components/App/AppMain/AppMain';
import './App.scss';
import ToDo from './components/ToDo/ToDo';


const App: React.FunctionComponent = () => (
	<div className="app">
		<AppHeader />
		<AppMain>
			<ToDo />
		</AppMain>
		<AppFooter />
	</div>
);

export default App;
