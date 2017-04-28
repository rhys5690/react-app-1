// let's go!
import React from "react"; //Loads react library into react
import { render } from "react-dom"; //imports one method from react DOM
import { BrowserRouter, Match, Miss } from "react-router";

import "./css/style.css";
import NotFound from "./components/NotFound";
import App from "./components/App";
import StorePicker from "./components/StorePicker";  //.js on the end is assumed

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Match exactly pattern="/" component={StorePicker}/>
        <Match pattern="/store/:storeId" component={App}/>
        <Miss component={NotFound} />
      </div>
    </BrowserRouter>
  )
}


render(<Root/>, document.querySelector('#main'));
