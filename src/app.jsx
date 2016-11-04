require("./scss/style.scss");
import React from 'react';
import ReactDOM from 'react-dom';
import HelloWorld from './components/hello-world.jsx';
import TimerHolder from './components/timer-holder.jsx';

ReactDOM.render(
	<div>
	    <HelloWorld />
	    <TimerHolder />
	</div>,
    document.getElementById('root')
);