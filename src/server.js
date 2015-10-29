require('babel/register')({
  sourceMaps: 'inline',
  stage: 0,
  blacklist: [ 'regenerator' ],
  optional: [ 'asyncToGenerator' ]
});
require('dotenv').load();

var app = require('./server/index' );
app.listen( process.env.port || 3000 );
