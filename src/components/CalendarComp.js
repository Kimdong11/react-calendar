import '../calendar.css';
import moment from 'moment';
import Calendar from 'react-calendar';
import { useState } from 'react';

const CalendarComp = ({ moho, businessName }) => {
   const [value, onChange] = useState(new Date());

   //    const handleOnClick = () => {
   //       let date = [];
   //       value.map(day => {
   //          date.push(moment(day).format('YYYY-MM-DD'));
   //       });
   //       if (businessName === 'moho') {
   //          const link = `https://www.airbnb.co.kr/rooms/742349141243284218?adults=1&source_impression_id=p3_1668382094_yoeoRY%2BW9W%2BgN1RF&guests=1&check_in=${
   //             date[0]
   //          }&check_out=${date[date.length - 1]}`;
   //          return window.open(link);
   //       } else {
   //          const link = `https://www.airbnb.co.kr/rooms/49124590?adults=1&source_impression_id=p3_1668364714_u2iUWjbjd5gOAcCj&guests=1&check_in=${
   //             date[0]
   //          }&check_out=${date[date.length - 1]}`;
   //          return window.open(link);
   //       }
   //    };

   return (
      <Calendar
         onChange={onChange}
         value={value}
         minDetail="month"
         maxDetail="month"
         navigationLabel={null}
         calendarType="US"
         showNeighboringMonth={false}
         formatDay={(locale, date) => moment(date).format('DD')}
         tileContent={({ date, view }) => {
            if (
               moho.find(x => Object.keys(x)[0] === moment(date).format('DD-MM-YYYY') && Object.values(x)[0] === '불가')
            ) {
               return (
                  <>
                     <div className="absoluteDiv">
                        <div className="reserve">예약중</div>
                        <div className="line"></div>
                     </div>
                  </>
               );
            } else if (
               moho.find(
                  x => Object.keys(x)[0] === moment(date).format('DD-MM-YYYY') && Object.values(x)[0] === '체크아웃',
               )
            ) {
               return (
                  <>
                     <div className="absoluteDiv">
                        <div className="reserve">체크아웃만 가능</div>
                        <div className="line"></div>
                     </div>
                  </>
               );
            }
         }}
      />
   );
};

export default CalendarComp;
