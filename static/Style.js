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
    width: 10%;
    padding: 5px 10px;
    margin: 10px;
    background-color: #f5f5f5;
    border-radius: 10px;
    text-align: center;
}

.main-screen .question_no_box .question_no{
    font-size:1.5vw;
    font-weight: bold;
}

.main-screen .question_box {
    font-size: 2vw;
    width: 90%;
    margin: 0 auto;
    background-color: white;
    padding: 10px;
    margin-bottom: 20px;
}

.main-screen .choice_box {
    font-size: 1.8vw;
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
}

.main-screen .choice_box .options .option:hover{
    background-color: #f5f5f5;
}

.main-screen .ans_btn {
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


.main-screen .hierarchie_pic{
    width:60%;
    margin:0 auto;
    background-color: darkgreen;
    margin-bottom: 20px;
}

.main-screen .retry_btn {
    width: 20%;
    color: white;
    margin: 0 auto;
    font-size: 20px;
    font-weight: bold;
    background-color: #808080;
    border-radius: 5px;
    padding: 5px 5px; 
    cursor: pointer;
}
    `}</style>;