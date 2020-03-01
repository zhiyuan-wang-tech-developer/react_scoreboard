import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './AddPlayer.css'

class AddPlayer extends Component {
    static propTypes = {
        addPlayer: PropTypes.func.isRequired
    };

    state = {
        name: ''
    };

    submitHandler = (event) => {
        // Prevent default action
        event.preventDefault();
        // console.log(event.target);
        console.log('Submitting form with name ' + this.state.name);
        if (this.state.name.length) this.props.addPlayer(this.state.name);
    };

    changeHandler = (event) => {
        console.log('Changing form...' + this.state.name);
        // console.log(event.target);
        this.setState({
            name: event.target.value
        });
    };

    render() {
        return (
            <div className='add-player'>
                <form onSubmit={this.submitHandler}>
                    <label>
                        Name:
                        <input
                            type='text'
                            name='name'
                            onChange={this.changeHandler}
                            value={this.state.name}
                        />
                    </label>
                    <input type='submit' value='Add' />
                </form>
            </div>
        );
    };
}

export default AddPlayer;