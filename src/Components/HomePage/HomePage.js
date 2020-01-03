import React, { Component } from 'react';
import agri_img from '../Images/office.jpg';
import './HomePage.css'

class HomePage extends Component {
    render() {
        return (
            <div >
                <img id="homepage_img" src={agri_img}/> 
                <div class="text-block">
                    <h2>Agriculture Machinery:</h2>
                    <p>
                    Online marketplaces make it easy to buy and sell commodities by allowing users to search for products outside their local area.
                    The innovators behind Machinio, an online marketplace for used metalworking, construction, and agricultural machinery, 
                    look to do for used machinery was Expedia did for hotels and flights.
                    Using proprietary technology, they connect buyers with thousands of global sellers who have the equipment they are looking to purchase.
                    </p>
                </div>
            </div>
        );
    }
}

export default HomePage;