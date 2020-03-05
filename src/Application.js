import React from 'react';
import Scoreboard from './components/Scoreboard';
import './Application.css';
import Title from './components/Title';

function Application() {
    return (
        <div className='Application'>
            <Title content={'Creator: Zhiyuan Wang'} />
            <main>
                <Scoreboard />
            </main>
        </div>
    );
}

export default Application;