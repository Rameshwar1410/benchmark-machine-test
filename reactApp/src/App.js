import React from "react";
import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import ListStudent from "./components/pages/ListStudent";
import Navbar from "./components/layout/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NotFound from "./components/pages/NotFound";
import AddStudent from "./components/student/AddStudent";

function App(props) {
  return (
    <Router>
      <div className="App">
        <Navbar />

        <Switch>
          <Route exact path="/" component={AddStudent} />
          <Route exact path="/listStudent" component={ListStudent} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
