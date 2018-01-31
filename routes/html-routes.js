// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

var express = require("express");
var router = express.Router();
// ===============================================================================
// ROUTING
// ===============================================================================

  // HTML GET Requests
  // Below code handles when users "visit" a page.
  // In each of the below cases the user is shown an HTML page of content
  // ---------------------------------------------------------------------------
  router.get("/", function(req, res) {
    res.render("index");  
  });

  router.get("/profile", function(req, res) {
    res.render("profile");  
  });

  router.get("/landing", function(req, res) {
    res.render("landing");
  });


  // If no matching route is found default to home
 router.get("*", function(req, res) {
    res.render("index");
  });

  //CONVERT THESE INTO HANDLEBARS FILES 

module.exports = router;