export default <style>{`
body {
    */background-image: url("./static/images/background.png");
    background-repeat: repeat;
    background-size: 40vw 40vw;*/
    font-family: serif;
    font-weight: 500;
    text-align: center;
    min-width: 320px;
    max-width: 900px;
    margin: 0 auto;
    color: black;
    background-color: #FFF;
    font-size: 14px;
  }

/*ヘッダー*/
.site-header .site_name {
    font-size: 25px;
    font-weight: bold;
    padding-top: 20px;
}

.site-header .oni {
    color: darkred;
}

/*メイン*/
.top-main-screen{
    background-color: white;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    border: solid 1.5px #000000;
    border-radius: 1px;
    padding: 50px 20px;
}

.top-main-screen .text1 {
    font-size: 20px;
    margin-bottom: 20px;
}

.top-main-screen .start_btn {
    width: 20%;
    color: white;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    background-color: #383838;
    border-radius: 5px;
    padding: 5px 5px; 
    cursor: pointer;
}

.top-main-screen .start_btn:hover{
    background-color: #808080;
}

.main-screen {
    background-image: url("./static/images/background.png");
    background-repeat: repeat;
    background-size: 60px 60px;
    background-color: white;
    width: 60%;
    margin: 0 auto;
    margin-top: 20px;
    border: solid 1.5px #000000;
    border-radius: 1px;
    padding: 50px 20px;
}

.main-screen .question-screen{
    background-color: white;
    width: 90%;
    margin: 0 auto;
    border: solid 1.5px white;
    border-radius: 5px;
}

.main-screen .question_no_box {
    width: 15%;
    padding: 5px 10px;
    margin: 10px;
    background-color: #f5f5f5;
    border-radius: 10px;
    text-align: center;
}

.main-screen .question_no_box .question_no{
    font-size:15px;
    font-weight: bold;
}

.main-screen .question_box {
    font-size: 20px;
    width: 90%;
    margin: 0 auto;
    background-color: white;
    padding: 10px;
    margin-bottom: 20px;
}

.main-screen .choice_box {
    font-size: 15px;
    width: 90%;
    margin: 0 auto;
    background-color: white;
    padding: 5px;
    margin-bottom: 20px;
}

.main-screen .choice_box .options{
    text-align: center;
}

.main-screen .choice_box .options .option{
    cursor: pointer;
    width: 60%;
    margin: 0 auto;
    margin-bottom:10px;
    border: solid 1.5px #dcdcdc;
    border-radius: 5px;
    padding-top:5px;
    padding-bottom:5px;
}

.main-screen .choice_box .options .option:hover{
    background-color: #f5f5f5;
}

.result .result-text{
    margin-top:10px;
    margin-bottom:10px;
}

.result .result-text .class_text{
    font-size:30px;
    font-weight:bold;
    margin-top:10px;
    margin-bottom:10px;
}

.result .retry_btn{
    width: 10%;
    color: white;
    margin: 0 auto;
    margin-top: 15px;
    font-size: 15px;
    font-weight: bold;
    background-color: #383838;
    border-radius: 5px;
    padding: 5px 5px; 
    cursor: pointer;
}

.result .retry_btn:hover{
    background-color: #808080;
}

.result .print_answer .print_answer_text{
    font-size:13px;
    cursor: pointer;
}

.result .print_answer .print_answer_text:hover{
    color:#808080;
}

.modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  
.modal-inner {
    position: absolute;
    top: 8%;
    right: 0;
    left: 0;
    width: 40%;
    padding-bottom: 10px;
    margin: auto;
    background-color: rgb(255, 255, 255);
    border-bottom: solid 6px #c0c0c0;
    border-radius: 9px;
    /* アニメーション */
    animation: fadeIn 0.3s linear;
    animation-fill-mode: both;
}

.modal-content{
    width: 90%;
    background-color: rgb(255, 255, 255);
    margin: 0 auto;
    margin-top: 20px;
    margin-bottom: 10px;
    padding-bottom: 10px;
}

.modal-content .modal-close-btn{
    text-align:right;
}

.modal-content .modal-close-btn .far{
    font-size:20px;
    color:#d3d3d3;
    cursor: pointer;
}


table{
    width: 85%;
    margin: 0 auto;
    table-layout: fixed;
    
}

table td{
    padding: 10px;
}

/* ---------------------------- */
/* --- Animation --- */
/* ---------------------------- */
@keyframes fadeIn{
	0%{
		opacity: 0;
	}
	100%{
		opacity: 1;
	}
}
    `}</style>;