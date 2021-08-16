import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DetailsPage from './pages/DetailsPage';
import HomePage from './pages/HomePage';
import GlobalModal from './components/Modal';
import './app.scss';

const Error = () => <h2> 404 not found</h2>;

function App() {
  return (
    <div>
      <GlobalModal />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/:id" component={DetailsPage} exact />
          <Route component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
