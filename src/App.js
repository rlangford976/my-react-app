const redux = require('redux');
const createStore=redux.createStore;
const BUY_CAKE='BUY_CAKE';

function buyCake(){
  return{
  type:BUY_CAKE
  }
}

const initialState={
  numOfCakes: 10
}
//(prevstate,action)=>newState
const reducer = (state=initialState,action)=>{
 switch (action.type){
case BUY_CAKE :return{
  ...state,
  numOfCakes :state.numOfCakes-1
}
default: return state 
 }
}
const store =createStore(reducer);
console.log("InitialState",store.getState());
