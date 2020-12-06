import React, {Component} from 'react';
import {connect} from 'react-redux';

class Question extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return (
        <div>
            {this.props.question[this.props.q_no[this.props.i]].q_sentence}
        </div>
        );
    }
}

Question = connect((state)=>state)(Question)
export default Question;