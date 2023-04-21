import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './redux/helpers';
import { Provider } from 'react-redux';
import ReportWebVitals from "./reportWebVitals";

// import App
import App from './views/App';

const rootElement = document.getElementById('root');
if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
        <Provider store={store} >
            <App/>
        </Provider>
    );
}


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
ReportWebVitals();
