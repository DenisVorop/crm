import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from "./Components/Page/Login/Login.jsx";
import Page from "./Components/Page/Page.jsx";
import NewRec from './Components/Page/NewRec/NewRec.jsx';



function App() {


  return (
    <div className="wrapper">
      <Routes>
        <Route path='/'
          element={<Login />} />
        <Route path='/records'
          element={<Page />} />
        <Route path='/new-rec'
          element={<NewRec />} />
      </Routes>
    </div>
  );
}

export default App;
