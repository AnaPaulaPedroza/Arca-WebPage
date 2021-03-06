import React, { Component } from 'react';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Toolbar from './components/Toolbar/Toolbar';

import AboutUs from './pages/AboutUs/AboutUs';
import Notifications from './pages/Notifications/Notifications';
import Entregas from './pages/Entregas';
import Inicio from './pages/Inicio/Inicio';
import Perfil from './pages/Perfil/Perfil';
import Ranking from './pages/Ranking/Ranking';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sideDrawerOpen: !prevState.sideDrawerOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sideDrawerOpen: false});

  };

  render(){
    let backdrop;

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click = {this.backdropClickHandler} />
    }

    return(
      <div style = {{height: '100%'}}>
        <Router>
          <Toolbar drawerClickHandler = {this.drawerToggleClickHandler} />
          <SideDrawer show = {this.state.sideDrawerOpen} />
          {backdrop}
          <main style={{marginTop: '5%'}}>
          </main>
          <Routes>
            <Route exact path = '/' element = {<Inicio />} /> 

            <Route path = '/profile' element = {<Perfil />} />

            <Route path = '/entregas' element = {<Entregas />} />

            <Route path = '/ranking' element = {<Ranking />} />

            <Route path = '/notifications' element = {<Notifications />} /> 

            <Route path = '/about-us' element = {<AboutUs />} />

          </Routes>
        </Router>
      </div>
    );
  }
}

export default App;