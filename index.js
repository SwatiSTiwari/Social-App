const express = require("express");
const app = express();
var format = require("date-format");

var date;

app.get("/", (req, resp) => {
  resp.send("<h1>hello this is swati how are you?</h1>");
});
//-------------- Instragram ------------

app.get("/api/instagram", (req, resp) => {
  const instaSocial = {
    id: "swatistiwati13",
    follower: 401,
    following: 167,
    date: format.asString("hh:mm:ss", new Date()),
  };

  resp.status(200).json(instaSocial);
});
//------------- Twitter ---------------
app.get("/api/twitter", (req, resp) => {
  const twitterSocial = {
    id: "ThisIsSwati",
    follower: 69,
    following: 95,
    date: new Date(),
  };

  resp.status(200).json(twitterSocial);
});
// ------------- LinkedIN ----------
app.get("/api/linkedin", (req, resp) => {
  const linkedinSocial = {
    id: "swatistiwati13",
    follower: 496,
    following: 495,
    date: new Date(),
  };

  resp.status(200).json(linkedinSocial);
});

app.listen(5000);
