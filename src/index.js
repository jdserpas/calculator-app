import React from "react";
import ReactDOMClient from "react-dom/client";
import App from "./App.js";

const containter = document.getElementById("root");
const root = ReactDOMClient.createRoot(containter);

root.render(<App/>);