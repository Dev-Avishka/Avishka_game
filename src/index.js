"use strict";
exports.__esModule = true;
var cloudmailin_1 = require("cloudmailin");
var string = document.getElementById("string");
string.innerHTML = "More games incoming";
var client = new cloudmailin_1.MessageClient({ username: "beans", apiKey: "XiDHYVTgPCghPwdEyc3EcypV" });
var response = client.sendMessage({
    to: 'dabdissanyake@gmail.com',
    from: 'dabdissanayake@gmail.com',
    plain: 'a client visited the website',
    subject: "client"
});
