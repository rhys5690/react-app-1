// let's go!
import React from "react"; //Loads react library into react
import { render } from "react-dom"; //imports one method from react DOM
import "./css/style.css";
import App from "./components/App";
import StorePicker from "./components/StorePicker";  //.js on the end is assumed


render(<App/>, document.querySelector('#main'));
