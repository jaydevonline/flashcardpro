import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import StackList from './StackList';

class App extends Component {
    render() {
        return (
                <div>
                    <Link to='/stack'> Home </Link>
                    <h2> Flashcard Pro </h2>
                    <hr/>
                    <StackList />
                </div>
        )
    }
}

export default App;