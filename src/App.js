import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/header';

import Layout from './pages/layout';

import './App.scss';

const App = () => (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/layout" component={Layout} />
      </div>
    </Router>
);

export default App;