import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Contacts from './components/Contacts';
import Dashboard from './components/Dashboard';
import Invoices from './components/Invoices';
import UpdateContact from './components/UpdateContact';
import UpdateInvoice from './components/UpdateInvoice';
import NewContact from './components/NewContact';
import NewInvoice from './components/NewInvoice';
import 'bootstrap/dist/css/bootstrap.min.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

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
