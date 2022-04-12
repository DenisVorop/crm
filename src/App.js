import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Header from './Components/Header/Header';
import Login from "./Components/Pages/Login/Login";
import Page from "./Components/Pages/Reception/Page";
import NewPatient from './Components/Pages/NewPatient/NewPatient';
import NewRecord from './Components/Pages/NewRecord/NewRecord';
import AllCards from './Components/Pages/PatientsCards/AllCards';
import Notfound from './Components/Pages/NotFound/NotFound';
import Card from './Components/Common/Card/Card';


import { getoldUsersData, getTimesData } from './Redux/Reducers/usersReducer';


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getoldUsersData());
    dispatch(getTimesData());
  }, []);

  const [cardInfo, setCardInfo] = React.useState(null)

  const getCardNum = (objPatCard) => {
    setCardInfo(objPatCard)
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path={'/login'}
          element={<Login />} />
        <Route path='/' element={<Header />}>
          <Route index
            element={<Navigate to='reception' />} />
          <Route path={'reception'}
            element={<Page getCardNum={getCardNum} />} />
          <Route path={'patients/:cardNum'}
            element={<Card cardInfo={cardInfo} />} />
          <Route path={'new-patient'}
            element={<NewPatient />} />
          <Route path={'new-record'}
            element={<NewRecord />} />
          <Route path={'cards'}
            element={<AllCards getCardNum={getCardNum} />} />
        </Route>
        <Route path={'404'}
          element={<Notfound />} />
        <Route path={'*'}
          element={<Navigate to='404' />} />
      </Routes>
    </div>
  );
}

export default App;
