import React, { Component } from 'react';
import LoginPage from './Components/LoginPage/LoginPage';
import RegisterPage from './Components/RegisterPage/RegisterPage';
import { BrowserRouter as Router, Route , Switch} from 'react-router-dom';
import HomePage from './Components/HomePage/HomePage';
import Planting_machines from './Components/Planting_machines/Planting_machines';
import Irrigation_page from './Components/Irrigation_page/Irrigation_page';
import Harvest_page from './Components/Harvest_page/Harvest_page';


class App extends Component {
  render() {
    return (
      <div className="App">
   {/* <Router> 
   <Switch>
   <Route exact path='/login' component={LoginPage}></Route>
   <Route exact path='/RegisterPage' component={RegisterPage}></Route>
   <Route exact path='/' component={HomePage}></Route>
   <Route exact path='/Planting_machines' component={Planting_machines}></Route>
   </Switch>
 </Router>  */}
 {/* <Irrigation_page/> */}
 <Harvest_page/>
</div>
    );
  }
}

export default App;