import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'
import Amplify, { Auth } from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

class App extends Component {
  render() {
    return (
      <div className="App">
            <nav className="navbar navbar-inverse">
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css"></link>
                <div className="container-fluid">
                    <div className="navbar-header">
                    <a className="navbar-brand" href="#">UZERS</a>
                    </div>
                    <ul className="nav navbar-nav">
                    <li className="active"><a href="#">Home</a></li>
                    <li><a href="#">Contacts</a></li>
                    <li><a href="#">Invoices</a></li>
                    <li><a href="#">Reports</a></li>
                    <li><a href="#">About Us</a></li>
            
                    </ul>
                </div>
            </nav>
      </div>
    );
  }
}

export default withAuthenticator(App, true);
