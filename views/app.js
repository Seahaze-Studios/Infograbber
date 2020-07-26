const express = require("express");
const https = require("https");
const app = express();
let serverSideBrowserInfo = "Sorry! An error occured and we couldn't retrieve your browser info. Please refresh the page to try again.";
//const request = require("request");
//const bodyparser = require("body-parser");
//app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    let serverSideBrowserInfo = JSON.stringify(req.headers["user-agent"]);
    let ip = req.ip;
    res.render("main", {
        getBrowserInfo: serverSideBrowserInfo,
        ip: ip
    });
    console.log(serverSideBrowserInfo);
    console.log(ip);
});

app.listen(6969, '0.0.0.0', function () {
    console.log("server up");
});