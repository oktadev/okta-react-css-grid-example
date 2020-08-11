import React from 'react';
import './App.css';
import Unicode from './Unicode';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LoginCallback, SecureRoute, Security } from '@okta/okta-react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header>
          Unicode Chart
        </header>
        <div className="page">
          <div className="content">
            <Router>
              <Security issuer='https://dev-133320.okta.com/oauth2/default'
                        clientId='0oa52z03snT5ZhiuT357'
                        redirectUri={window.location.origin + '/callback'}
                        pkce={true}>
                <SecureRoute path='/' exact={true} component={Unicode}/>
                <Route path='/callback' component={LoginCallback}/>
              </Security>
            </Router>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
