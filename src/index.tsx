import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import "./styles/styles.scss";
import { Provider } from "react-redux";
import { store } from "./redux/store";

const container = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(container);

root.render(
    <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider>
    </React.StrictMode>,
);
