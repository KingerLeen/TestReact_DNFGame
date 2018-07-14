var fs = require('fs');

//获取json对象
function info(){
    return JSON.parse(fs.readFileSync('./info.json'));
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
    key = JSON.stringify(key, null, 4);//json对象转换成字符串
    fs.writeFileSync('./info.json',key,function(err){
        if(err){
            console.error(err);
        }
        console.log(key);
    })
}

//注册
function register(user,passwd){
    var data = info();
    if(!check(user)){
        data[user] = {};
        data[user].passwd = passwd;
        data[user].gold = 0;
        data[user].diamond = 0;
    }else{
        return 'user repeat';
    }
    replace(data);
    return 'success';
}

//登录
function login(user,passwd){
    if(!check(user)){
        return 'no user';
    }else if( find(user,'passwd') != passwd ){
        return 'passwd err';
    }else{
        var data = info();
        return data[user];
    }
}
