import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CsafeHeader from './components/CsafeHeader';
import LandingPage from './content/LandingPage';
import SafeholderPage from './content/SafeholderPage';
import KeyholderPage from './content/KeyholderPage';
import ClaimSafePage from './content/ClaimSafePage';
import ClaimSHPage from './content/ClaimSHPage';
import RegisterPage from './content/RegisterPage';
//import history from './history';



class App extends Component {
  render() {
    return (
      <Router>
        <CsafeHeader />
          <Content>
              <Switch>
                <Route exact path="/" component={LandingPage} />
                <Route path="/safeholders" component={SafeholderPage} />
                <Route path="/keyholders" component={KeyholderPage} />
                <Route path="/claimsafe" component={ClaimSafePage} />
                <Route path="/claimsafeholder" component={ClaimSHPage} />
                <Route path="/register" component={RegisterPage} />
              </Switch>
          </Content>
      </Router>
    );
  }
}

export default App;
