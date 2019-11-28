const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Chris:Rambo1978@cluster0-c1ewe.mongodb.net/test?retryWrites=true&w=majority";

var port = process.env.PORT || 3000,
    http = require('http'),
    fs = require('fs');

var app = http.createServer(function (req, res) {
  if (req.url.indexOf('/img') != -1) {
    var filePath = req.url.split('/img')[1];
    fs.readFile(__dirname + '/public/img' + filePath, function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error 404: Resource not found.');
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'image/svg+xml'});
        res.write(data);
      }
      res.end();
    });
  } else if (req.url.indexOf('/js') != -1) {
    var filePath = req.url.split('/js')[1];
    fs.readFile(__dirname + '/public/js' + filePath, function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error 404: Resource not found.');
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
      }
      res.end();
    });
  } else if(req.url.indexOf('/css') != -1) {
    var filePath = req.url.split('/css')[1];
    fs.readFile(__dirname + '/public/css' + filePath, function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error 404: Resource not found.');
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
      }
      res.end();
    });
  } else {
    fs.readFile(__dirname + '/public/index.html', function (err, data) {
      if (err) {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.write('Error 404: Resource not found.');
        console.log(err);
      } else {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
      }
      res.end();
    });
  }
}).listen(port, '0.0.0.0');

module.exports = app;

/*app.post("/api/test/database-test", function (req, res) {
    
    console.log("calling database-test..");
    return res.status(200).json({a: "arse"});
});*/

        /*
 const client = new MongoClient(uri, { useNewUrlParser: true });
    client.connect(err => 
    {
        console.log("Adding collection..");
        const collection = client.db("test").collection("mytestcollection");
    
        res.json({"username":user_name, "does he exist?":checking});
    
        // perform actions on the collection object
        client.close();
    });
    
  res.json({"username":user_name, "does he exist?":checking});
});

*/