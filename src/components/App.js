import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StackList from './StackList';

class App extends Component {
    render() {
        return (
                <div className="wrapper">
                    <Link to='/stack' className="home-link" > Home </Link>
                    <h2> Flashcard Pro </h2>
                    <hr/>
                    <StackList />
                </div>
        )
    }
}

export default App;