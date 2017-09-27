var azure = require('azure-storage');

module.exports = TableList;

function TableList(table) {
  this.table = table;
}

TableList.prototype = {
  showTables: function(req, res) {
    self = this;
    var query = new azure.TableQuery().top(10);
    self.table.find(query, function itemsFound(error, items) {
      res.render('index', {title: 'IoT Messages', tasks: items});
    });
  }
}