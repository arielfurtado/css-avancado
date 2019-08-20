import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header';

import Flex from './pages/flexbox';
import Grid from './pages/grid';

import './App.scss';

const App = () => (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/flexbox" component={Flex} />
        <Route exact path="/grid" component={Grid} />
      </div>
    </Router>
);

export default App;