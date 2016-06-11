var express = require('express');
var app = express();
var moment = require('moment');
var path = require('path');
app.set('port', process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, 'public')));
app.get('/:datestring', function(req,res) {
  var newDate;
  if(/^\d{1,}$/.test(req.params.datestring)) {
    newDate = moment(req.params.datestring, "X");
      if (newDate.isValid()) {
        res.json({
          unix:newDate.format("X"),
          natural:newDate.format('MMMM Do YYYY, h:mm:ss a')
        });
      }
  } else {
    newDate = moment(req.params.datestring, "MMMM D, YYYY");
      if (newDate.isValid()) {
        res.json({
          unix:newDate.format("X"),
          natural:newDate.format("MMMM D, YYYY")
        })

      }
  };


});
app.listen(app.get('port'), function() {
  console.log('Express started on http://localhost:' +
    app.get('port') + '; press Ctrl-C to terminate.');
});
