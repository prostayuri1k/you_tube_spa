import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {store} from "./redux/store";
import {Provider} from "react-redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./router/router";


const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <Provider store={store}>
        <RouterProvider router={router}/>
    </Provider>
);

