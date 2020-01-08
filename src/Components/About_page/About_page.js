import React, { Component } from 'react';
import './About_page.css';
import contact from '../Images/contact.jpg';

class About_page extends Component {
    render() {
        return (
            <div>
               <div class="row" id="container">
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
                        <img src={contact} className="contact_img"></img>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6" id="card">
                    <h2><i class="fa fa-quote-right inverted_comma_icon"></i></h2>
                    <h2 className="text">Making Machinery</h2>
                    <h3 className="text1">World</h3>
                    <div className="paragraph">
                    <p className="font">Agricultural machinery is machinery used in farming or other agriculture. There are many types of such
                        equipment, from hand tools and power tools to tractors and the countless kinds of farm implements
                        that they tow or operate. Diverse arrays of equipment are used in both organic and nonorganic farming.</p></div>
                    <p className="text_align">Jessica Moore</p>
                    <p className="text_align1">Co-Founder and Creative Director</p>
                    </div>
                    <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1"></div>
                </div>
             
            </div>
        );
    }
}

export default About_page;