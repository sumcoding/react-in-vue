import App from "./App";
import React  from "react";
import ReactDOM from "react-dom";

let root = null

const mount = (el) => {
  if(!root) {
    root = ReactDOM.createRoot(el)
  }
  root.render(<React.Suspense><App /></React.Suspense>);
   
}

export { mount }

