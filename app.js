var express  = require( 'express' );
var http = require('http');
var path = require("path");
var app = express();

app.set('views', __dirname + '/views');
app.use(express.static(path.join(__dirname, 'static')));
app.engine('html', require('ejs').renderFile);


app.get('/', function(request, response) {
    response.render('index.html'); 
});

app.get('/resume', function(request, response) {
    response.render('resume.html'); 
});

app.get('*', function ( req, res, next ){
  res.end('404 Page!');
});

console.log('Server started on http://localhost:8080');
app.listen(process.env.PORT || 8080);