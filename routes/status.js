var url = require('url');

exports.state = function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var _queryObj = parsedUrl.query;

  console.log(JSON.stringify(_queryObj));

  var result = {};
  result.success = true;
  response.send(result);
};