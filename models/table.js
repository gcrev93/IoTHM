require('dotenv').config()
var azure = require('azure-storage');
var uuid = require('node-uuid');

module.exports = Table;


function Table(storageClient, tableName) {
  this.storageClient = storageClient;
  this.tableName = tableName;
};

Table.prototype = {
  find: function(query, callback) {
    self = this;
    self.storageClient.queryEntities(this.tableName, query, null, function entitiesQueried(error, result) {
      if(error) {
        callback(error);
        console.log("didnt get results")
        console.log(error)
      } else {
        callback(null, result.entries);
      }
    });
  }
}