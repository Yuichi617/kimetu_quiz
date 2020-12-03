import Link from "next/link";
import Layout from '../components/Layout';

export default () =>(
    <Layout>
     <div className="main-screen">
            <div className="question_box">問題文</div>
            <div className="choices">選択肢</div>
            <div className="ans_btn">回答</div>
        </div>
    </Layout>
);