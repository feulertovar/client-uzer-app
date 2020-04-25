import React, { Component } from 'react';
import uzers from '../images/uzers.png'; // gives image path
class Dashboard extends Component {

    render() {
        return (
            <div>
            <img src={uzers} alt="this are our uzers image" />
            </div>
        )
    }
}

export default Dashboard;