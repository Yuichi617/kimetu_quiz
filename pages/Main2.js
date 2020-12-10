import Link from "next/link";
import Layout from '../components/Layout';
import Question from '../components/Question';
import Choice from '../components/Choice';
import Result from '../components/Result'
import { Component } from "react";
import {connect} from 'react-redux';
import { useRouter } from 'next/router'

class Main2 extends Component{

    constructor(props){
        super(props);
        this.doAction1 = this.doAction1.bind(this);
        this.doAction2 = this.doAction2.bind(this);
        this.doAction3 = this.doAction3.bind(this);
        this.flg = true;
    }

    doAction1(e){
        //ストアに回答データを登録
        if(1 == this.props.question[this.props.q_no[this.props.i]].answer){
            this.props.dispatch({ type: 'CORRECT'});
        } else {
            this.props.dispatch({ type: 'INCORRECT'});
        }
        //最終問題の場合結果画面へ遷移
        if(this.props.i===9){
            this.flg = false;
        }
            }

    doAction2(e){
        //ストアに回答データを登録
        if(2 == this.props.question[this.props.q_no[this.props.i]].answer){
            this.props.dispatch({ type: 'CORRECT'});
        } else {
            this.props.dispatch({ type: 'INCORRECT'});
        }
        //最終問題の場合結果画面へ遷移
        if(this.props.i===9){
            this.flg = false;
        }
    }

    doAction3(e){
        //ストアに回答データを登録
        if(3 == this.props.question[this.props.q_no[this.props.i]].answer){
            this.props.dispatch({ type: 'CORRECT'});
        } else {
            this.props.dispatch({ type: 'INCORRECT'});
        }
        //最終問題の場合結果画面へ遷移
        if(this.props.i===9){
            this.flg = false;
        }
    }
    
    render(){
        return(
            <Layout>
                {this.flg ?
                    <div className="main-screen">
                        <div className="question-screen">
                            <div className="question_no_box">
                                <span className="question_no">第{this.props.i + 1}問</span>
                            </div>
                        <div className="question_box">
                            <Question />
                        </div>
                        <div className="choice_box">
                            <div className="options">
                                <label onClick={this.doAction1}>
                                    <div className="option">
                                        {this.props.question[this.props.q_no[this.props.i]].options[0]}<br/>
                                    </div>
                                </label>
                                <label onClick={this.doAction2}>
                                    <div className="option">
                                        {this.props.question[this.props.q_no[this.props.i]].options[1]}<br/>
                                    </div>
                                </label>
                                <label onClick={this.doAction3}>
                                    <div className="option">
                                        {this.props.question[this.props.q_no[this.props.i]].options[2]}<br/>
                                    </div>
                                </label>
                            </div>
                        </div>
                        </div>
                    </div>
                :
               <Result /> }
           </Layout>
        )
    }
}

Main2 = connect((state)=>state)(Main2)
export default Main2;