const express = require("express");
const morgan = require('morgan');
var indexRouter = require('./routes/index.routes');
const cors = require('cors');

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(cors());
app.use('/api', indexRouter);

// app.use(function (req, res, next) {
//     next(createError(404));
//   });
//   require('./utils/socket');
  // error handler
//   app.use(function (err, req, res, next) {
//     // set locals, only providing error in development
//     res.locals.message = err.message;
//     res.locals.error = req.app.get('env') === 'development' ? err : {};
  
//     // render the error page
//     res.status(err.status || 500);
// });

app.listen(5000,()=>{
    console.log("Port Run Localhost:5000");
})