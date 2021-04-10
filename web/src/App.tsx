import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { EDA, Predict } from './pages';
import './App.scss';

const App: React.FC = () => {
  return (
    <div className="main-container">
      <Router>
        <Header>
          <Switch>
            <Route path="/eda">
              <EDA />
            </Route>
            <Route path="/">
              <Predict />
            </Route>
          </Switch>
        </Header>
      </Router>
    </div>
  );
};

export default App;
