// import React, { Component } from 'react';
// import './F'
// class Footer extends Component {
//     render() {
//         return (
//             <div className="footer">
//             @Copyright
//              <i class="fa fa-instagram" ></i>
//              <i class="fa fa-whatsapp" ></i>
//              <i class="fa fa-twitter"></i>   
//              <i class="fa fa-facebook-f" ></i>            
//          </div>
//         );
//     }
// }

// export default Footer;

import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="2">
            <h5 className="title">Company Address</h5>
            <p>
              P.Hosahalli,Belagola Hobli,Sr Patna Taluk<br></br>Mandya District-571438
            </p>
          </MDBCol>
          <MDBCol md="2">
            <h5 className="title">Telephone Number</h5>
            <p>
              +91-9844367467 
            </p>
            
          </MDBCol>
          <MDBCol md="3">
            <h5 className="title">Email</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">mithunhrm07@gmail.com</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">bindushreerm10@gmail.com</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.agricultural_Machinery.com">Company Machinery</a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;