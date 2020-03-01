import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Player.css';

class Player extends Component {
    // player property types
    static propTypes = {
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        score: PropTypes.number.isRequired,
        incrementScore: PropTypes.func.isRequired,
        decrementScore: PropTypes.func.isRequired
    };

    constructor(props) {
        super(props);
        this.timeoutHandle = 0;
        this.intervalHandle = 0;
    };

    clickHandler = (event) => {
        if (event.target.innerHTML === "+") {
            this.props.incrementScore(this.props.id);
        }
        else if (event.target.innerHTML === "-") {
            this.props.decrementScore(this.props.id);
        }
    };

    continuousChangeStart = (event) => {
        console.log(event.target.innerHTML);
        if (event.target.innerHTML === "+") {
            this.timeoutHandle = setTimeout(() => {
                this.intervalHandle = setInterval(() => {
                    this.props.incrementScore(this.props.id);
                }, 200);
            }, 500);
        }
        else if (event.target.innerHTML === "-") {
            this.timeoutHandle = setTimeout(() => {
                this.intervalHandle = setInterval(() => {
                    this.props.decrementScore(this.props.id);
                }, 200);
            }, 500);
        }
    };

    continuousChangeStop = (event) => {
        clearTimeout(this.timeoutHandle);
        clearInterval(this.intervalHandle);
    };

    render() {
        return (
            <li className="player">
                <p className="name">{this.props.name}</p>
                <p className="score">{this.props.score}</p>
                <button className="plus-button"
                    onClick={this.clickHandler}
                    onMouseDown={this.continuousChangeStart}
                    onMouseUp={this.continuousChangeStop}
                    onMouseLeave={this.continuousChangeStop}>+</button>
                <button className="minus-button"
                    onClick={this.clickHandler}
                    onMouseDown={this.continuousChangeStart}
                    onMouseUp={this.continuousChangeStop}
                    onMouseLeave={this.continuousChangeStop}>-</button>
            </li>
        );
    };
}

export default Player;