import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { About, Home, Users, NotFound } from '../pages';

export const App = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/users" component={Users} />
            <Route component={NotFound} />
        </Switch>
    </BrowserRouter>
);
