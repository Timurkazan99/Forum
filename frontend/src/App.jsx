import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter.jsx";
import './styles/common.scss';
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
