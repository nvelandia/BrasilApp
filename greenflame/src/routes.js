
import React, { useState, useEffect } from 'react'; // eslint-disable-line
import { BrowserRouter, Route, Switch } from 'react-router-dom';


// Container

import Home from '../src/view/container/home';
import Step1 from '../src/view/container/step1';
import Step2 from '../src/view/container/step2';
import Step3 from '../src/view/container/step3';



function Routes() {

  return (

    <BrowserRouter>
        {/* <Route /> */}
            <Switch>
                <Route exact path='/' render={ ()=> <Home/> } />
                <Route exact path='/step1' render={ ()=> <Step1/> } />
                <Route exact path='/step2' render={ ()=> <Step2/> } />
                <Route exact path='/step3' render={ ()=> <Step3/> } />
            </Switch>
        {/* <Route /> */}
       
    </BrowserRouter>

   
  );
}

export default Routes;
