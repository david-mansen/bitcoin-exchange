// var express = require("express");

// var router = express.Router();

// var cat = require("../models/model.js");

// // Create all our routes and set up logic within those routes where required.
// router.get("/", function(req, res) {
//   cat.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });

// router.post("/", function(req, res) {
//   cat.create([
//     "name", "sleepy"
//   ], [
//     req.body.name, req.body.sleepy
//   ], function() {
//     res.redirect("/");
//   });
// });

// router.put("/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   console.log("condition", condition);

//   cat.update({
//     sleepy: req.body.sleepy
//   }, condition, function() {
//     res.redirect("/");
//   });
// });

// // Export routes for server.js to use.
// module.exports = router;
