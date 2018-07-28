var http = require("http");
var query = require("querystring");
var url = require("url");
var fs = require('fs');

//获取json对象
function info(){
    return JSON.parse(fs.readFileSync('./server/info.json'));
}

//查找信息 如：{"a":{"b":"c"}} 查找c find('a','b') => 'c'
function find(...key){
    var a = info();
    for(let i=0; i<key.length; i++){
        a = a[key[i]];
        if(!a){
            return '';
        }
    }
    return a;
}

//同find 判断是否存在 返回true false
function check(...key){
    return find(...key)?true:false;
}

//将对象存入json
function replace(key){
    key = JSON.stringify(key, null, 4); //json对象转换成字符串
    fs.writeFileSync('./server/info.json',key,function(err){
        if(err){
            console.error(err);
        }
        console.log(key);
    })
}

//注册
function register(user,passwd){
    console.log('user = ' + user);
    console.log('passwd = ' + passwd);

    if(user&&passwd&&!check(user)){
        console.log('pass check');
        var data = info();
        console.log(data);
        data[user] = {};
        data[user].user = user;
        data[user].passwd = passwd;
        data[user].gold = 0;
        data[user].diamond = 0;
        data[user].character= [];
    }else{
        return 'user repeat or passwd is empty';
    }
    replace(data);
    return 'success';
}

//登录
function login(user,passwd){
    console.log('user = ' + user);
    console.log('passwd = ' + passwd);
    if(!check(user)){
        console.log('no pass check user');
        return 'no user';
    }
    if(find(user,'passwd') != passwd || find(user,'user') != user){
        console.log('no pass check passwd');
        return 'passwd or user err';
    }
    console.log('pass check');
    var data = info();
    return data[user];
}

//上传
function push(user, passwd, data){
    console.log('user = ' + user);
    console.log('passwd = ' + passwd);
    if(!check(user)){
        console.log('no pass check user');
        return 'no user';
    }
    if(find(user,'passwd') != passwd || find(user,'user') != user){
        console.log('no pass check passwd');
        return 'passwd or user err';
    }
    console.log('pass check');
    var a = info();
    data = eval('('+data+')');
    if(!data||!data['passwd']){
        return 'data not find or data.passwd not find';
    }
    a[user] = data;
    replace(a);
    return 'success';
}

//获取json对象
function pub(){
    return JSON.parse(fs.readFileSync('./server/public.json'));
}

function re(){
    return pub();
}

//***************************************************************

/*传参 code 含义
1 注册
2 登录
3 提交新数据
*/

var server = http.createServer(function (req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*"); 
    var res_info = {};
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});

    if (req.method.toLowerCase() == "get") {
        try {
            var req_info = url.parse(req.url, true).query;
        
            var user = req_info['user'];
            var passwd = req_info['passwd'];
            
            var data = '';
            res_info['data'] = data;
            if(req_info['code'] == '1'){
                console.log('start register');
                data = register(user, passwd);
                res_info['data'] = data;
            }else if(req_info['code'] == '2'){
                console.log('start login');
                data = login(user, passwd);
                res_info['data'] = data;
            }else if(req_info['code'] == '3'){
                console.log('start push');
                var info = req_info['data']
                data = push(user, passwd, info);
                res_info['data'] = data;
            }
            
            res.write(JSON.stringify(res_info));
            res.end();
        } catch (err) {
            res_info['data'] = err;
            res.write(JSON.stringify(res_info));
            res.end();
        }
        console.log(data);
        console.log('running 127.0.0.1:2333');
        console.log('********************************************');
    }
}).listen(2333, "127.0.0.1");

console.log('running 127.0.0.1:2333');
console.log('********************************************');