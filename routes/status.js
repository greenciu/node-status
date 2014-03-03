var url	= require('url'),
	os	= require('os');

exports.state = function(request, response) {
  var os_info		= {};
  os_info.hostname	= os.hostname();
  os_info.type		= os.type();
  os_info.platform	= os.platform();
  os_info.arch		= os.arch();
  os_info.release	= os.release();
  os_info.uptime	= os.uptime();
  os_info.loadavg	= os.loadavg();
  os_info.totalmem	= os.totalmem();
  os_info.freemem	= os.freemem();
  os_info.cpus		= os.cpus();
  os_info.nw_if		= os.networkInterfaces();
  os_info.EOL		= os.EOL;

  var parsedUrl		= url.parse(request.url, true);
  var queryObj		= parsedUrl.query;

  var conn			= {};
  conn.address		= request.connection.remoteAddress;

  var result		= {};
  result.success	= true;
  result.query		= JSON.stringify(queryObj);
  result.conn		= conn;
  result.os_info	= os_info;

  response.send(200, result);
};