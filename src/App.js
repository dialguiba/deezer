/* import "./App.css"; */
import React, { useState } from "react";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Home from "./pages/App";
/* import ProtectedRoute from "./auth/ProtectedRoute"; */
import { UserProvider } from "./providers/UserContext";
/* import Sidebar from "./components/Sidebar";
import MediaPlayer from "./components/MediaPlayer";
import Recent from "./pages/Recent";
import Albums from "./pages/Albums";
import Artists from "./pages/Artists";
import Songs from "./pages/Songs";
import Stations from "./pages/Stations"; */

function App() {
  return (
    <UserProvider>
      <div>
        {/* <Sidebar /> */}
        {/* <BrowserRouter> */}

        <Router>
          {/* <Route path="/recent" component={Recent} />
        <Route path="/artists" component={Artists} />
        <Route path="/albums" component={Albums} />  
        <Route path="/songs" component={Songs} />
        <Route path="/stations" component={Stations} /> */}
          <Route exact path="/" component={Login} />
          {/* <Route path="/home" component={Home} /> */}
          {/* <Route exact path="/app/:code" children={Home} /> */}
          <Route exact path="/recent" component={Home} />
          {/* <ProtectedRoute exact path="/app/" component={Home} isAuth={isAuth} /> */}
        </Router>
        {/*   <BrowserRouter/>
         */}
        {/* <MediaPlayer /> */}
      </div>
    </UserProvider>
  );
}

export default App;
