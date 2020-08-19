import React from 'react';
import Counter from './component/Counter'
import { Provider } from 'react-redux';
import store from "./reduxComponet/store";
import './App.css';

function App() {
  return (
   
    <Provider store={store}>
       <h1 >Counter</h1>
    <Counter/>
  </Provider>
    
  );
}

export default App;
