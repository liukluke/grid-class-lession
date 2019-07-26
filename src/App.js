import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './styles/main.scss';
import Home from './components/Home';
import Navbar from './components/Navbar';
import Fundamentals from './components/examples/Fundamentals';
import ImplicitExplicit from './components/examples/ImplicitExplicit';
import Autoflow from './components/examples/Autoflow';
import SizingTracks from './components/examples/SizingTracks';
import Repeat from './components/examples/Repeat';
import SizingItems from './components/examples/SizingItems';
import Placing from './components/examples/Placing';
import FitFill from './components/examples/FitFill';


function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/foundamentals' component={Fundamentals} />
          <Route exact path='/implicitExplicit' component={ImplicitExplicit} />
          <Route exact path='/autoflow' component={Autoflow} />
          <Route exact path='/sizingtracks' component={SizingTracks} />
          <Route exact path='/repeat' component={Repeat} />
          <Route exact path='/sizingitems' component={SizingItems} />
          <Route exact path='/placing' component={Placing} />
          <Route exact path='/fitfill' component={FitFill} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
