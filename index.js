const { escape } = require("querystring");
var url  = require("url"),
    fs=require("fs"),
    http=require("http"),
    path = require("path");
http.createServer(function (req, res) {
    var pathname=__dirname+url.parse(req.url).pathname;
    pathname = escape(pathname);
    if (path.extname(pathname)=="") {
        pathname+="/";
    }
    if (pathname.charAt(pathname.length-1)=="/"){
        pathname+="index.html";
    }
    pathname = unescape(pathname);
    fs.exists(pathname,function(exists){
        if(exists){
            switch(path.extname(pathname)){
                case ".html":
                    res.writeHead(200, {"Content-Type": "text/html"});
                    console.log("GET HTML 200");
                    break;
                case ".js":
                    res.writeHead(200, {"Content-Type": "text/javascript"});
                    console.log("GET JS 200");
                    break;
                case ".css":
                    res.writeHead(200, {"Content-Type": "text/css"});
                    console.log("GET css 200");
                    break;
                case ".gif":
                    res.writeHead(200, {"Content-Type": "image/gif"});
                    console.log("GET gif 200");
                    break;
                case ".jpg":
                    res.writeHead(200, {"Content-Type": "image/jpeg"});
                    console.log("GET jpg 200");
                    break;
                case ".png":
                    res.writeHead(200, {"Content-Type": "image/png"});
                    console.log("GET png 200");
                    break;
                default:
                    res.writeHead(200, {"Content-Type": "application/octet-stream"});
                    console.log("200");
            }
            fs.readFile(pathname,function (err,data){
                pathname = escape(pathname);
                console.log(pathname);
                res.end(data);
            });
        } else {
            res.writeHead(404, {"Content-Type": "text/html"});
            console.log("404 not found");
            console.log(pathname);
            res.end("<h1>404 Not Found</h1><br><a href='/'>Go back</a>");
        }
    });
}).listen(80);  //<--if you want to change port, here.
console.log("Server running at localhost");

//code in csdn https://blog.csdn.net/yy211zhu/article/details/53543208