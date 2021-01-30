import React from 'react';
import { Switch, Route } from 'react-router-dom';

import homePage from './homePage';
import Contact from './contact';
import Projects from './projects';

const Main = () => (
  <Switch>
    <Route exact path="/" component={homePage} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
  </Switch>
)

export default Main;
