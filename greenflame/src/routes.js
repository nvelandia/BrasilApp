
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Container

import Home from './view/container/home';
import Step1 from './view/container/step1';
import Step2 from './view/container/step2';
import Step3 from './view/container/step3';
import NavBar from './view/components/molecules/navbar';
import Footer from './view/components/organism/footer';
import Copyright from './view/components/molecules/copyright';




function Routes() {

  return (

    <BrowserRouter>
        <Route path='/' render={() => <NavBar/> } /> 
            <Switch>
                <Route exact path='/' render={ ()=> <Home/> } />
                <Route exact path='/step1' render={ ()=> <Step1/> } />
                <Route exact path='/step2' render={ ()=> <Step2/> } />
                <Route exact path='/step3' render={ ()=> <Step3/> } />
            </Switch>
        <Route path='/' render={() => <Footer/> } />        
    </BrowserRouter>

   
  );
}

export default Routes;
