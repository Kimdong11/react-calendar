// const moment = require('moment');

data = ['01-02-2022', '01-02-2022', '01-02-2022', '01-02-2022', '01-02-2022'];

const test = date => {
   if (data.find(x => x === '01-02-2022')) {
      console.log('good!');
   }
};

test();
