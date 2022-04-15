import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './Components/Header/Header';
import Login from "./Components/Pages/Login/Login";
import Page from "./Components/Pages/Receptions/Page";
import NewPatient from './Components/Pages/NewPatient/NewPatient';
import NewRecord from './Components/Pages/NewRecord/NewRecord';
import AllCards from './Components/Pages/Cards/AllCards';
import Notfound from './Components/Pages/NotFound/NotFound';
import Card from './Components/Pages/Card/Card';


import { getoldUsersData, getTimesData } from './Redux/Reducers/usersReducer';
import Reception from './Components/Pages/Reception/Reception';


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getoldUsersData());
    dispatch(getTimesData());
  }, []);

  const [cardInfo, setCardInfo] = React.useState(null)
  const [receptionInfo, setReceptionInfo] = React.useState(null)

  const getCardNum = (objPatCard) => {
    setCardInfo(objPatCard)
  }

  const getReception = (objReception) => {
    setReceptionInfo(objReception)
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path={'/login'}
          element={<Login />} />
        <Route path='/' element={<Header />}>
          <Route index
            element={<Navigate to='receptions' />} />
          <Route path={'receptions'}
            element={<Page getReception={getReception} />} />
          <Route path={'receptions/:reception'}
            element={<Reception receptionInfo={receptionInfo} />} />
          <Route path={'new-patient'}
            element={<NewPatient />} />
          <Route path={'new-record'}
            element={<NewRecord />} />
          <Route path={'cards'}
            element={<AllCards getCardNum={getCardNum} />} />
          <Route path={'patients/:cardNum'}
            element={<Card cardInfo={cardInfo} />} />
          <Route path={'404'}
            element={<Notfound />} />
        </Route>
        <Route path={'*'}
          element={<Navigate to='404' />} />
      </Routes>
    </div>
  );
}

export default App;
