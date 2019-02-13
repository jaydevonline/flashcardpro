import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Stack extends Component {
    render() {
        return (
                <div>
                    <Link to='/'> Home </Link>
                    <div>
                        <h2> Stack </h2>
                    </div>
                </div>
        )
    }
}

export default Stack;