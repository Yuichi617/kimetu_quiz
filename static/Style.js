export default <style>{`
body {
    text-align: center;
    min-width: 320px;
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

/*メイン*/
.main-screen {
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
    background-color: #808080;
    border-radius: 5px;
    padding: 5px 5px; 
    cursor: pointer;
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

.main-screen .ans_btn {
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

.main-screen .timeup_text{
    font-size: 20px;
}

.main-screen .result_text1{
    font-size: 18px;
}

.main-screen .result_text2{
    font-size: 30px;
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

.choice_box .options .option{
    display: block; /* 縦並びに */
    width: 90%;
    margin-right:auto;
    cursor: pointer;
    user-select: none;
}
    `}</style>;