class Man{
    user = {
        user: "",
        passwd: "",
        gold: 0,
        diamond: 0,
        character: []
    }
    
    minTime = 1 //最短时间修改

    profession = [
        {
            code: 0,
            name: "白手",
            chushi: {
                name: "剑士",
                power: {"jichu":10,"chengzhang":1},
                speed: {"jichu":10,"chengzhang":1}
            },
            yizhuan: {
                name: "剑师",
                power: {"jichu": 50,"chengzhang": 2},
                speed: {"jichu": 10,"chengzhang": 2}
            },
            erzhuan: {
                name: "剑灵",
                power: {"jichu": 100,"chengzhang": 10},
                speed: {"jichu": 10,"chengzhang": 3}
            },
            sanzhuan: {
                name: "剑宗",
                power: {"jichu": 500,"chengzhang": 50},
                speed: {"jichu": 100,"chengzhang": 5}
            },
            sizhuan: {
                name: "剑君",
                power: {"jichu": 1000,"chengzhang": 100},
                speed: {"jichu": 100,"chengzhang": 5}
            },
            wuzhuan: {
                name: "剑圣",
                power: {"jichu": 5000,"chengzhang": 500},
                speed: {"jichu": 100,"chengzhang": 10}
            },
            shen: {
                name: "剑神",
                power: {"jichu": 100,"chengzhang": 5000},
                speed: {"jichu": 100,"chengzhang": 50}
            },
        }
    ]

    equipment = [];
    add(times, the) {
        for (let i = 0; i < times; i++) {
            this.equipment.push(the);
        }
    }

    diji1 = [];
    add2(times, the) {
        for (let i = 0; i < times; i++) {
            this.diji1.push(the);
        }
    }

    diji2 = [];
    add3(times, the) {
        for (let i = 0; i < times; i++) {
            this.diji2.push(the);
        }
    }

    diji3 = [];
    add4(times, the) {
        for (let i = 0; i < times; i++) {
            this.diji3.push(the);
        }
    }

    diji4 = [];
    add5(times, the) {
        for (let i = 0; i < times; i++) {
            this.diji4.push(the);
        }
    }
    
    constructor(user){
        this.user = user;
        this.add(100,{
            "name":"魔战","type":"","sell":8888,"quality":100,
            "power":800,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add(88,{
            "name":"逝魔","type":"","sell":8888,"quality":100,
            "power":1000,"speed":-10,
            "qianghua":0,"zengfu":0
        });
        this.add(85,{
            "name":"天域","type":"","sell":8888,"quality":100,
            "power":1500,"speed":10,
            "qianghua":0,"zengfu":0
        });
        this.add(55,{
            "name":"战术","type":"","sell":8888,"quality":100,
            "power":888,"speed":100,
            "qianghua":0,"zengfu":0
        });
        this.add(55,{
            "name":"时光","type":"","sell":8888,"quality":100,
            "power":2000,"speed":5,
            "qianghua":0,"zengfu":0
        });
        this.add(53,{
            "name":"万世","type":"","sell":8888,"quality":100,
            "power":4000,"speed":100,
            "qianghua":0,"zengfu":0
        });
        this.add(50,{
            "name":"上元节","type":"","sell":8888,"quality":100,
            "power":5000,"speed":-50,
            "qianghua":0,"zengfu":0
        });
        this.add(51,{
            "name":"星辰","type":"","sell":8888,"quality":100,
            "power":3000,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add(50,{
            "name":"女装","type":"","sell":8888,"quality":100,
            "power":5000,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add(30,{
            "name":"恍惚","type":"","sell":8888,"quality":100,
            "power":9000,"speed":200,
            "qianghua":0,"zengfu":0
        });
        this.add(20,{
            "name":"海博伦","type":"","sell":8888,"quality":100,
            "power":12000,"speed":100,
            "qianghua":0,"zengfu":0
        });
        this.add(10,{
            "name":"超时空","type":"","sell":8888,"quality":100,
            "power":50000,"speed":300,
            "qianghua":0,"zengfu":0
        });
        this.add(3,{
            "name":"whosyourdaddy!","type":"","sell":88888,"quality":100,
            "power":88888,"speed":-88,
            "qianghua":0,"zengfu":0
        });
        this.add(2,{
            "name":"天下无敌","type":"","sell":888888,"quality":100,
            "power":888888,"speed":88,
            "qianghua":0,"zengfu":0
        });
        this.add(1,{
            "name":"king","type":"","sell":8888888,"quality":100,
            "power":8888888,"speed":8888888,
            "qianghua":0,"zengfu":0
        });
        //***********************************************
        this.add2(10,{
            "name":"破烂的","type":"","sell":50,"quality":100,
            "power":10,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add2(10,{
            "name":"将就能用的","type":"","sell":44,"quality":100,
            "power":8,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add2(10,{
            "name":"生锈的","type":"","sell":88,"quality":100,
            "power":15,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add2(10,{
            "name":"不堪入目的","type":"","sell":30,"quality":100,
            "power":8,"speed":-3,
            "qianghua":0,"zengfu":0
        });
        this.add2(20,{
            "name":"沾了点狗屎的","type":"","sell":10,"quality":100,
            "power":20,"speed":-6,
            "qianghua":0,"zengfu":0
        });
        this.add2(10,{
            "name":"垃圾堆捡到的","type":"","sell":88,"quality":100,
            "power":12,"speed":5,
            "qianghua":0,"zengfu":0
        });
        this.add2(3,{
            "name":"贵族丢弃的","type":"","sell":888,"quality":100,
            "power":50,"speed":5,
            "qianghua":0,"zengfu":0
        });
        //***********************************************
        this.add3(10,{
            "name":"实惠的","type":"","sell":200,"quality":100,
            "power":30,"speed":5,
            "qianghua":0,"zengfu":0
        });
        this.add3(10,{
            "name":"好看的","type":"","sell":250,"quality":100,
            "power":40,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add3(10,{
            "name":"中看不中用的","type":"","sell":150,"quality":100,
            "power":20,"speed":-10,
            "qianghua":0,"zengfu":0
        });
        this.add3(10,{
            "name":"花里胡哨的","type":"","sell":220,"quality":100,
            "power":35,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add3(20,{
            "name":"女式","type":"","sell":350,"quality":100,
            "power":20,"speed":20,
            "qianghua":0,"zengfu":0
        });
        this.add3(10,{
            "name":"凑合的","type":"","sell":350,"quality":100,
            "power":35,"speed":5,
            "qianghua":0,"zengfu":0
        });
        this.add3(3,{
            "name":"可以说是很棒了的","type":"","sell":550,"quality":100,
            "power":100,"speed":10,
            "qianghua":0,"zengfu":0
        });
        //***********************************************
        this.add4(10,{
            "name":"钢铁","type":"","sell":888,"quality":100,
            "power":100,"speed":5,
            "qianghua":0,"zengfu":0
        });
        this.add4(10,{
            "name":"精致","type":"","sell":800,"quality":100,
            "power":120,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add4(10,{
            "name":"强大的","type":"","sell":900,"quality":100,
            "power":150,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add4(10,{
            "name":"镂空","type":"","sell":1000,"quality":100,
            "power":80,"speed":50,
            "qianghua":0,"zengfu":0
        });
        this.add4(10,{
            "name":"透明","type":"","sell":1000,"quality":100,
            "power":120,"speed":20,
            "qianghua":0,"zengfu":0
        });
        this.add4(3,{
            "name":"紫玛瑙","type":"","sell":2000,"quality":100,
            "power":250,"speed":5,
            "qianghua":0,"zengfu":0
        });
        //***********************************************
        this.add5(10,{
            "name":"绝版","type":"","sell":3500,"quality":100,
            "power":300,"speed":5,
            "qianghua":0,"zengfu":0
        });
        this.add5(10,{
            "name":"做工精细的","type":"","sell":4000,"quality":100,
            "power":350,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add5(10,{
            "name":"强力","type":"","sell":4500,"quality":100,
            "power":400,"speed":-10,
            "qianghua":0,"zengfu":0
        });
        this.add5(10,{
            "name":"金边","type":"","sell":5000,"quality":100,
            "power":400,"speed":0,
            "qianghua":0,"zengfu":0
        });
        this.add5(10,{
            "name":"铝合银","type":"","sell":5000,"quality":100,
            "power":380,"speed":10,
            "qianghua":0,"zengfu":0
        });
        this.add5(3,{
            "name":"24K纯金","type":"","sell":8888,"quality":100,
            "power":888,"speed":88,
            "qianghua":0,"zengfu":0
        });
        this.getUser = this.getUser.bind(this);
        this.setUser = this.setUser.bind(this);
    }

    setUser(user){
        this.user = user;
    }
    getUser(){
        return this.user;
    }
    getProfession(){
        return this.profession;
    }
    
    createMan(man) {
        var str = "";
        if(man === 0){
            str = "白手";
        }
        var c = {
            name: str,
            Lv: 1,
            exp: 0,
            profession: man,//0,1,2
            professionZhuan: "chushi",
            power: this.profession[man].chushi.power.jichu+this.profession[man].chushi.power.chengzhang,
            speed: this.profession[man].chushi.speed.jichu+this.profession[man].chushi.speed.chengzhang,

            jacket: {},
            shoulder: {},
            breastplate: {},
            leg: {},
            shoes: {},

            weapon: {},

            necklace: {},
            bracelet: {},
            ring: {},

            stone: {},
            auxiliary: {},
            earring: {},

            backpack: []
        };
        this.user.character.push(c);
    }

    /**
     * 重新检查 战斗力
     */
    calculatePower(count){
        var c = this.user.character[count];
        var p = 0;
        function fix(s){
            if(c[s].name===undefined){
                return 0;
            }
            return (c[s].quality/100)*c[s].power*(((c[s].zengfu>=12?1.5:1.3)**c[s].zengfu)*(c[s].zengfu>=15?1.2:1)*(c[s].zengfu>=17?1.3:1)*(c[s].zengfu>=19?1.4:1)*(c[s].zengfu>=21?1.5:1))*(((c[s].qianghua>=12?1.3:1.1)**c[s].qianghua)*(c[s].qianghua>=15?1.2:1)*(c[s].qianghua>=17?1.3:1)*(c[s].qianghua>=19?1.4:1)*(c[s].qianghua>=21?1.5:1));
        }
        function find(s){
            return c[s].name;
        }
        p += this.profession[c.profession][c.professionZhuan].power.jichu;
        p += this.profession[c.profession][c.professionZhuan].power.chengzhang*c.Lv;
        p += fix("jacket");p += fix("shoulder");p += fix("breastplate");
        p += fix("leg");p += fix("shoes");p += fix("weapon");
        p += fix("necklace");p += fix("bracelet");p += fix("ring");
        p += fix("stone");p += fix("auxiliary");p += fix("earring");
        if(find("jacket")!==undefined&&find("jacket")===find("shoulder")&&
            find("breastplate")===find("shoulder")&&
            find("breastplate")===find("leg")&&
            find("shoes")===find("leg")){
            p *= 1.2;
        }
        if(find("necklace")!==undefined&&find("necklace")===find("bracelet")&&
            find("bracelet")===find("ring")){
            p *= 1.1;
        }
        if(find("stone")!==undefined&&find("stone")===find("auxiliary")&&
            find("auxiliary")===find("earring")){
            p *= 1.1;
        }
        c.power = p;
        this.user.character[count] = c;
        return p;
    }

    /**
     * 重新检查 速度
     */
    calculateSpeed(count){
        var c = this.user.character[count];
        var p = 0;
        function fix(s){
            if(c[s].name===undefined){
                return 0;
            }
            return (c[s].quality/100)*c[s].speed*(((c[s].zengfu>=12?1.5:1.3)**c[s].zengfu)*(c[s].zengfu>=15?1.2:1)*(c[s].zengfu>=17?1.3:1)*(c[s].zengfu>=19?1.4:1)*(c[s].zengfu>=21?1.5:1))*(((c[s].qianghua>=12?1.3:1.1)**c[s].qianghua)*(c[s].qianghua>=15?1.2:1)*(c[s].qianghua>=17?1.3:1)*(c[s].qianghua>=19?1.4:1)*(c[s].qianghua>=21?1.5:1));
        }
        function find(s){
            return c[s].name;
        }
        p += this.profession[c.profession][c.professionZhuan].speed.jichu;
        p += this.profession[c.profession][c.professionZhuan].speed.chengzhang*c.Lv;
        p += fix("jacket");p += fix("shoulder");p += fix("breastplate");
        p += fix("leg");p += fix("shoes");p += fix("weapon");
        p += fix("necklace");p += fix("bracelet");p += fix("ring");
        p += fix("stone");p += fix("auxiliary");p += fix("earring");
        if(find("jacket")!==undefined&&find("jacket")===find("shoulder")&&
            find("breastplate")===find("shoulder")&&
            find("breastplate")===find("leg")&&
            find("shoes")===find("leg")){
            p *= 1.2;
        }
        if(find("necklace")!==undefined&&find("necklace")===find("bracelet")&&
            find("bracelet")===find("ring")){
            p *= 1.1;
        }
        if(find("stone")!==undefined&&find("stone")===find("auxiliary")&&
            find("auxiliary")===find("earring")){
            p *= 1.1;
        }
        c.speed = p<0?0:p;
        this.user.character[count] = c;
        return p;
    }

    /**
     * 金币换钻石 500000:1
     */
    gold2diamond(d){
        if(this.user.gold < d*500000){
            return false;
        }else{
            this.user.gold -= d*500000;
            this.user.diamond += d;
            return true;
        }
    }

    /**
     * 装备
     * count=角色index   index=该背包的index
     */
    zhuangbei(count,index){
        var c = this.user.character[count];
        if(typeof(c.backpack[index])===typeof("")){
            return 0;
        }
        var where = c.backpack[index].type;
        if(c[where].name!==undefined){
            c.backpack.push(c[where]);
        }
        c[where] = c.backpack[index];
        c.backpack.splice(index,1);
        this.user.character[count] = c;
        this.calculatePower(count);this.calculateSpeed(count);
    }

    /**
     * 下装备
     * count=角色index   where存str表示装备位置如："jacket"
     */
    xiazhuangbei(count,where){
        var c = this.user.character[count];
        if(c[where]){
            c.backpack.push(c[where]);
            c[where] = {};
        }
        this.user.character[count] = c;
        this.calculatePower(count);this.calculateSpeed(count);
    }

    /**
     * 检测升级
     */
    shengji(count){
        var c = this.user.character[count];
        if(c.exp >= c.Lv**2*100){
            c.exp -= c.Lv**2*100;
            c.Lv += 1;
        }
        this.user.character[count] = c;
        this.calculatePower(count);this.calculateSpeed(count);
    }

    /**
     * 随机器1  exp gold
     */
    r1(i,j){
        return Math.floor(Math.random()*i)+j;
    }

    /**
     * 随机器2  装备
     */
    r2(list,roll){
        var the = this.r1(100,1);
        if(the<=roll){
            the = this.r1(list.length,0);
            the = JSON.parse(JSON.stringify(list[the]));
            the.quality = this.r1(100,1);
            if(this.r1(100,1)>=95){
                var a = this.r1(100,1);
                if(a>=90){
                    the.qianghua = 4;
                }else if(a>=70){
                    the.qianghua = 3;
                }else if(a>=50){
                    the.qianghua = 2;
                }else if(a>=30){
                    the.qianghua = 1;
                }
            }
            if(this.r1(100,1)>=99){
                var b = this.r1(100,1);
                if(b>=90){
                    the.zengfu = 4;
                }else if(b>=70){
                    the.zengfu = 3;
                }else if(b>=50){
                    the.zengfu = 2;
                }else if(b>=30){
                    the.zengfu = 1;
                }
            }
            var c = this.r1(12,1);
            if(c===1){
                the.type = "jacket";
            }else if(c===2){
                the.type = "shoulder";
            }else if(c===3){
                the.type = "breastplate";
            }else if(c===4){
                the.type = "leg";
            }else if(c===5){
                the.type = "shoes";
            }else if(c===6){
                the.type = "weapon";
            }else if(c===7){
                the.type = "necklace";
            }else if(c===8){
                the.type = "bracelet";
            }else if(c===9){
                the.type = "ring";
            }else if(c===10){
                the.type = "stone";
            }else if(c===11){
                the.type = "auxiliary";
            }else if(c===12){
                the.type = "earring";
            }
            return the;
        }else{
            return {};
        }
    }

    /**
     * 练级
     * 要求 Lv>=* power>=* speed>=*
     * 最快 power=* speed=*
     * 耗时 *-1 s
     * 收益 exp:*-* gold:*-* 装备:list随机*%
     */
    lianji(lv,power,speed,maxPower,maxSpeed,time,exp1,exp2,gold1,gold2,list,random,count,x=1){
        lv = lv===0?-9999999:lv;
        power = power===0?-9999999:power;
        speed = speed===0?-9999999:speed;
        if(this.user.character[count].Lv < lv){
            return 0;
        }
        if(this.user.character[count].power < power){
            return 0;
        }
        if(this.user.character[count].speed < speed){
            return 0;
        }
        var c = this.user.character[count];
        var maxtime = (time-1)/2;
        time -= (c.power/maxPower)*maxtime;
        time -= (c.speed/maxSpeed)*maxtime;
        time = time<this.minTime?this.minTime:time;
        setTimeout(function(){
            var c = this.user.character[count];
            c.exp += this.r1(exp2-exp1+1,exp1);
            this.user.gold += this.r1(gold2-gold1+1,gold1);
            var w = this.r2(list,random);
            if(w.name!==undefined){
                c.backpack.push(w);
            }
            if(x===2){
                var w2 = this.r2(list,random);
                if(w2.name!==undefined){
                    c.backpack.push(w2);
                }
            }
            this.user.character[count] = c;
            this.shengji(count);
        }.bind(this), time*1000);
        return time;
    }

    /**
     * 练级1
     * 要求 Lv>=0 power>=0 speed>=0
     * 最快 power=20 speed=20
     * 耗时 5-1 s
     * 收益 exp:100-500 gold:100-200 装备:diji1随机30%
     */
    lianji1(count){
        return this.lianji(
            0,0,0,20,20,5,100,500,100,200,this.diji1,30,count
        );
    }

    /**
     * 练级2
     * 要求 Lv>=10 power>=0 speed>=0
     * 最快 power=100 speed=20
     * 耗时 11-1 s
     * 收益 exp:500-1000 gold:100-200 装备:diji1随机60%
     */
    lianji2(count){
        return this.lianji(
            10,0,0,100,20,11,500,1000,100,200,this.diji1,60,count
        );
    }

    /**
     * 练级3
     * 要求 Lv>=10 power>=100 speed>=0
     * 最快 power=150 speed=30
     * 耗时 11-1 s
     * 收益 exp:1000-5000 gold:100-200 装备:diji1随机80%
     */
    lianji3(count){
        return this.lianji(
            10,100,0,
            150,30,
            11,
            1000,5000,  100,200,  this.diji1,80,
            count
        );
    }

    /**
     * 练级4
     * 要求 Lv>=20 power>=150 speed>=0
     * 最快 power=200 speed=40
     * 耗时 11-1 s
     * 收益 exp:2000-8000 gold:200-400 装备:diji1随机100%
     */
    lianji4(count){
        return this.lianji(
            20,150,0,
            200,40,
            11,
            2000,8000,  200,400,  this.diji1,100,
            count
        );
    }

    /**
     * 练级5
     * 要求 Lv>=30 power>=200 speed>=0
     * 最快 power=500 speed=50
     * 耗时 11-1 s
     * 收益 exp:5000-10000 gold:200-400 装备:diji2随机20%
     */
    lianji5(count){
        return this.lianji(
            30,200,0,
            500,50,
            11,
            5000,10000,  200,400,  this.diji2,20,
            count
        );
    }

    /**
     * 练级6
     * 要求 Lv>=40 power>=200 speed>=0
     * 最快 power=800 speed=80
     * 耗时 11-1 s
     * 收益 exp:8000-15000 gold:200-500 装备:diji2随机50%
     */
    lianji6(count){
        return this.lianji(
            40,200,0,
            800,80,
            11,
            8000,15000,  200,500,  this.diji2,50,
            count
        );
    }

    /**
     * 练级7
     * 要求 Lv>=50 power>=200 speed>=0
     * 最快 power=1000 speed=200
     * 耗时 11-1 s
     * 收益 exp:20000-30000 gold:500-600 装备:diji2随机80%
     */
    lianji7(count){
        return this.lianji(
            50,200,0,
            1000,200,
            11,
            20000,30000,  500,600,  this.diji2,80,
            count
        );
    }

    /**
     * 练级8
     * 要求 Lv>=50 power>=500 speed>=50
     * 最快 power=1500 speed=500
     * 耗时 11-1 s
     * 收益 exp:20000-50000 gold:500-1000 装备:diji2随机100%
     */
    lianji8(count){
        return this.lianji(
            50,500,50,
            1500,500,
            11,
            20000,50000,  500,1000,  this.diji2,100,
            count
        );
    }

    /**
     * 练级9
     * 要求 Lv>=60 power>=500 speed>=0
     * 最快 power=2000 speed=500
     * 耗时 11-1 s
     * 收益 exp:50000-80000 gold:800-1000 装备:diji3随机40%
     */
    lianji9(count){
        return this.lianji(
            60,500,0,
            2000,500,
            11,
            50000,80000,  800,1000,  this.diji3,40,
            count
        );
    }

    /**
     * 练级10
     * 要求 Lv>=70 power>=600 speed>=0
     * 最快 power=5000 speed=500
     * 耗时 11-1 s
     * 收益 exp:80000-100000 gold:1000-2000 装备:diji3随机60%
     */
    lianji10(count){
        return this.lianji(
            70,600,0,
            5000,500,
            11,
            80000,100000,  1000,2000,  this.diji3,60,
            count
        );
    }

    /**
     * 练级11
     * 要求 Lv>=80 power>=600 speed>=0
     * 最快 power=10000 speed=1000
     * 耗时 11-1 s
     * 收益 exp:100000-110000 gold:1000-2000 装备:diji3随机100%
     */
    lianji11(count){
        return this.lianji(
            80,600,0,
            10000,1000,
            11,
            100000,110000,  1000,2000,  this.diji3,100,
            count
        );
    }

    /**
     * 练级12
     * 要求 Lv>=90 power>=600 speed>=0
     * 最快 power=20000 speed=1000
     * 耗时 11-1 s
     * 收益 exp:100000-150000 gold:1000-2000 装备:diji4随机50%
     */
    lianji12(count){
        return this.lianji(
            90,600,0,
            20000,1000,
            11,
            100000,150000,  1000,2000,  this.diji4,50,
            count
        );
    }

    /**
     * 练级13
     * 要求 Lv>=100 power>=600 speed>=0
     * 最快 power=50000 speed=1500
     * 耗时 11-1 s
     * 收益 exp:150000-300000 gold:1000-2000 装备:diji4随机100%
     */
    lianji13(count){
        return this.lianji(
            100,600,0,
            50000,1500,
            11,
            150000,300000,  1000,2000,  this.diji4,100,
            count
        );
    }

    /**
     * 练级14
     * 要求 Lv>=111 power>=5000 speed>=200
     * 最快 power=80000 speed=1800
     * 耗时 61-1 s
     * 收益 exp:500000-1000000 gold:2000-5000 装备:diji4随机100%X2
     */
    lianji14(count){
        return this.lianji(
            111,5000,200,
            80000,1800,
            61,
            500000,1000000,  2000,5000,  this.diji4,100,
            count,2
        );
    }

    /**
     * 练级15
     * 要求 Lv>=123 power>=5000 speed>=200
     * 最快 power=100000 speed=10000
     * 耗时 61-1 s
     * 收益 exp:1000000-2000000 gold:5000-100000 装备:diji4随机100%X2
     */
    lianji15(count){
        return this.lianji(
            123,5000,200,
            100000,10000,
            61,
            1000000,2000000,  5000,100000,  this.diji4,100,
            count,2
        );
    }

    /**
     * 深渊(消耗钻石*)
     * 要求 Lv>=* power>=* speed>=*
     * 最快 power=* speed=*
     * 耗时 *-1 s
     * 收益 exp:10-100 gold:10-100 装备:list随机*%X5
     * 额外可能收益 Lv:1随机*%X5
     */
    shenyuan(diamond,lv,power,speed,maxPower,maxSpeed,time,randomW,randomL,count){
        if(this.user.diamond < diamond){
            return 0;
        }
        this.user.diamond -= diamond;
        lv = lv===0?-9999999:lv;
        power = power===0?-9999999:power;
        speed = speed===0?-9999999:speed;
        if(this.user.character[count].Lv < lv){
            return 0;
        }
        if(this.user.character[count].power < power){
            return 0;
        }
        if(this.user.character[count].speed < speed){
            return 0;
        }
        var c = this.user.character[count];
        var maxtime = (time-1)/2;
        time -= (c.power/maxPower)*maxtime;
        time -= (c.speed/maxSpeed)*maxtime;
        time = time<1?1:time;
        setTimeout(function(){
            var c = this.user.character[count];
            c.exp += this.r1(91,10);
            this.user.gold += this.r1(91,10);
            var w = this.r2(this.equipment,randomW);
            if(w.name!==undefined){
                c.backpack.push(w);
            }
            w = this.r2(this.equipment,randomW);
            if(w.name!==undefined){
                c.backpack.push(w);
            }
            w = this.r2(this.equipment,randomW);
            if(w.name!==undefined){
                c.backpack.push(w);
            }
            w = this.r2(this.equipment,randomW);
            if(w.name!==undefined){
                c.backpack.push(w);
            }
            w = this.r2(this.equipment,randomW);
            if(w.name!==undefined){
                c.backpack.push(w);
            }

            var l = this.r1(100,1);
            if(l<=randomL){
                c.Lv += 1;
            }
            l = this.r1(100,1);
            if(l<=randomL){
                c.Lv += 1;
            }
            l = this.r1(100,1);
            if(l<=randomL){
                c.Lv += 1;
            }
            l = this.r1(100,1);
            if(l<=randomL){
                c.Lv += 1;
            }
            l = this.r1(100,1);
            if(l<=randomL){
                c.Lv += 1;
            }
            this.user.character[count] = c;
            this.shengji(count);
        }.bind(this), time*1000);
        return time;
    }

    /**
     * 深渊1(消耗钻石1)
     * 要求 Lv>=150 power>=0 speed>=0
     * 最快 power=200000 speed=5000
     * 耗时 61-1 s
     * 收益 exp:10-100 gold:10-100 装备:equipment随机1%X5
     * 额外可能收益 Lv:1随机1%X5
     */
    shenyuan1(count){
        return this.shenyuan(
            1,150,0,0,
            200000,5000,
            61,
            1,1,
            count
        );
    }

    /**
     * 深渊2(消耗钻石1)
     * 要求 Lv>=150 power>=10000 speed>=5000
     * 最快 power=500000 speed=10000
     * 耗时 101-1 s
     * 收益 exp:10-100 gold:10-100 装备:equipment随机2%X5
     * 额外可能收益 Lv:1随机10%X5
     */
    shenyuan2(count){
        return this.shenyuan(
            1,150,10000,5000,
            500000,10000,
            101,
            2,10,
            count
        );
    }

    /**
     * 深渊3(消耗钻石2)
     * 要求 Lv>=150 power>=10000 speed>=5000
     * 最快 power=500000 speed=10000
     * 耗时 101-1 s
     * 收益 exp:10-100 gold:10-100 装备:equipment随机4%X5
     * 额外可能收益 Lv:1随机10%X5
     */
    shenyuan3(count){
        return this.shenyuan(
            2,150,10000,5000,
            500000,10000,
            101,
            4,10,
            count
        );
    }

    /**
     * 深渊4(消耗钻石3)
     * 要求 Lv>=150 power>=10000 speed>=5000
     * 最快 power=500000 speed=10000
     * 耗时 101-1 s
     * 收益 exp:10-100 gold:10-100 装备:equipment随机6%X5
     * 额外可能收益 Lv:1随机20%X5
     */
    shenyuan4(count){
        return this.shenyuan(
            3,150,10000,5000,
            500000,10000,
            101,
            6,20,
            count
        );
    }

    /**
     * 深渊5(消耗钻石10)
     * 要求 Lv>=150 power>=8888888 speed>=888888
     * 最快 power=88888888 speed=88888888
     * 耗时 101-1 s
     * 收益 exp:10-100 gold:10-100 装备:equipment随机50%X5
     * 额外可能收益 Lv:1随机99%X5
     */
    shenyuan5(count){
        return this.shenyuan(
            10,150,8888888,888888,
            88888888,88888888,
            101,
            50,99,
            count
        );
    }

    /**
     * 探险
     * 获得的奖励取决于你的power(8-88888888888 每10的倍数 概率提升)
     * 
     * 可能获得：
     * gold diamond Lv exp
     * 强化/增幅保护卷
     * (+7/+10/+11/+12/+13)(黑铁/黄金/翡翠/钻石)强化/增幅卷
     * 装备品级调整箱(30-100/50-100/70-100/90-100)
     */
    tanxian(count){
        var c = this.user.character[count];
        var p = c.power;
        function juanzi(){
            var num = Math.floor(Math.random()*100)+1;
            var str = "";
            if(num>95){
                str = "13";
            }else if(num>90){
                str = "12";
            }else if(num>80){
                str = "11";
            }else if(num>50){
                str = "10";
            }else{
                str = "7";
            }

            num = Math.floor(Math.random()*100)+1;
            if(num>95){
                str += " 钻石 ";
            }else if(num>90){
                str += " 翡翠 ";
            }else if(num>80){
                str += " 黄金 ";
            }else{
                str += " 黑铁 ";
            }

            num = Math.floor(Math.random()*100)+1;
            if(num>90){
                str += "增幅卷";
            }else{
                str += "强化卷";
            }
            c.backpack.push(str);
        }

        function tiaozheng(){
            var num = Math.floor(Math.random()*100)+1;
            var str = "";
            if(num>99){
                str = "90-100装备品级调整箱";
            }else if(num>95){
                str = "70-100装备品级调整箱";
            }else if(num>90){
                str = "50-100装备品级调整箱";
            }else{
                str = "30-100装备品级调整箱";
            }
            c.backpack.push(str);
        }

        if(p>88888888888){//**********************************
            if(this.r1(100,1)>90){
                this.user.gold += this.r1(88888888,1);
            }
            if(this.r1(100,1)>95){
                this.user.diamond += this.r1(200,1);
            }
            if(this.r1(100,1)>80){
                c.Lv += 10;
            }
            if(this.r1(100,1)>80){
                c.exp += 88888888;
            }
            if(this.r1(100,1)>80){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>80){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>80){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>90){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>90){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>90){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>20){
                juanzi();
            }
            if(this.r1(100,1)>20){
                juanzi();
            }
            if(this.r1(100,1)>20){
                juanzi();
            }
            if(this.r1(100,1)>10){
                tiaozheng();
            }
            if(this.r1(100,1)>10){
                tiaozheng();
            }
            if(this.r1(100,1)>10){
                tiaozheng();
            }
        }else if(p>8888888888){//**********************************
            if(this.r1(100,1)>60){
                this.user.gold += this.r1(8888888,1);
            }
            if(this.r1(100,1)>80){
                this.user.diamond += this.r1(20,1);
            }
            if(this.r1(100,1)>70){
                c.Lv += 5;
            }
            if(this.r1(100,1)>70){
                c.exp += 44444444;
            }
            if(this.r1(100,1)>92){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>92){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>92){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>98){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>98){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>98){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>30){
                juanzi();
            }
            if(this.r1(100,1)>30){
                juanzi();
            }
            if(this.r1(100,1)>30){
                juanzi();
            }
            if(this.r1(100,1)>20){
                tiaozheng();
            }
            if(this.r1(100,1)>20){
                tiaozheng();
            }
            if(this.r1(100,1)>20){
                tiaozheng();
            }
        }else if(p>888888888){//**********************************
            if(this.r1(100,1)>70){
                this.user.gold += this.r1(8888888,1);
            }
            if(this.r1(100,1)>90){
                this.user.diamond += this.r1(20,1);
            }
            if(this.r1(100,1)>80){
                c.Lv += 5;
            }
            if(this.r1(100,1)>80){
                c.exp += 44444444;
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>40){
                juanzi();
            }
            if(this.r1(100,1)>40){
                juanzi();
            }
            if(this.r1(100,1)>40){
                juanzi();
            }
            if(this.r1(100,1)>30){
                tiaozheng();
            }
            if(this.r1(100,1)>30){
                tiaozheng();
            }
            if(this.r1(100,1)>30){
                tiaozheng();
            }
        }else if(p>88888888){//**********************************
            if(this.r1(100,1)>80){
                this.user.gold += this.r1(8888888,1);
            }
            if(this.r1(100,1)>95){
                this.user.diamond += this.r1(20,1);
            }
            if(this.r1(100,1)>90){
                c.Lv += 5;
            }
            if(this.r1(100,1)>90){
                c.exp += 44444444;
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>50){
                juanzi();
            }
            if(this.r1(100,1)>50){
                juanzi();
            }
            if(this.r1(100,1)>50){
                juanzi();
            }
            if(this.r1(100,1)>40){
                tiaozheng();
            }
            if(this.r1(100,1)>40){
                tiaozheng();
            }
            if(this.r1(100,1)>40){
                tiaozheng();
            }
        }else if(p>8888888){//**********************************
            if(this.r1(100,1)>90){
                this.user.gold += this.r1(8888888,1);
            }
            if(this.r1(100,1)>95){
                this.user.diamond += this.r1(20,1);
            }
            if(this.r1(100,1)>95){
                c.Lv += 5;
            }
            if(this.r1(100,1)>95){
                c.exp += 44444444;
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>60){
                juanzi();
            }
            if(this.r1(100,1)>60){
                juanzi();
            }
            if(this.r1(100,1)>60){
                juanzi();
            }
            if(this.r1(100,1)>50){
                tiaozheng();
            }
            if(this.r1(100,1)>50){
                tiaozheng();
            }
            if(this.r1(100,1)>50){
                tiaozheng();
            }
        }else if(p>888888){//**********************************
            if(this.r1(100,1)>60){
                this.user.gold += this.r1(888888,1);
            }
            if(this.r1(100,1)>85){
                this.user.diamond += this.r1(2,1);
            }
            if(this.r1(100,1)>60){
                c.Lv += 1;
            }
            if(this.r1(100,1)>50){
                c.exp += 8888888;
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>60){
                juanzi();
            }
            if(this.r1(100,1)>60){
                juanzi();
            }
            if(this.r1(100,1)>50){
                tiaozheng();
            }
            if(this.r1(100,1)>50){
                tiaozheng();
            }
        }else if(p>88888){//**********************************
            if(this.r1(100,1)>70){
                this.user.gold += this.r1(888888,1);
            }
            if(this.r1(100,1)>85){
                this.user.diamond += this.r1(2,1);
            }
            if(this.r1(100,1)>70){
                c.Lv += 1;
            }
            if(this.r1(100,1)>70){
                c.exp += 8888888;
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>95){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>70){
                juanzi();
            }
            if(this.r1(100,1)>70){
                juanzi();
            }
            if(this.r1(100,1)>60){
                tiaozheng();
            }
            if(this.r1(100,1)>60){
                tiaozheng();
            }
        }else if(p>8888){//**********************************
            if(this.r1(100,1)>80){
                this.user.gold += this.r1(888888,1);
            }
            if(this.r1(100,1)>90){
                this.user.diamond += this.r1(2,1);
            }
            if(this.r1(100,1)>70){
                c.Lv += 1;
            }
            if(this.r1(100,1)>90){
                c.exp += 8888888;
            }
            if(this.r1(100,1)>96){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>96){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>80){
                juanzi();
            }
            if(this.r1(100,1)>80){
                juanzi();
            }
            if(this.r1(100,1)>70){
                tiaozheng();
            }
            if(this.r1(100,1)>70){
                tiaozheng();
            }
        }else if(p>888){//**********************************
            if(this.r1(100,1)>90){
                this.user.gold += this.r1(888888,1);
            }
            if(this.r1(100,1)>95){
                this.user.diamond += this.r1(2,1);
            }
            if(this.r1(100,1)>90){
                c.Lv += 1;
            }
            if(this.r1(100,1)>95){
                c.exp += 888888;
            }
            if(this.r1(100,1)>97){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>97){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>90){
                juanzi();
            }
            if(this.r1(100,1)>90){
                juanzi();
            }
            if(this.r1(100,1)>80){
                tiaozheng();
            }
            if(this.r1(100,1)>80){
                tiaozheng();
            }
        }else if(p>88){//**********************************
            if(this.r1(100,1)>90){
                this.user.gold += this.r1(444444,1);
            }
            if(this.r1(100,1)>95){
                this.user.diamond += 1;
            }
            if(this.r1(100,1)>95){
                c.Lv += 1;
            }
            if(this.r1(100,1)>98){
                c.exp += 888888;
            }
            if(this.r1(100,1)>98){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>95){
                juanzi();
            }
            if(this.r1(100,1)>95){
                juanzi();
            }
            if(this.r1(100,1)>90){
                tiaozheng();
            }
            if(this.r1(100,1)>90){
                tiaozheng();
            }
        }else if(p>8){//**********************************
            if(this.r1(100,1)>95){
                this.user.gold += this.r1(444444,1);
            }
            if(this.r1(100,1)>98){
                this.user.diamond += 1;
            }
            if(this.r1(100,1)>98){
                c.Lv += 1;
            }
            if(this.r1(100,1)>99){
                c.exp += 888888;
            }
            if(this.r1(100,1)>99){
                c.backpack.push("强化保护卷");
            }
            if(this.r1(100,1)>99){
                c.backpack.push("增幅保护卷");
            }
            if(this.r1(100,1)>98){
                juanzi();
            }
            if(this.r1(100,1)>98){
                juanzi();
            }
            if(this.r1(100,1)>95){
                tiaozheng();
            }
            if(this.r1(100,1)>95){
                tiaozheng();
            }
        }
        this.user.character[count] = c;
        this.shengji(count);
    }

    /**
     * 计算价格
     */
    jisuan(the){
        if(typeof(the)===typeof({})){
            return the.sell*(the.quality/100);
        }else if(the[the.length-1]==="卷"&&the[the.length-2]==="护"){
            if(the[0]==="强"){
                return 1000000;
            }else if(the[0]==="增"){
                return 5000000;
            }
        }else if(the[the.length-1]==="箱"){
            if(the[0]==="3"){
                return 10000;
            }else if(the[0]==="5"){
                return 100000;
            }else if(the[0]==="7"){
                return 500000;
            }else if(the[0]==="9"){
                return 1000000;
            }
        }else if(the[the.length-1]==="卷"&&the[the.length-2]!=="护"){
            the = the.split(" ");
            var g = 0;
            if(the[0]==="7"){
                g = 1;
            }else if(the[0]==="10"){
                g = 5;
            }else if(the[0]==="11"){
                g = 20;
            }else if(the[0]==="12"){
                g = 100;
            }else if(the[0]==="13"){
                g = 1000;
            }
            if(the[1]==="黑铁"){
                g *= 100;
            }else if(the[1]==="黄金"){
                g *= 500;
            }else if(the[1]==="翡翠"){
                g *= 1000;
            }else if(the[1]==="钻石"){
                g *= 5000;
            }
            if(the[2]==="强化卷"){
                g *= 100;
            }else if(the[2]==="增幅卷"){
                g *= 500;
            }
            return g;
        }
        return 0;
    }

    /**
     * 出售
     * 角色count 背包index
     */
    sell(count,index){
        var c = this.user.character[count];
        var the = c.backpack[index];
        c.backpack.splice(index,1);
        this.user.gold += this.jisuan(the);
        this.user.character[count] = c;
    }

    /**
     * 全部出售
     * 角色count
     * filter=[] 存啥啥不卖 默认为空
     */
    sellAll(count){
        var c = this.user.character[count];
        var num = c.backpack.length;
        for(var i=0;i<num;i++){
            this.sell(count,0);
        }
    }

    /**
     * 使用装备品级调整箱 或者 强化增幅卷
     * 角色count 背包index 身上装备where
     * 强化增幅卷: 黑铁-1%; 黄金-30%; 翡翠-70%; 钻石-90%;
     */
    useXZ(count,index,where){
        var c = this.user.character[count];
        var the = c.backpack[index];
        if(the[the.length-1]==="箱"){
            c.backpack.splice(index,1);
            if(the[0]==="3"){
                c[where].quality = this.r1(71,30);
            }else if(the[0]==="5"){
                c[where].quality = this.r1(51,50);
            }else if(the[0]==="7"){
                c[where].quality = this.r1(31,70);
            }else if(the[0]==="9"){
                c[where].quality = this.r1(11,90);
            }
        }else if(the[the.length-1]==="卷"&&the[the.length-2]!=="护"){
            c.backpack.splice(index,1);
            the = the.split(" ");
            var chengle = false;
            if(the[1]==="黑铁"){
                if(this.r1(100,1)>99){
                    chengle = true;
                }
            }else if(the[1]==="黄金"){
                if(this.r1(100,1)>70){
                    chengle = true;
                }
            }else if(the[1]==="翡翠"){
                if(this.r1(100,1)>30){
                    chengle = true;
                }
            }else if(the[1]==="钻石"){
                if(this.r1(100,1)>10){
                    chengle = true;
                }
            }
            if(the[2]==="强化卷"&&chengle){
                if(the[0]==="7"){
                    c[where].qianghua = 7;
                }else if(the[0]==="10"){
                    c[where].qianghua = 10;
                }else if(the[0]==="11"){
                    c[where].qianghua = 11;
                }else if(the[0]==="12"){
                    c[where].qianghua = 12;
                }else if(the[0]==="13"){
                    c[where].qianghua = 13;
                }
            }else if(the[2]==="增幅卷"&&chengle){
                if(the[0]==="7"){
                    c[where].zengfu = 7;
                }else if(the[0]==="10"){
                    c[where].zengfu = 10;
                }else if(the[0]==="11"){
                    c[where].zengfu = 11;
                }else if(the[0]==="12"){
                    c[where].zengfu = 12;
                }else if(the[0]==="13"){
                    c[where].zengfu = 13;
                }
            }
        }
        this.user.character[count] = c;
        this.calculatePower(count);this.calculateSpeed(count);
    }

    /**
     * 强化(花费=品质*power*(当前强化等级+1)+100000)金币
     * 角色count 身上装备where
     * +12 => +13 以上 如果背包内没有保护卷,失败装备消失，反之归零
     */
    qiang(count,where){
        var c = this.user.character[count];
        if(!c[where].name){
            return 0;
        }
        var huafei = c[where].power*(c[where].quality/100)*(c[where].qianghua+1)+100000;
        if(this.user.gold<huafei){
            return 0;
        }
        this.user.gold -= huafei;
        var old = c[where].qianghua;
        var chengle = false;
        if(old<5){
            if(this.r1(100,1)>40){
                c[where].qianghua++;
                chengle = true;
            }
        }else if(old===5){
            if(this.r1(100,1)>50){
                c[where].qianghua++;
                chengle = true;
            }
        }else if(old===6){
            if(this.r1(100,1)>60){
                c[where].qianghua++;
                chengle = true;
            }
        }else if(old===7){
            if(this.r1(100,1)>65){
                c[where].qianghua++;
                chengle = true;
            }
        }else if(old===8){
            if(this.r1(100,1)>70){
                c[where].qianghua++;
                chengle = true;
            }
        }else if(old===9){
            if(this.r1(100,1)>70){
                c[where].qianghua++;
                chengle = true;
            }else{
                c[where].qianghua -= 2;
            }
        }else if(old===10){
            if(this.r1(100,1)>75){
                c[where].qianghua++;
                chengle = true;
            }else{
                c[where].qianghua -= 2;
            }
        }else if(old===11){
            if(this.r1(100,1)>80){
                c[where].qianghua++;
                chengle = true;
            }else{
                c[where].qianghua -= 3;
            }
        }else if(old===12){
            if(this.r1(100,1)>85){
                c[where].qianghua++;
                chengle = true;
            }else{
                var the = c.backpack.indexOf("强化保护卷");
                if(the === -1){
                    c[where] = {};
                }else{
                    c.backpack.splice(the,1);
                    c[where].qianghua = 0;
                }
            }
        }else if(old===13){
            if(this.r1(100,1)>70){
                c[where].qianghua++;
                chengle = true;
            }else{
                var the = c.backpack.indexOf("强化保护卷");
                if(the === -1){
                    c[where] = {};
                }else{
                    c.backpack.splice(the,1);
                    c[where].qianghua = 0;
                }
            }
        }else{
            if(this.r1(100,1)>80){
                c[where].qianghua++;
                chengle = true;
            }else{
                var the = c.backpack.indexOf("强化保护卷");
                if(the === -1){
                    c[where] = {};
                }else{
                    c.backpack.splice(the,1);
                    c[where].qianghua = 0;
                }
            }
        }

        this.user.character[count] = c;
        this.calculatePower(count);this.calculateSpeed(count);
        return chengle;
    }

    /**
     * 增幅(花费=品质*power*(当前增幅等级+1)/50000+0.5)钻石
     * 角色count 身上装备where
     * +12 => +13 以上 如果背包内没有保护卷,失败装备消失，反之归零
     */
    zeng(count,where){
        var c = this.user.character[count];
        if(!c[where].name){
            return 0;
        }
        var huafei = c[where].power*(c[where].quality/100)*(c[where].zengfu+1)/50000+0.5;
        if(this.user.diamond<huafei){
            return 0;
        }
        this.user.diamond -= huafei;
        var old = c[where].zengfu;
        var chengle = false;
        if(old<5){
            if(this.r1(100,1)>10){
                c[where].zengfu++;
                chengle = true;
            }
        }else if(old===5){
            if(this.r1(100,1)>20){
                c[where].zengfu++;
                chengle = true;
            }
        }else if(old===6){
            if(this.r1(100,1)>30){
                c[where].zengfu++;
                chengle = true;
            }
        }else if(old===7){
            if(this.r1(100,1)>40){
                c[where].zengfu++;
                chengle = true;
            }
        }else if(old===8){
            if(this.r1(100,1)>50){
                c[where].zengfu++;
                chengle = true;
            }
        }else if(old===9){
            if(this.r1(100,1)>60){
                c[where].zengfu++;
                chengle = true;
            }else{
                c[where].zengfu -= 2;
            }
        }else if(old===10){
            if(this.r1(100,1)>70){
                c[where].zengfu++;
                chengle = true;
            }else{
                c[where].zengfu -= 2;
            }
        }else if(old===11){
            if(this.r1(100,1)>90){
                c[where].zengfu++;
                chengle = true;
            }else{
                c[where].zengfu -= 3;
            }
        }else if(old===12){
            if(this.r1(100,1)>85){
                c[where].zengfu++;
                chengle = true;
            }else{
                var the = c.backpack.indexOf("增幅保护卷");
                if(the === -1){
                    c[where] = {};
                }else{
                    c.backpack.splice(the,1);
                    c[where].zengfu = 0;
                }
            }
        }else if(old===13){
            if(this.r1(100,1)>50){
                c[where].zengfu++;
                chengle = true;
            }else{
                var the = c.backpack.indexOf("增幅保护卷");
                if(the === -1){
                    c[where] = {};
                }else{
                    c.backpack.splice(the,1);
                    c[where].zengfu = 0;
                }
            }
        }else{
            if(this.r1(100,1)>60){
                c[where].zengfu++;
                chengle = true;
            }else{
                var the = c.backpack.indexOf("增幅保护卷");
                if(the === -1){
                    c[where] = {};
                }else{
                    c.backpack.splice(the,1);
                    c[where].zengfu = 0;
                }
            }
        }
        this.user.character[count] = c;
        this.calculatePower(count);this.calculateSpeed(count);
        return chengle;
    }

    /**
     * 删除角色
     * count
     */
    DelC(count){
        this.user.character.splice(count,1);
    }

    /**
     * 转职
     * 初始 => 一转  要求:Lv>=10
     * 一转 => 二转  要求:Lv>=30 power>=500
     * 二转 => 三转  要求:Lv>=60 power>=2200
     * 三转 => 四转  要求:Lv>=100 power>=88888
     * 四转 => 五转  要求:Lv>=150 power>=222222
     * 五转 => 神  要求:Lv>=150 power>=1888888888
     */
    zhuanzhi(count){
        var c = this.user.character[count];
        if(c.professionZhuan==="chushi"){
            if(c.Lv>=10){
                c.professionZhuan = "yizhuan";
            }
        }else if(c.professionZhuan==="yizhuan"){
            if(c.Lv>=30&&c.power>=500){
                c.professionZhuan = "erzhuan";
            }
        }else if(c.professionZhuan==="erzhuan"){
            if(c.Lv>=60&&c.power>=2200){
                c.professionZhuan = "sanzhuan";
            }
        }else if(c.professionZhuan==="sanzhuan"){
            if(c.Lv>=100&&c.power>=88888){
                c.professionZhuan = "sizhuan";
            }
        }else if(c.professionZhuan==="sizhuan"){
            if(c.Lv>=150&&c.power>=222222){
                c.professionZhuan = "wuzhuan";
            }
        }else if(c.professionZhuan==="wuzhuan"){
            if(c.Lv>=150&&c.power>=1888888888){
                c.professionZhuan = "shen";
            }
        }
        this.user.character[count] = c;
        this.calculatePower(count);this.calculateSpeed(count);
    }

    maiLv(count){
        var c = this.user.character[count];
        if(this.user.diamond>=1){
            this.user.diamond -= 1;
            c.Lv += 1;
            this.calculatePower(count);this.calculateSpeed(count);
        }
    }
}

export default Man;
