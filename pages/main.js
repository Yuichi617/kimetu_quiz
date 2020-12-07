import Link from "next/link";
import Layout from '../components/Layout';
import Question from '../components/Question';
import Choice from '../components/Choice';
import Result from '../components/Result'
import { Component } from "react";
import {connect} from 'react-redux';
import { useRouter } from 'next/router'

class Main extends Component{

    constructor(props){
        super(props);
        this.doAction = this.doAction.bind(this);
    }

    doAction(e){
        //選択肢のチェックを外す
        for (const element of document.getElementsByName('option')) {
            element.checked = false;
          }
        //ストアに回答データを登録
        if(this.props.select == this.props.question[this.props.q_no[this.props.i]].answer){
            this.props.dispatch({ type: 'CORRECT'});
        } else {
            this.props.dispatch({ type: 'INCORRECT'});
        }
        //最終問題の場合結果画面へ遷移
        if(this.props.i===4){
            const router = useRouter();
            router.push('/Judge');
            return <div />;
        }
    }
    
    render(){
        return(
            <Layout>
                <div className="main-screen">
                   <div className="question_box">
                       <Question />
                   </div>
                   <div className="choice_box">
                       <Choice />
                   </div>
                    <div className="ans_btn" onClick={this.doAction}>回答</div>
               </div>
               <Result />
           </Layout>
        )
    }
}

Main = connect((state)=>state)(Main)
export default Main;