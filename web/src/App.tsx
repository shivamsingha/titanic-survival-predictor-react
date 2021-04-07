import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Header } from './components';
import { Predict } from './pages';

const App: React.FC = () => {
  return (
    <Header>
      <Router>
        <Switch>
          <Route path="/">
            <Predict />
          </Route>
        </Switch>
      </Router>
    </Header>
  );
};

export default App;
