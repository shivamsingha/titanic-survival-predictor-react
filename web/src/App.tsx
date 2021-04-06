import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./components";
import { Content } from "carbon-components-react";
import "./App.css";

function App() {
  return (
    <Header>
      <Content>
        <Router>
          <Switch>
            <Route path="/">Home</Route>
          </Switch>
        </Router>
      </Content>
    </Header>
  );
}

export default App;
