import store from "./data/state";

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


const root = ReactDOM.createRoot(document.getElementById('root'));
export let ReRenderTree = (state) => {
  root.render(
    <React.StrictMode>
      <BrowserRouter>
        <App
          state={state}
          dispatch = {store.dispatch.bind(store)}
        />
      </BrowserRouter>
    </React.StrictMode>
  );
}
ReRenderTree(store.getState())
store.subscribe(ReRenderTree)
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
