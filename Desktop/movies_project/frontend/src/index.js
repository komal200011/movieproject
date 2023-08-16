import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import { legacy_createStore as createStore } from 'redux'
const initialState = {
  detail: "",
};
function reducer(state = initialState, actions) {
  console.log(state)
  const item = actions.payload;
  switch (actions.type) {
    case "moviedetail":
      return {

        detail: item,
      };

  }

}
const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
