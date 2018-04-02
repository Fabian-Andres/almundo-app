import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// Components
import Header from './components/partials/Header';
import Hotels from './components/modules/hotels/Hotels';


export default class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Header />
          <Route exact path="/" component={Hotels}></Route>
          <Route path="/about" children={({match}) => match && <h1>About</h1>}></Route>
        </div>
      </Router>
    );
  }
}
