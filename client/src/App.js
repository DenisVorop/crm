import React from 'react';
import { Navigate, Route, Routes, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Header from './Components/Common/Header/Header';
import Preloader from './Components/Common/Preloader/Preloader';
import Login from "./Components/Pages/Login/Login";
import Page from "./Components/Pages/Receptions/Page";
import NewPatient from './Components/Pages/NewPatient/NewPatient';
import NewRecord from './Components/Pages/NewRecord/NewRecord';
import AllCards from './Components/Pages/Cards/AllCards';
import Notfound from './Components/Pages/NotFound/NotFound';
import Card from './Components/Pages/Card/Card';
import Reception from './Components/Pages/Reception/Reception';

import { getoldUsersData, getTimesData } from './Redux/Reducers/usersReducer';
import { setLoginValues } from './Redux/Reducers/authReducer';

import { checkApi } from './API/api';


function App() {

  const { user, isAuth } = useSelector(({ authReducer }) => authReducer);
  const [loading, setLoading] = React.useState(true)
  const dispatch = useDispatch();
  const navigate = useNavigate()

  React.useEffect(() => {
    checkApi().then(data => {
      dispatch(setLoginValues(data));
    }).finally(() => setLoading(false))

    if (isAuth === false && !window.localStorage.token) {
      navigate('/login')
    }
    if (isAuth === false && window.localStorage.token) {
      navigate('/receptions')
    }

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

  if (loading) {
    return <Preloader />
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
