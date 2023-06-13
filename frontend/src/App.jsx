import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRouter from "./components/AppRouter.jsx";
import './styles/common.scss';


function App() {
  return (
    <BrowserRouter>
      <AppRouter />
    </BrowserRouter>
  );
}

export default App;
