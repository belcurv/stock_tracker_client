import * as React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from '../components/Header';
import Home   from '../components/Home';
import About  from '../components/About';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={ Home } />
        <Route path='/about' component={ About } />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
