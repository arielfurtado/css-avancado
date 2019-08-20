import React from 'react';

import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Flex from './pages/flexbox';
import Grid from './pages/grid';
import App from './App';

const Routes = () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/flexbox" component={Flex} />
            <Route exact path="/grid" component={Grid} />
        </Switch>
    </BrowserRouter>
);

export default Routes;