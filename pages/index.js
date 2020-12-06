import Link from "next/link";
import Layout from '../components/Layout';
import {connect} from 'react-redux';
import { Component } from "react";
import json_data from '../static/question_set.json'

class index extends Component{
    constructor(props){
        super(props);
        this.setInfo = this.setInfo.bind(this);
    }

    setInfo(){
        /*問題のランダマイズ*/
        function shuffle(array) {
            for (let i = array.length - 1; i >= 0; i--) {
              let rand = Math.floor(Math.random() * (i + 1));
              // 配列の数値を入れ替える
              [array[i], array[rand]] = [array[rand], array[i]]
            }
            return array;
          }
        var arr = shuffle([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14]);
        arr = arr.slice(0,5)

        return this.props.dispatch({ type: 'SETINFO', question: json_data, rand_arr: arr});
    }

    render(){
        return(
            <Layout>
                <div className="main-screen">
                    <div className="text1">このクイズであなたの鬼滅力を試すことができます。</div>
                    <Link href="/Main">
                        <div className="start_btn" onClick={this.setInfo}>スタート</div>
                    </Link>
                </div>
            </Layout>
        )
    }
}

index = connect()(index)
export default index;