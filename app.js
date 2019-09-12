// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var server = http.createServer(function (request, response){
    // see what URL clients are requesting:
    console.log('client request URL: ', request.url);
    // routing:
    if(request.url === '/cars') {
        fs.readFile('./views/cars.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-Type': 'text/html'});  // send data about response
            response.write(contents);  //  send response body
            response.end(); // finished!
        });
    }

    else if(request.url === '/images/cars.jpeg'){
        fs.readFile('./images/cars.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    } 

    else if(request.url === '/images/mater.jpeg'){
        fs.readFile('./images/mater.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === "/cats") {
        fs.readFile('./views/cats.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents); 
            response.end();
        });
    }

    else if(request.url === '/images/marie.jpeg'){
        fs.readFile('./images/marie.jpeg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else if(request.url === '/images/cheshire.jpg'){
        fs.readFile('./images/cheshire.jpg', function(errors, contents){
            response.writeHead(200, {'Content-type': 'image/jpeg'});
            response.write(contents);
            response.end();
        })
    }

    else if (request.url === "/cars/new") {
        fs.readFile('./views/new_car.html', 'utf8', function (errors, contents){
            response.writeHead(200, {'Content-type': 'text/html'});
            response.write(contents);
            response.end();
        });
    }

    // else if(request.url === '/stylesheets/style.css'){
    //     fs.readFile('./stylesheets/style.css', 'utf8', function(errors, contents){
    //      response.writeHead(200, {'Content-type': 'text/css'});
    //      response.write(contents);
    //      response.end();
    //     })
    //   }
    
    // request didn't match anything:
    else {
        response.writeHead(404);
        response.end('File not found!!!');
    }
});
// tell server which port to run on
server.listen(8000);
// print to terminal window
console.log("Running in localhost at port 8000");