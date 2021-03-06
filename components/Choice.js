import React, {Component} from 'react';
import {connect} from 'react-redux';

class Choice extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className="options">
                <label　className="option" onClick={()=>this.props.dispatch({type: 'UPDATE1'})}>
                    <input type="radio" name="option" /><span>{this.props.question[this.props.q_no[this.props.i]].options[0]}<br/></span>
                </label>
                <label className="option" onClick={()=>this.props.dispatch({type: 'UPDATE2'})}>
                    <input type="radio" name="option" /><span>{this.props.question[this.props.q_no[this.props.i]].options[1]}<br/></span>
                </label>
                <label className="option" onClick={()=>this.props.dispatch({type: 'UPDATE3'})}>
                    <input type="radio" name="option" /><span>{this.props.question[this.props.q_no[this.props.i]].options[2]}<br/></span>
                </label>
            </div>
            
        );
    }
}

Choice = connect((state)=>state)(Choice)
export default Choice;