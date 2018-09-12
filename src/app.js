//install (yarn add validator@8.0.0) ->import ->use
// we grab the default export from validator library
//google npm validator
// yarn add react@16.0.0 react-dom@16.0.0
//must teach webpack to use babel before using jsx - so babel loader comes in handy for this.

import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp';
//here we are in charge of only bootstrapping things that live elsewhere

const Layout = (props) => {
    return (
        <div>
            <p>header</p>
            {props.content}
            <p>footer</p>
        </div>
    );
};

const template = (
    <div>
    <h1>Page title</h1>
        <p>This is my page</p>
    </div>
);

ReactDOM.render(<Layout content={template} />, document.getElementById('app'));