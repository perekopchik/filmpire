import React from "react";
import ReactDOM from 'react-dom/client'
import App from "./components/App";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import store from './app/store';
import './index.css';

import ToggleColorMode from "./utils/ToggleColorMode";
import {DevSupport} from "@react-buddy/ide-toolbox";
import {ComponentPreviews, useInitial} from "./dev";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ToggleColorMode>
            <BrowserRouter>
                <DevSupport ComponentPreviews={ComponentPreviews}
                            useInitialHook={useInitial}
                >
                    <App/>
                </DevSupport>
            </BrowserRouter>
        </ToggleColorMode>
    </Provider>
);
