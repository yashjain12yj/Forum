// modules for server
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');

// server configurations
const serverConfigs = require('./config/serverConfig');

// connect to database
// mongoose.connect(serverConfigs.DBURL);

mongoose.connect(serverConfigs.DBURL, function(err){
  if(err) console.log("error in mongo in app.js");
});

// initialize express
const app = express();

// apply express configs
require('./backend/express')(app, serverConfigs);

// fire up the server
app.listen(serverConfigs.PORT, (error) => {
  if (error) throw error;
  console.log('Server running on port: ' + serverConfigs.PORT);
});
