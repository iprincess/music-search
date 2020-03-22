import './App.scss';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { Header } from './components/header/Header';
import NotFoundPage from './pages/NotFound';
import InProgressPage from './pages/InProgress';
import { SearchPage } from './components/search/SearchPage';

export const App = () => {
  const supportsHistory = 'pushState' in window.history;

  return (
    <Router forceRefresh={!supportsHistory}>
      <div className="app container container-row">
        <div className="item">
          <h1 className="text-center">Apple Music Search</h1>
          <div>
            <Switch>
              <Redirect exact path="/" to="/album" />
              <Route
                path={['/artist/:query?', '/song/:query?']}
                component={InProgressPage}
              />
              <Route path="/:searchType/:query?" component={SearchPage} />
              <Route component={NotFoundPage} />
            </Switch>
          </div>
        </div>
        <div className="item">
          <Header />
        </div>
      </div>
    </Router>
  );
};
