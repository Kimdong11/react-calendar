import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import CalendarComp from './components/CalendarComp';

const App = () => {
   const [moho, setMoho] = useState([]);
   const [myOwnHome, setMyOwnHome] = useState([]);

   const getMoho = async () => {
      const date = await await axios.get('http://localhost:5000/moho');
      const json = JSON.parse(date.data);

      setMoho(json);
   };

   const getMyOwnHome = async () => {
      const date = await await axios.get('http://localhost:5000/myownhome');
      const json = JSON.parse(date.data);
      setMyOwnHome(json);
   };

   useEffect(() => {
      getMoho();
      getMyOwnHome();
   }, []);

   return (
      <div className="container">
         {moho.length !== 0 ? (
            <div className="calendar_container">
               <h1 className="business_name">모호</h1>
               <CalendarComp moho={moho} businessName="moho" />
            </div>
         ) : (
            <h1>Loading...</h1>
         )}
         {myOwnHome.length !== 0 ? (
            <div className="calendar_container">
               <h1 className="business_name">마이온홈</h1>
               <CalendarComp moho={myOwnHome} businessName="myownhome" />
            </div>
         ) : (
            <h1>Loading...</h1>
         )}
      </div>
   );
};

export default App;
