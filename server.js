var OAuth = require('oauth');
var qs = require('qs');

var key = '';
var secret = '';

function yahooSearch(consumerKey, consumerSecret, query, count, callback_error_data_response){
	var geoSearchUrl = 'https://yboss.yahooapis.com/geo/placefinder';
	var webSearchUrl = 'https://yboss.yahooapis.com/ysearch/web';

  var finalUrl = geoSearchUrl + '?' + qs.stringify({
    q: query,  //geocode query keyword
    flags: 'J',
    count: count,
  });

  var oa = new OAuth.OAuth(webSearchUrl, geoSearchUrl , consumerKey, consumerSecret, "1.0", null, "HMAC-SHA1");
  oa.setClientOptions({ requestTokenHttpMethod: 'GET' });
  oa.getProtectedResource(finalUrl, "GET", '','', callback_error_data_response);
}

// Use this function to make a call back. Make sure to provide the right key, secret and query for this to work correctly
yahooSearch(key, secret, 'woodward and warren, detroit mi', 10, function(error, data, response){
	console.log(error, data);
});
