import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Login from "./Components/Pages/Login/Login";
import Page from "./Components/Pages/Reception/Page";
import Card from './Components/Common/Card/Card';
import NewPatient from './Components/Pages/Reception/NewPatient/NewPatient';
import NewRecord from './Components/Pages/Reception/NewRecord/NewRecord';
import Notfound from './Components/Pages/Reception/NotFound/NotFound';
import Header from './Components/Header/Header';
import AllCards from './Components/Pages/Cards/AllCards';

import { getUsersData, getTimesData } from './Redux/Reducers/usersReducer';


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsersData());
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
            element={<AllCards />} />
        </Route>
        <Route path={'*'}
          element={<><Navigate to='404' /><Notfound /></>} />
      </Routes>
    </div>
  );
}

export default App;
