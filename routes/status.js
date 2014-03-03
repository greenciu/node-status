var url = require('url'),
	os = require('os');

exports.state = function(request, response) {
  var parsedUrl = url.parse(request.url, true);
  var _queryObj = parsedUrl.query;

  var os		= {};
  os.hostname	= os.hostname();
  os.type		= os.type();
  os.platform	= os.platform();
  os.release	= os.release();
  os.uptime		= os.uptime();
  os.loadavg	= os.loadavg();
  os.totalmem	= os.totalmem();
  os.freemem	= os.freemem();
  os.cpus		= os.cpus();

  var result	= {};
  result.success= true;
  result.query	= JSON.stringify(_queryObj);
  result.request= JSON.stringify(request);
  
  response.send(result);
};