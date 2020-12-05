import Link from "next/link";
import Layout from '../components/Layout';
import Question from '../static/Question';
import Choice from '../static/Choice';
import { Component } from "react";
import {connect} from 'react-redux';

class Main extends Component{

    constructor(props){
        super(props);
        this.doAction = this.doAction.bind(this);
    }

    doAction(e){
        if(this.props.select == this.props.question[this.props.q_no[this.props.i]].answer){
            return this.props.dispatch({ type: 'CORRECT'});
        } else {
            return this.props.dispatch({ type: 'INCORRECT'});
        }
    }

    render(){
        return(
            <Layout>
                <div className="main-screen">
                   <div className="question_box">
                       <Question q_sentence={this.props.question[this.props.q_no[this.props.i]].q_sentence} />
                   </div>
                   <div className="choice_box">
                       <Choice options={this.props.question[this.props.q_no[this.props.i]].options}/>
                   </div>
                    <div className="ans_btn" onClick={this.doAction}>回答</div>
                    {this.Checkfinish}
               </div>
           </Layout>
        )
    }
}

Main = connect((state)=>state)(Main)
export default Main;