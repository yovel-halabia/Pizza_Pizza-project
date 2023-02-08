import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {store} from "./Redux/store";
import {Provider} from "react-redux";

window.React = React;

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById("root"),
);


