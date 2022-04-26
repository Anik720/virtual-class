const Student = require('./../models/studentModel');
var cron = require('node-cron');
let a;
var b;
var c;
(async () => {
  cron.schedule('* * * * *', async () => {
    a = await Student.find();
    a.map((x) => {
      b = x.enrollclass[0]?.assignment[0]?.deadlines;
      c = x.enrollclass[0]?.assignment[0]?.lastSubmitTime;
      const month = b?.slice(3, 5);
      const day = b?.slice(0, 2);
      const minutes = c?.slice(3);
      //  const minutes = userInput.slice(3);
      //  const minutes = userInput.slice(3);
      console.log(hours);
      // console.log('From c' + c);
      schedule.scheduleJob(`* * ${day} ${month} *`, async function () {
        console.log('The answer to life, the universe, and everything!');
      });
    });
  });
  // console.log(b);
  // console.log('From c' + c);
  setTimeout(() => {
    module.exports = a;
  }, 3000);
})();
