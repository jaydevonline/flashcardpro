import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux'; 
// import { bindActionCreators } from 'redux';
import stacks from '../data/stacks.json';
import { setStack } from '../actions';
import stack from '../reducers/index.js';

class StackList extends Component {
    render(){
        console.log('stacklist props', this.props);

        return (
            <div>
            {
                stacks.map((stack,index)=>{
                    return (
                        <Link 
                            to='/stack' 
                            key={index}
                            onClick={() => this.props.setStack(stack)}
                        >
                            <h4>
                                {stack.title}
                            </h4>   
                        </Link>
                    )
                })
            }
            </div>
        )
    }
}

/* 
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setStack }, dispatch);
}

const connectComponent = connect(null, mapDispatchToProps );

export default connectComponent(StackList);
*/

/* 
    This is the shorthand method to write above code. 
    No need to import 'bindActionCreators' aslo from redux.
*/
export default connect(null, { setStack })(StackList);