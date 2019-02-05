import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const App = props => (
	<Router basename={props.path}>
		<Route
			// matches with this example http://localhost:3000/02-28-2017.html
			path="/:a(\d{2}-\d{2}-\d{4}):b(\.[a-z]+)"
			render={({ match }) => (
				<React.Fragment>
					<h1>paramA: {match.params.a}</h1>
					<h1>paramB: {match.params.b}</h1>
				</React.Fragment>
			)}
		/>
	</Router>
);

export default App;
const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
