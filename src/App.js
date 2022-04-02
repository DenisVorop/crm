import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Login from "./Components/Page/Login/Login";
import Page from "./Components/Page/Page";
import Card from './Components/Common/Card/Card';

import { getUsersData, getTimesData } from './Redux/Reducers/usersReducer';
import { getLastRecordsData } from './Redux/Reducers/lastRecordsReducer';


function App() {

  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getUsersData());
    dispatch(getTimesData());
    dispatch(getLastRecordsData());
  }, []);

  const [cardNum, setCardNum] = React.useState(null)
  const [cardInfo, setCardInfo] = React.useState(null)

  const getCardNum = (objPatCard) => {
    setCardNum(objPatCard.card_num)
    setCardInfo(objPatCard)
  }

  return (
    <div className="wrapper">
      <Routes>
        <Route path='/'
          element={<Login />} />
        <Route path='/records'
          element={<Page getCardNum={getCardNum}/>} />
        <Route path={`/records/card=${cardNum}`}
          element={<Card cardInfo={cardInfo} />} />
      </Routes>
    </div>
  );
}

export default App;
