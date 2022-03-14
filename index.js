const redux = require('redux');
const reduxLogger = require('redux-logger')
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware; //To use middleware in redux

const logger = reduxLogger.createLogger(); //third party package for middleware


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM ='BUY_ICECREAM'

function buyCake(){
    return {
        type: BUY_CAKE  
    }
} 

function buyIceCream(){
    return{
        type: BUY_ICECREAM
    }
}

//we cannot change the state directly , to change the state we need a reducer which takes action as
// argument and previous state. 

// const initialState ={
//     numOfCakes: 10
// }

//Multiple states
const initialCakeState = {
    numOfCakes: 10
}
const initialIceCreamState = {
    numOfIceCream: 20
}


//we can create multiple reducers for each product or operation you want, as the store can take
// only one reducer, we need to combine the reducers.


//Cake Reducer
const cakeReducer = (state = initialCakeState, action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state, numOfCakes: state.numOfCakes - 1
        }

        default: return state
    }
}

//Icecream reducer
const iceCreamReducer = (state = initialIceCreamState, action)=>{
    switch(action.type){
        case BUY_ICECREAM : return{
            ...state, numOfIceCream: state.numOfIceCream -1
        }
        default: return state
    }
}

//Combining the reducers using combineReducer method.
const rootReducer = combineReducer({
    cake: cakeReducer,
    icecream: iceCreamReducer
})

//Store
const store = createStore(rootReducer, applyMiddleware(logger)); //passing the logger to middleware
console.log('Initial state', store.getState());
const unsubscribe = store.subscribe(()=> {});
store.dispatch(buyCake())    //To perform action we need to dispatch it
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
unsubscribe();