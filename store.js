import { createStore, applyMiddleware} from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import thunkMiddleware from 'redux-thunk';

//ステート初期化
const info = {
    q_no : [],
    question : null,
    i : 0,
    correct: 0,
    incorrect: 0
//    select: 0
}

//レデューサ
function counterReducer (state = info, action){
    switch (action.type){
        case 'SETINFO':
            return{
                q_no : action.rand_arr,
                question : action.question,
                i : 0,
                correct : 0,
                incorrect : 0,
                select: 0
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
        //case 'UPDATE1':
        //    return{
        //        q_no : state.q_no,
        //        question : state.question,
        //        i : state.i,
        //        correct : state.correct,
        //        incorrect : state.incorrect,
        ///        select: 1
        //    };
        //case 'UPDATE2':
        //    return{
        //        q_no : state.q_no,
        //        question : state.question,
        //        i : state.i,
        //        correct : state.correct,
        //        incorrect : state.incorrect,
        //        select: 2
        //    };    
        //case 'UPDATE3':
        //    return{
        //        q_no : state.q_no,
        //        question : state.question,
        //        i : state.i,
        //        correct : state.correct,
        //        incorrect : state.incorrect,
        //       select: 3
        //    }; 
        default:
            return state;
    }
}

//Redux Persistの設定
const persistConfig = {
    key: 'root',
    storage ,
}

//パーシストレデューサの作成
const persistedReducer = persistReducer(persistConfig, counterReducer)

//ストア、パーシスターの作成
let store = createStore(persistedReducer, info, applyMiddleware(thunkMiddleware))
let pstore = persistStore(store)

//initStore関数
export function initStore(state=info){
    return createStore(counterReducer, state, applyMiddleware(thunkMiddleware))
}

//export function initStore(state=info){
//    return persistStore(createStore(persistedReducer, state, applyMiddleware(thunkMiddleware)))
//}