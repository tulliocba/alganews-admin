import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from "react-router-dom";

import {Routes} from "./app/routes";
import {DefaultLayout} from "./app/layouts/Default";
import {store} from "./core/store";

import "./index.less";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <DefaultLayout>
                    <Routes />
                </DefaultLayout>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
