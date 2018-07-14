var http = require("http");
var query = require("querystring");
var url = require("url");
var func = require('./func');

/* code 含义
1 注册
2 登录
*/

var server = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    if (req.method.toLowerCase() == "get") {
        var req_info = url.parse(req.url, true).query;
        var res_info = {};
        
        // var result=JSON.parse(fs.readFileSync('./info.json'));
        if(req_info['code'] == '1'){
            // if(!result[req_info['user']]){
            //     result[req_info['user']] = {};
            //     result[req_info['user']]['passwd'] = req_info['passwd'];
            // }
            res_info['123'] = 123;
        }else if(req_info['code'] == '2'){
            res_info['321'] = 321;
        }
        
        res.write(JSON.stringify(res_info));
        res.end();
    }
}).listen(2333, "127.0.0.1");

console.log('running 127.0.0.1:2333')