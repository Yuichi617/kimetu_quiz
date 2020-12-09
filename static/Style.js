export default <style>{`
body {
    background-image: url("./static/images/background.png");
    background-repeat: repeat;
    background-size: 40vw 40vw;
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
.main-screen {
    background-color: white;
    width: 70%;
    margin: 0 auto;
    margin-top: 20px;
    border: solid 2px #000000;
    border-radius: 5px;
    padding: 20px;
}

.main-screen .text1 {
    font-size: 20px;
    margin-bottom: 20px;
}

.main-screen .start_btn {
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

.main-screen .question_no_box {
    width: 90%;
    padding-left: 20px;
    text-align: left;
}

.main-screen .question_no_box .question_no{
    font-weight: bold;
}

.main-screen .question_box {
    width: 90%;
    margin: 0 auto;
    background-color: #dcdcdc;
    padding: 20px;
    margin-bottom: 20px;
}

.main-screen .choice_box {
    width: 90%;
    margin: 0 auto;
    background-color: #dcdcdc;
    padding: 20px;
    margin-bottom: 20px;
}

.main-screen .choice_box .options{
    text-align: left;
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