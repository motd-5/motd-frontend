import React from "react";
import './App.css';
import Router from "./shared/Router";
import Login from "./pages/Login";
import Auth from "./pages/Auth";
import Header from "./components/home/Header";
import HomePage from "./components/home/HomePage";

function App() {
  return (
    <Router />
  );
}

export default App;
