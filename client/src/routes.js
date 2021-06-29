import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {AuthPage} from './pages/AuthPage';
import {CreatePage} from './pages/CreatePage';
import {DetailPage} from './pages/DetailPage';
import {VideoPage} from './pages/VideoPage';

export const useRoutes = isAuthenticated => {
  if (isAuthenticated) {
    return (
      <Switch>
        <Route path="/videos" exact>
          <VideoPage />
        </Route>
        <Route path="/create" exact>
          <CreatePage />
        </Route>
        <Route path="/detail/:id">
          <DetailPage />
        </Route>
        <Redirect to="/videos" />
      </Switch>
    );
  }
  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
