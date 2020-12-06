import { createStore, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';

//ステート初期化
const result = {
    q_no : [],
    question : null,
    i : 0,
    correct: 0,
    incorrect: 0,
    select: 0
}

//レデューサ
function counterReducer (state = result, action){
    switch (action.type){
        case 'SETINFO':
            return{
                q_no : action.rand_arr,
                question : action.question,
                i : state.i,
                correct : state.correct,
                incorrect : state.incorrect,
                select: state.select
            };
        case 'CORRECT':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i + 1,
                correct : state.correct + 1,
                incorrect : state.incorrect,
                select: 0
            };
        case 'INCORRECT':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i + 1,
                correct : state.correct,
                incorrect : state.incorrect + 1,
                select: 0
            };
        case 'UPDATE1':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i,
                correct : state.correct,
                incorrect : state.incorrect,
                select: 1
            };
        case 'UPDATE2':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i,
                correct : state.correct,
                incorrect : state.incorrect,
                select: 2
            };    
        case 'UPDATE3':
            return{
                q_no : state.q_no,
                question : state.question,
                i : state.i,
                correct : state.correct,
                incorrect : state.incorrect,
                select: 3
            }; 
        default:
            return state;
    }
}

//initStore関数
export function initStore(state=result){
    return createStore(counterReducer, state, applyMiddleware(thunkMiddleware))
}