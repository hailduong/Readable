// Import React 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Import Others
import registerServiceWorker from './registerServiceWorker';
import './index.css';

// Import Redux
import {createStore, compose, applyMiddleware} from "redux";
import {Provider} from "react-redux";
import reducers from "./reducers/reducers";
import ReduxThunk from 'redux-thunk';

const store = createStore(
	reducers,
	compose(
		applyMiddleware(ReduxThunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
	)
);


// Render
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();