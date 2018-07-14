import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Bottom.css';


class Bottom extends Component {
    render() {
        return (
            <div className="Bottom">
                <BottomLeft />
                <BottomRight />
            </div>
        );
    }
}

class BottomLeft extends Component {
    render() {
        return (
            <div className="BottomLeft">
                <h1>BottomLeft</h1>
            </div>
        );
    }
}

class BottomRight extends Component {
    render() {
        return (
            <div className="BottomRight">
                <h1>BottomRight</h1>
            </div>
        );
    }
}

export default Bottom;