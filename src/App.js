import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

const Links = () => (
	<nav>
		<Link to="/page">Page</Link>
		<Link to="/page/subpage">Subpage</Link>
	</nav>
);

const App = props => (
	<Router basename={props.path}>
		<Route
			path="/:page?/:subpage?"
			render={({ match }) => (
				<React.Fragment>
					<Links />
					<h2>Page: {match.params.page || 'Home'}</h2>
					<h2>Subpage: {match.params.subpage}</h2>
				</React.Fragment>
			)}
		/>
	</Router>
);

export default App;
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
