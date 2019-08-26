import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';

import Header from './components/header/header';
import Footer from './components/footer';

import Layout from './pages/layout';

import './App.scss';

const App = () => (
    <Router>
      <div className="App">
        <Header />
        <Route exact path="/layout" component={Layout} />
        <Footer />
      </div>
    </Router>
);

export default App;