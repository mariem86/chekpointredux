/*import React from "react";
import { render } from "react-dom";

import { createStore } from "redux";
import { Provider } from 'react-redux';
import "./index.css";
//store

//Action increment
const increment=()=>{
  return{
  type:'INCREMENT'
}
}

const decrement=()=>{
  return{
  type:'DECREMENT'
}
}
//reducer
const initialState={
  count:0
}
 
 const reducer = (state = initialState, action) => {
  console.log('reducer', state, action);

  switch(action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}
//dispatch
const store = createStore(reducer);
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "RESET" });


const App = () => (
<Provider store={store}>
    <Counter/>
  </Provider>

);
render(<App />, document.getElementById("root"));*/
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
 // <React.StrictMode>
    <App />,
 // </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();