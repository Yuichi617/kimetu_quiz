import Link from "next/link";
import { Component } from "react";
import {connect} from 'react-redux';
import Image from '../static/Image'

class Result extends Component{

    constructor(props){
        super(props);
        this.state = {isModalOpen: false};
    }

    handleClickOpen(){
        this.setState({isModalOpen: true});
      }
    
    handleClickClose(){
        this.setState({isModalOpen: false});
      }

    // 正解数に応じてレンダリング内容を変える.(テキスト)
    renderRank(num_correct) {
        if (num_correct < 3) {
            return (
            <div className="class_text">
                <span>鬼殺隊隊士級</span>
            </div>)
            } else if(num_correct < 5){
            return(
            <div className="class_text">
                <span>継子級</span>
            </div>)
            } else if(num_correct < 7){
            return(
            <div className="class_text">
                <span>下弦の鬼級</span>
            </div>)
            } else if(num_correct < 9){
            return(
            <div className="class_text">
                <span>柱級</span>
            </div>)
            } else if(num_correct < 10){
            return(
            <div className="class_text">
                <span>上弦の鬼級</span>
            </div>)
            } else if(num_correct === 10){
            return(
            <div className="class_text">
                <span>無惨級</span>
            </div>)
            }
        }

    // 正解数に応じてレンダリング内容を変える.(図)
    renderHierarchie(num_correct) {
        if (num_correct < 3) {
            return (
            <div className="result-image-box">
                <Image fname="taisi.jpg" size="400"/>
            </div>)
            } else if(num_correct < 5){
            return(
            <div className="result-image-box">
                <Image fname="tuguko.jpg" size="400"/>
            </div>)
            } else if(num_correct < 7){
                return(
                <div className="result-image-box">
                    <Image fname="kagen.jpg" size="400"/>
                </div>)
            } else if(num_correct < 9){
                return(
                <div className="result-image-box">
                    <Image fname="hasira.jpg" size="400"/>
                </div>)
            } else if(num_correct < 10){
                return(
                <div className="result-image-box">
                    <Image fname="jougen.jpg" size="400"/>
                </div>)
            } else if(num_correct === 10){
                return(
                <div className="result-image-box">
                    <Image fname="muzan.jpg" size="400"/>
                </div>)
            }
        }

    render(){
        var ans_list = [];
        for(let i = 0; i < 10; i++){
            ans_list.push(
                <tr className="ans_set">
                    <td>{this.props.question[this.props.q_no[i]].q_sentence}</td>
                    <td>{this.props.question[this.props.q_no[i]].options[this.props.question[this.props.q_no[0]].answer-1]}</td>
                </tr>
                );
        }
        let modal;
        if (this.state.isModalOpen){
            modal = (
                <div className='modal'>
                  <div className='modal-inner'>
                    <div className="modal-content">
                        <div className="modal-close-btn">
                            <i className="far fa-times-circle fa-2x" onClick={() => this.handleClickClose()}></i>
                        </div>
                        <table>
                            <tr className="ans_set">
                                <th>問題</th>
                                <th>解答</th>
                            </tr>
                            {ans_list}
                        </table>
                    </div>
                  </div>
                </div>
              );
          }
        return(
            <div className="result">
                <div className="result-text">
                    {this.props.correct}問正解でした。
                    あなたの鬼滅力は・・・
                    {this.renderRank(this.props.correct)}
                </div>
                {this.renderHierarchie(this.props.correct)}
                <Link href="/">
                    <div className="retry_btn" >再挑戦</div>
                </Link>
                <div className="print_answer" >
                    <span className="print_answer_text" onClick={() => {this.handleClickOpen()}}>解答をみる</span>
                </div>
                {modal}
            </div>
        )
    }
}

Result = connect((state)=>state)(Result)
export default Result;