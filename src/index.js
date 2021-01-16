import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
/* import App from "./App"; */
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/App";
import ProtectedRoute from "./auth/ProtectedRoute";
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    {/* <BrowserRouter>
      <Switch> */}
    {/* <Route path="/recent" component={Recent} />
        <Route path="/artists" component={Artists} />
        <Route path="/albums" component={Albums} />
        <Route path="/songs" component={Songs} />
        <Route path="/stations" component={Stations} /> */}
    {/*  <Route exact path="/" component={Login} />

        <ProtectedRoute exact path="/app" component={Home} isAuth= />
      </Switch>
    </BrowserRouter> */}
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
