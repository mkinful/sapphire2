import React, { Component }from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './components/Home';
import { Pharmacy } from './components/Pharmacy';
import Products from './components/Products/Index';
import Account from './components/Login/Account'
import Login from './components/Login/Login';
import { productData } from './components/Products/data';
import { About } from './components/About';
import Footer from './components/Footer/Index';


class App extends Component {

  render() {
    return(
      <React.Fragment>
          <Navbar />
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pharmacy" component={Pharmacy} />
                <Route path="/account" component={Account} />
                <Route path="/login" component={Login} />
                <Route path="/about" component={About} />
                <Products heading="Choose from our vast variety of products." data={productData} />
              </Switch>
              <Footer />
          </Router>
      </React.Fragment>
    )
  }
}

export default App;
