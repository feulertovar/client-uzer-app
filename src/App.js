import React, { Component } from 'react';
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
import Amplify from 'aws-amplify';
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
                      <Link to="/">Home</Link>
                      <Link to="/contacts">Contacts</Link>
                      <Link to="/invoices">Invoices</Link>
                    </ul>
                </div>
          </nav>

            <Switch>
              <Route path="/contacts" component={Contacts} />
              <Route path="/new-contact" component={NewContact} />
              <Route exact path="/" component={Dashboard} />
              <Route path="/invoices" component={Invoices} />
              <Route path="/new-invoice" component={NewInvoice} />
              <Route path="/update-contact/:id" component={UpdateContact} />
              <Route path="/update-invoice/:id" component={UpdateInvoice} />
            </Switch>
      </div>
      </Router>
    );
  }
}

export default withAuthenticator(App, true);
