import React from 'react';
import  { BrowserRouter as Router, Switch, Route } from 'react-router-dom' 
import Header from './components/Header'
import About from './components/About'
import './App.scss';
import Home from './components/Home';
import ArtistPage from './components/ArtistPage';
import data from './assets/content/data'


const App = () => {
  return (
    <Router>
      <div className="main">
        <Header />
        <Switch>
          <Route path="/" exact component={ Home } />
          <Route path="/about" exact component={ About } />
          <Route path="/artists/:id" component={(props) => <ArtistPage  data={ data }{...props}/> }/>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
