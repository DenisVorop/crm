import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Header from "./Components/Header/Header.jsx";
import Login from "./Components/Page/Login/Login.jsx";
import Page from "./Components/Page/Page.jsx";



function App() {
  return (
    <div className="wrapper">
      <Header />
      {/* <Page />
      <Login /> */}
      <Routes>
        <Route path='/login'
          element={<Login />} />
        <Route path='/records'
          element={<Page />} />
      </Routes>
    </div>
  );
}

export default App;
