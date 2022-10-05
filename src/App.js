import './App.css';
import {Sidebar} from "./Sidebar"
import {Topbar} from "./Topbar"
import {Dashboard} from "./Dashboard"
import React from "react";
import { Routes,Route,Link ,Navigate} from "react-router-dom";
import { Tables } from './Tables';

function App() {
  return (
      <>
      <div id="wrapper">
          <Routes>

          <Route path="/" element={<MainBoard flow=""/>}/>
          <Route path="/Tables" element={<MainBoard flow="Tables"/>}/>
          <Route path="/Dashboard" element={<Navigate replace to="/"/>}/>
          </Routes>
      </div>
 </>
  );
}

export default App; 

function MainBoard({flow}){
    return (
        <>
             <div id="wrapper">
          <Sidebar/>
          <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbar/>
            <div className="container-fluid">
            <section className="routes-container">
               { 
               {
                   "":<Dashboard/>,
                   "Tables":<Tables/>
               }[flow]
               }
            </section>  
            </div>
          </div>
    
          </div>
         
      </div>
      </>
    );
}



