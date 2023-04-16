import './App.css';
import {BrowserRouter as Router,Route, Routes} from "react-router-dom";
import AddDelivery from './components/AddDelivery';
import CounterClass from './components/CounterClass';
import CounterFunc from './components/CounterFunc';
import Header from './components/Header';
import AllDelivery from './components/AllDelivery';
import DeliveryDetailsSales from './components/DeliveryDetailsSales';
//import React, { Component } from 'react';



function App() {
  return (
    <Router>
       <div>
      <Header/>
     
      <Routes>
        <Route path="/add" exact Component={AddDelivery}/>
        <Route path="/" exact Component={AllDelivery}/>
        <Route path="/get/:id/:deliveryNo/:status/:currentLocation/:deliveredDate/:dispatchedTime/:estimatedDeliverytime/:summery"
        element={<DeliveryDetailsSales/>}
        />
      </Routes>
      
      
    </div>

    </Router>
   
  );
}

export default App;
