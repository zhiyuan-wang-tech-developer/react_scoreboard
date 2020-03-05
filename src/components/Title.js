import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
    static propTypes = {
        content: PropTypes.string.isRequired
    };

    render() {
        return <h3>{this.props.content}</h3>;
    }
}

export default Title;
