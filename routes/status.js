var url = require('url');

var client = new elasticsearch.Client();
var crid = "crid://eventis.nl/00000000-0000-1000-0004-00000188753F";

status.state = function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var _queryObj = parsedUrl.query;

  console.log(JSON.stringify(_queryObj));

  var result = {};
  result.success = true;
  response.send(result);
};