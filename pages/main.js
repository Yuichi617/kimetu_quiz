import Link from "next/link";
import Layout from '../components/Layout';
import Question from '../static/Question';
import Choice from '../static/Choice';

export default () =>(
    <Layout>
     <div className="main-screen">
            <div className="question_box">
                <Question qname="question1.txt" />
            </div>
            <div className="choice_box">
                <Choice cname="choice1.txt" />
            </div>
            <div className="ans_btn">回答</div>
        </div>
    </Layout>
);