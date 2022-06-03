var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
require("dotenv").config();
var indexRouter = require("./routes/index");

const mongoose = require("mongoose");
const Promise = require("bluebird");
mongoose.Promise = Promise;
mongoose
  .connect("mongodb://localhost:27017/Blockchain", { useNewUrlParser: true ,
  // useCreateIndex: true,
  useUnifiedTopology:true})
  .then(() => console.log( 'Database Connected' ))
  .catch(err => console.log( err )
);

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: false
  })
);
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
// app.use(express.static("html"))

app.use("/", indexRouter);

// app.get('/',function(req,res){
//   // res.sendFile('index.html')
//   res.sendFile(path.join(__dirname+'/html/html/index.html'))
// }) 

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  return res.json({
    success: false,
    message: err.message,
    stack: err.stack
  });
});



module.exports = app;

app.listen('3000',() => {
  // console.log()
})