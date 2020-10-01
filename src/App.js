import React from 'react';
import logo from './logo.svg';
import '@fortawesome/fontawesome-free/css/all.min.css'; 
import 'bootstrap-css-only/css/bootstrap.min.css'; 
import 'mdbreact/dist/css/mdb.css';
import './App.css';

import Routes from "./routes/Routes";
import Nav from './pages/Nav';
function App() {
  return (
   <div>
     
     <Routes/>
     
   </div>
  );
}

export default App;
