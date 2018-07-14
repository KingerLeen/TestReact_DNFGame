import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Head.css';


class Head extends Component {
    render() {
        return (
            <div className="Head">
                <Top />
            </div>
        );
    }
}

class Top extends Component {
    render() {
        return (
            <div className="Top">
                <h1>Top</h1>
            </div>
        );
    }
}
  
export default Head;