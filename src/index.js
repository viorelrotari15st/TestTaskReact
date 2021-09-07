import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux"
import thunk from "redux-thunk"
import { compose, createStore, applyMiddleware } from "redux"
import { rootReducer } from './Redux/rootReducer'
import UnicornService from './API/UnicornService';
//import { composeWithDevTools } from ‘redux - devtools - extension’;

const service = new UnicornService();
const store = createStore(rootReducer,
  compose(
    applyMiddleware(
      thunk.withExtraArgument(service),
    ),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  ));

const app = (
  <Provider store={store}>
    <App />
  </Provider>
)

ReactDOM.render(
  app,
  document.getElementById('root')
);


