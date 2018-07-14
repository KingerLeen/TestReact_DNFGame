import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Body.css';


class Body extends Component {
    render() {
        return (
            <div className="Body">
                <Left />
                <Center />
                <Right />
            </div>
        );
    }
}

class Left extends Component {
    render() {
        return (
            <div className="Left">
                <h1>Left</h1>
            </div>
        );
    }
}

class Center extends Component {
    render() {
        return (
            <div className="Center">
                <h1>Center</h1>
            </div>
        );
    }
}

class Right extends Component {
    render() {
        return (
            <div className="Right">
                <h1>Right</h1>
            </div>
        );
    }
}
  
export default Body;