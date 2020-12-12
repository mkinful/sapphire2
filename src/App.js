import React, { Component }from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavSection from './components/NavSection';
import Home from './components/Home';
import { Pharmacy } from './components/Pharmacy';
import Products from './components/Products/Index';
import Account from './components/Account';
import { productData } from './components/Products/data';
import { About } from './components/About';
import { NoMatch } from './components/Nomatch';
import Footer from './components/Footer/Index';


class App extends Component {
  render() {
    return(
      <React.Fragment>
          <NavSection />
          <Router>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/pharmacy" component={Pharmacy} />
                <Route path="/account" component={Account} />
                <Route path="/about" component={About} />
                <Products heading="Choose from our vast variety of products." data={productData} />
                <Route component={NoMatch} />
              </Switch>
              <Footer />
          </Router>
      </React.Fragment>
    )
  }
}

export default App;
