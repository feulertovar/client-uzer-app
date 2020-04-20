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
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
            <nav className="navbar navbar-inverse">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
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
              <Route path="/dashboard">
                <Dashboard />
              </Route>
              <Route path="/invoices">
                <Invoices />
              </Route>
            </Switch>
      </div>
      </Router>
    );
  }
}

export default withAuthenticator(App, true);
