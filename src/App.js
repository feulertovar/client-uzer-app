import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacts from './components/Contacts';
import Dashboard from './components/Dashboard';
import Invoices from './components/Invoices';
import NewContact from './components/NewContact';
import NewInvoice from './components/NewInvoice';
import UpdateContact from './components/UpdateContact';
import UpdateInvoice from './components/UpdateInvoice';
import './App.css';
// import { withAuthenticator } from 'aws-amplify-react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from '@aws-amplify/auth';
// import Amplify from 'aws-amplify';
import awsmobile from './aws-exports';
import Amplify from '@aws-amplify/core';

import 'bootstrap/dist/css/bootstrap.min.css';
Amplify.configure(awsmobile);

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
            <nav className="navbar navbar-inverse">
          <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
          <link href="assets/css/bootstrap.min.css" rel="stylesheet" />
          <link href="assets/css/style.css" rel="stylesheet" />
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">UZERS</a>
                    </div>
                    <ul className="nav navbar-nav">
                      <Link to="/dashboard">Home</Link>
                      <Link to="/contacts">Contacts</Link>
                      <Link to="/invoices">Invoices</Link>
                    </ul>
                </div>
            </nav>

            <Switch>
              <Route path="/contacts">
                <Contacts />
              </Route>
              <Route path="/new-contact">
                <NewContact />
              </Route>
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/invoices">
                <Invoices />
              </Route>
              <Route path="/new-invoice">
                <NewInvoice />
              </Route>
              <Route path="/update-contact">
                <UpdateContact />
              </Route>
              <Route path="/update-invoice">
                <UpdateInvoice />
              </Route>
            </Switch>
      </div>
      </Router>
    );
  }
}

export default withAuthenticator(App, true);
