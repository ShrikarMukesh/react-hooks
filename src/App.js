import "./App.css";
import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
//import LeadsList from "./components/LeadsList";
//import ClassCounter from "./components/ClassCounter";
//import HookCounter from "./components/HookCounter";
//import HookCounterTwo from "./components/HookCounterTwo";
//import HookCounter3 from "./components/HookCounter3";
import HookCounter4 from "./StateHooks/HookCounter4";
import Header from "./lab16/Header";
import LeadsList from "./lab16/LeadsList";

function App() {
  return (
    <div className="App">
      {/*<ClassCounter /> */}
      {/* <HookCounter /> */}
      {/*<HookCounterTwo /> */}
      {/*<HookCounter3 /> */}
      {/*<HookCounter4 /> */}
      <Header mybrand="Lead Manager" />
      <LeadsList />
    </div>
  );
}

export default App;
