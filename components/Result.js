import Link from "next/link";
import { Component } from "react";
import {connect} from 'react-redux';

class Result extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="result">
                あなたの正解数は{this.props.correct}問です。
                <Link href="/">
                    <div className="return_btn" >再挑戦</div>
                </Link>
            </div>
        )
    }
}

Result = connect((state)=>state)(Result)
export default Result;