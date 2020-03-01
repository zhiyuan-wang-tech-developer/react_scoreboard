import React, { Component } from "react";
import Player from "./Player";
import AddPlayer from "./AddPlayer";
import './Scoreboard.css';

class Scoreboard extends Component {
    // component state object
    state = {
        players: [
            { id: 201, name: "Wang Zhiyuan", score: 0 },
            { id: 202, name: "Tian", score: 98 },
            { id: 203, name: "Liu", score: 95 },
            { id: 204, name: "Vixi", score: 100 }
        ]
    };

    // callback function
    incrementPlayerScore = (id) => {
        // update this.state.players so that the player with this id get her score incremented.
        const updatedPlayers = this.state.players.map(
            (player) => {
                return player.id === id ? { ...player, score: player.score + 1 } : { ...player };
            }
        );
        this.setState({ players: updatedPlayers });
    };

    decrementPlayerScore = (id) => {
        const updatedPlayers = this.state.players.map(
            (player) => {
                return player.id === id ? { ...player, score: player.score - 1 } : { ...player };
            }
        );
        this.setState({ players: updatedPlayers });
    };

    renderPlayer = (player) => {
        // Note: each child component in a list should have a unique key prop.
        return (
            <Player key={player.id} {...player} incrementScore={this.incrementPlayerScore} decrementScore={this.decrementPlayerScore} />
        );
    };

    addPlayer = (name) => {
        const player = {
            id: Math.round(Math.random() * 1000),
            name: name,
            score: 0
        };
        this.setState({ players: this.state.players.concat(player) });
    };

    render() {
        // copy players array
        const players_copy = [...this.state.players];
        // sort players copy array
        // after sorting the players copy, array mutates itself.
        players_copy.sort((a, b) => { return b.score - a.score });
        // console.log(players_copy);
        return (
            <div className="scoreboard">
                <h1>Scoreboard</h1>
                <ul>
                    {
                        players_copy.map(
                            this.renderPlayer
                        )
                    }
                </ul>
                <AddPlayer addPlayer={this.addPlayer} />
            </div>
        );
    }
}

export default Scoreboard;