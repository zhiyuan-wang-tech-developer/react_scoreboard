import React from 'react';
import Scoreboard from './Scoreboard';
import './Application.css';

class Application extends React.Component {
    render() {
        return (
            <div className='Application'>
                <Scoreboard />
            </div>
        );
    }
}

export default Application;