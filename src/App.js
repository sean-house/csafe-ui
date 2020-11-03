import React, { Component } from 'react';
import './app.scss';
import { Content } from 'carbon-components-react/lib/components/UIShell';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import TutorialHeader from './components/TutorialHeader';
import LandingPage from './content/LandingPage';
import SafeholderPage from './content/SafeholderPage';
import KeyholderPage from './content/KeyholderPage';

class App extends Component {
  render() {
    return (
      <>
          <Router>
            <TutorialHeader />
              <Content>
                  <Switch>
                    <Route exact path="/" component={LandingPage} />
                    <Route path="/safeholders" component={SafeholderPage} />
                    <Route path="/keyholders" component={KeyholderPage} />
                  </Switch>
              </Content>
          </Router>
      </>
    );
  }
}

export default App;
