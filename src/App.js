import React, { Component } from 'react';
import Navbar from './Components/Navbar/Navbar';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import Footer from './Components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
        {/* <Router>
          <Switch>
            <Route></Route>
          </Switch>
        </Router> */}
        <Navbar/>
        <Footer/>
      </div>
    );
  }
}

export default App;