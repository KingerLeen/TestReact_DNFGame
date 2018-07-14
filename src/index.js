import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Head from './Head';
import Body from './Body';
import Bottom from './Bottom';

ReactDOM.render(
    <div className="All">
        <Head />
        <Body />
        <Bottom />
    </div>
    ,document.getElementById('root')
);