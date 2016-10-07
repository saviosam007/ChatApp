var DataStore = require("nedb");
var dbFile = new DataStore({filename:"userdata.db", autoload:"true"});


module.exports = dbFile;