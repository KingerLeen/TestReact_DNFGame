import React from 'react';
import ReactDOM from 'react-dom';
import Man from './func';

var contrlMan = new Man();
var t = 0;
var zidong = false;
var mainUrl = "http://127.0.0.1:2333";
var tanxianCD = 5; //探险的CD，可自行修改，默认10秒

function Z(props){
    return(
    <div>
    <span style={{fontSize:"12px"}}>质量:{props.quality}%</span>
    <div class="am-progress">
    <div class={props.color==="red"?"am-progress-bar am-progress-bar-warning":props.color==="danger"?"am-progress-bar am-progress-bar-danger":"am-progress-bar"} style={{width:props.quality+"%"}}>
    </div></div></div>
    );
}

function MainZ(props){
    return(
        <React.Fragment>
        {props.where.quality?(
        <div style={{borderRadius:"10px",float:props.kao,width:"24%",height:"140px",fontSize:"12px",border:props.now===props.where.type?"4px solid #00FF00": props.c==="f"?"2px solid #000066":props.c==="s"?"2px solid #660000":props.c==="w"?"2px solid #909090":"2px solid #FF0099"}}>
        <div style={{width:"85%",height:"95%",margin:"0 auto"}}>
        <div style={{float:"left",width:"100%",height:"100px"}}>
            <span style={{fontSize:"15px"}}>
                {
                    props.where.type==="jacket"?props.where.name+" 上衣":
                    props.where.type==="shoulder"?props.where.name+" 护肩":
                    props.where.type==="breastplate"?props.where.name+" 胸甲":
                    props.where.type==="leg"?props.where.name+" 护腿":
                    props.where.type==="shoes"?props.where.name+" 鞋":
                    props.where.type==="weapon"?props.where.name+" 武器":
                    props.where.type==="necklace"?props.where.name+" 项链":
                    props.where.type==="bracelet"?props.where.name+" 手镯":
                    props.where.type==="ring"?props.where.name+" 戒指":
                    props.where.type==="stone"?props.where.name+" 魔法石":
                    props.where.type==="auxiliary"?props.where.name+" 辅助装备":
                    props.where.type==="earring"?props.where.name+" 耳环":"未知"
                }</span><br />
            &nbsp;&nbsp;&nbsp;{"战斗力: "+props.where.power}<br />
            &nbsp;&nbsp;&nbsp;{"速度: "+props.where.speed}<br />
            &nbsp;&nbsp;&nbsp;{"强化: "+props.where.qianghua}<br />
            &nbsp;&nbsp;&nbsp;{"增幅: "+props.where.zengfu}<br />
        </div>
        <div style={{float:"left",width:"100%",height:"20px"}}>
        <Z
            quality={props.where.quality}
            color={
                props.where.quality<50?"":
                props.where.quality<90?
                "red":"danger"
            }
        />
        </div></div></div>):<React.Fragment />}
        </React.Fragment>
    );
}

class All extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            user: {
                user: "请登录",
                passwd: "请登录",
                gold: "请登录",
                diamond: "请登录",
                character: []
            },
            count: "",
            where: "",
            createMan: false,
            time:new Date(),
            iszi:false,
            zidongnum: 0
        }
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.setS = this.setS.bind(this);
        this.createMan = this.createMan.bind(this);
        this.DelMan = this.DelMan.bind(this);
        this.save = this.save.bind(this);
        this.getS = this.getS.bind(this);
        this.use = this.use.bind(this);
        this.sellAll = this.sellAll.bind(this);
        this.setWhere = this.setWhere.bind(this);
        this.tanxian = this.tanxian.bind(this);
        this.qiang = this.qiang.bind(this);
        this.zeng = this.zeng.bind(this);
        this.zuanshi = this.zuanshi.bind(this);
        this.zuanshi2 = this.zuanshi2.bind(this);
        this.zuanshi3 = this.zuanshi3.bind(this);
        this.zuanshi4 = this.zuanshi4.bind(this);
        this.lian1 = this.lian1.bind(this);
        this.lian2 = this.lian2.bind(this);
        this.lian3 = this.lian3.bind(this);
        this.lian4 = this.lian4.bind(this);
        this.lian5 = this.lian5.bind(this);
        this.lian6 = this.lian6.bind(this);
        this.lian7 = this.lian7.bind(this);
        this.lian8 = this.lian8.bind(this);
        this.lian9 = this.lian9.bind(this);
        this.lian10 = this.lian10.bind(this);
        this.lian11 = this.lian11.bind(this);
        this.lian12 = this.lian12.bind(this);
        this.lian13 = this.lian13.bind(this);
        this.lian14 = this.lian14.bind(this);
        this.lian15 = this.lian15.bind(this);
        this.zidonglian15 = this.zidonglian15.bind(this);
        this.zi = this.zi.bind(this);
        this.zi_name = this.zi_name.bind(this);

        this.shenyuan1 = this.shenyuan1.bind(this);
        this.shenyuan2 = this.shenyuan2.bind(this);
        this.shenyuan3 = this.shenyuan3.bind(this);
        this.shenyuan4 = this.shenyuan4.bind(this);
        this.shenyuan5 = this.shenyuan5.bind(this);
        
        this.zhuanzhi = this.zhuanzhi.bind(this);
        this.maiLv = this.maiLv.bind(this);
        this.zidongzhuangbei = this.zidongzhuangbei.bind(this);
        this.paixu = this.paixu.bind(this);
        this.selldiji = this.selldiji.bind(this);
        this.sellW = this.sellW.bind(this);
        this.sellB = this.sellB.bind(this);
        this.sellQ = this.sellQ.bind(this);
        this.sellZ = this.sellZ.bind(this);
        this.sellT = this.sellT.bind(this);
        this.best = this.best.bind(this);
    }
    paixu(){
        var user = contrlMan.getUser();
        user = user.character[this.state.count];
        user.backpack.sort((x,y)=>contrlMan.jisuan(x)>contrlMan.jisuan(y)?-1:1);
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    selldiji(){
        var user = contrlMan.getUser();
        user = user.character[this.state.count];
        var num = user.backpack.length;
        var n = 0;
        for(var i=0; i<num; i++){
            var the = user.backpack[n];
            if(typeof(the)===typeof("")){
                if(the[the.length-1]==="箱"&&the[0]==="3"){
                    contrlMan.sell(this.state.count,n);continue;
                }else if(the[the.length-1]==="卷"&&the[the.length-2]!=="护"){
                    the = the.split(" ");
                    if(the[0]==="7"||the[1]==="黑铁"){
                        contrlMan.sell(this.state.count,n);continue;
                    }
                }
            }n++;
        }
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    best(){
        this.paixu();
        this.zidongzhuangbei();
        this.zidongzhuangbei();
        this.zidongzhuangbei();
        this.sellW();
        this.sellB();
        this.sellZ();
        this.sellQ();
        this.sellT();
        this.paixu();
    }
    sellZ(){
        var user = contrlMan.getUser();
        user = user.character[this.state.count];
        var num = user.backpack.length;
        var n = 0;
        for(var i=0; i<num; i++){
            var the = user.backpack[n];
            if(typeof(the)===typeof("")){
				if(user.power < 88888888888){
                    if(the[the.length-1]==="卷"&&the[the.length-2]==="幅"){
                        the = the.split(" ");
                        if(the[0]==="7"||the[0]==="10"||the[0]==="11"||the[1]==="黑铁"||the[1]==="黄金"){
                            contrlMan.sell(this.state.count,n);continue;
                        }
                    }
                }else if(user.power < 3888888888888){
                    if(the[the.length-1]==="卷"&&the[the.length-2]==="幅"){
                        the = the.split(" ");
                        if(the[0]==="7"||the[0]==="10"||the[0]==="11"||the[0]==="12"||the[1]==="黑铁"||the[1]==="黄金"){
                            contrlMan.sell(this.state.count,n);continue;
                        }
                    }
                }else{
                    if(the[the.length-1]==="卷"&&the[the.length-2]==="幅"){
                        the = the.split(" ");
                        if(the[0]==="7"||the[0]==="10"||the[0]==="11"||the[0]==="12"||the[1]==="黑铁"||the[1]==="黄金"||the[1]==="翡翠"){
                            contrlMan.sell(this.state.count,n);continue;
                        }
                    }
                }

            }n++;
        }
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    sellT(){
        var user = contrlMan.getUser();
        user = user.character[this.state.count];
        var num = user.backpack.length;
        var n = 0;
        var index = 0;
        for(var i=0; i<num; i++){
            var the = user.backpack[n];
            if(typeof(the)===typeof("")){
                if(the[the.length-1]==="箱"&&(the[0]==="3"||the[0]==="5"||the[0]==="7")){
                    contrlMan.sell(this.state.count,n);continue;
                }else if(the[the.length-1]==="箱"&&(the[0]==="9")){
                    index++;
                    if (index>2){
                        contrlMan.sell(this.state.count,n);continue;
                    }
                }
            }n++;
        }
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    sellQ(){
        var user = contrlMan.getUser();
        user = user.character[this.state.count];
        var num = user.backpack.length;
        var n = 0;
        for(var i=0; i<num; i++){
            var the = user.backpack[n];
            if(typeof(the)===typeof("")){
				if(user.power < 88888888888){
                    if(the[the.length-1]==="卷"&&the[the.length-2]==="化"){
                        the = the.split(" ");
                        if(the[0]==="7"||the[0]==="10"||the[0]==="11"||the[1]==="黑铁"||the[1]==="黄金"){
                            contrlMan.sell(this.state.count,n);continue;
                        }
                    }
                }else if(user.power < 3888888888888){
                    if(the[the.length-1]==="卷"&&the[the.length-2]==="化"){
                        the = the.split(" ");
                        if(the[0]==="7"||the[0]==="10"||the[0]==="11"||the[0]==="12"||the[1]==="黑铁"||the[1]==="黄金"){
                            contrlMan.sell(this.state.count,n);continue;
                        }
                    }
                }else{
                    if(the[the.length-1]==="卷"&&the[the.length-2]==="化"){
                        the = the.split(" ");
                        if(the[0]==="7"||the[0]==="10"||the[0]==="11"||the[0]==="12"||the[1]==="黑铁"||the[1]==="黄金"||the[1]==="翡翠"){
                            contrlMan.sell(this.state.count,n);continue;
                        }
                    }
                }
            }n++;
        }
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    sellB(){
        var user = contrlMan.getUser();
        user = user.character[this.state.count];
        var num = user.backpack.length;
        var n = 0;
        var qh = 0;
        var zf = 0;
        for(var i=0; i<num; i++){
            var the = user.backpack[n];
            if(typeof(the)===typeof("")){
                if(the[the.length-1]==="卷"&&the[the.length-2]==="护"&&the[0]==="强"){
                    if(qh!==0){contrlMan.sell(this.state.count,n);continue;}else{qh=1;}
                }
                if(the[the.length-1]==="卷"&&the[the.length-2]==="护"&&the[0]==="增"){
                    if(zf!==0){contrlMan.sell(this.state.count,n);zf=1;continue;}else{zf=1;}
                }
            }n++;
        }
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    sellW(){
        var user = contrlMan.getUser();
        user = user.character[this.state.count];
        var num = user.backpack.length;
        var n = 0;
        for(var i=0; i<num; i++){
            if(typeof(user.backpack[n])===typeof({})){
                contrlMan.sell(this.state.count,n);continue;
            }n++;
        }
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    zidongzhuangbei(){
        var user = contrlMan.getUser();
        user = user.character[this.state.count];
        var ol = 0;
        var ne = 0;
        var num = user.backpack.length;
        var kazhu = 0;
        for(var i=0; i<num; i++){
            ol = Number.parseInt(user.power);
            if(typeof(user.backpack[kazhu])===typeof("")){
                kazhu++;continue;
            }
            contrlMan.zhuangbei(this.state.count,kazhu);
            ne = Number.parseInt(user.power);
            if(ol>ne){
                contrlMan.zhuangbei(this.state.count,user.backpack.length-1);
            }
        }
        
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    maiLv(){
        contrlMan.maiLv(this.state.count);
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    zhuanzhi(){
        /**
         * 转职
         * 初始 => 一转  要求:Lv>=10
         * 一转 => 二转  要求:Lv>=30 power>=500
         * 二转 => 三转  要求:Lv>=60 power>=2200
         * 三转 => 四转  要求:Lv>=100 power>=88888
         * 四转 => 五转  要求:Lv>=150 power>=222222
         * 五转 => 神  要求:Lv>=150 power>=1888888888
         */
        var ss = "\n\n转职\n"+
        " 初始 => 剑师  要求:Lv>=10\n"+
        " 剑师 => 剑灵  要求:Lv>=30 power>=500\n"+
        " 剑灵 => 剑宗  要求:Lv>=60 power>=2200\n"+
        " 剑宗 => 剑君  要求:Lv>=100 power>=88888\n"+
        " 剑君 => 剑圣  要求:Lv>=150 power>=222222\n"+
        " 剑圣 => 剑神  要求:Lv>=150 power>=1888888888";
        alert(ss);
        contrlMan.zhuanzhi(this.state.count);
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    lian1(){
        /**
         * 平原
         * 要求 Lv>=0 power>=0 speed>=0
         * 最快 power=20 speed=20
         * 耗时 5-1 s
         * 收益 exp:100-500 gold:100-200 装备:普通1随机30%
         */
        var ss = "\n\n平原\n"+
            " 要求 等级>=0 战斗力>=0 速度>=0\n"+
            " 最快 战斗力>=20 速度>=20\n"+
            " 耗时 5-1 s\n"+
            " 收益 经验:100-500 金币:100-200 装备:普通1随机30%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji1(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:1
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian2(){
        /**
         * 山洞
         * 要求 Lv>=10 power>=0 speed>=0
         * 最快 power=100 speed=20
         * 耗时 11-1 s
         * 收益 exp:500-1000 gold:100-200 装备:普通1随机60%
         */
        var ss = "\n\n山洞\n"+
            " 要求 等级>=10 战斗力>=0 速度>=0\n"+
            " 最快 战斗力>=100 速度>=20\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:500-1000 金币:100-200 装备:普通1随机60%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji2(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:2
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian3(){
        /**
         * 森林
         * 要求 Lv>=10 power>=100 speed>=0
         * 最快 power>=150 speed>=30
         * 耗时 11-1 s
         * 收益 exp:1000-5000 gold:100-200 装备:普通1随机80%
         */
        var ss = "\n\n森林\n"+
            " 要求 等级>=10 战斗力>=100 速度>=0\n"+
            " 最快 战斗力>=150 速度>=30\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:1000-5000 金币:100-200 装备:普通1随机80%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji3(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:3
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian4(){
        /**
         * 森林深处
         * 要求 Lv>=20 power>=150 speed>=0
         * 最快 power=200 speed=40
         * 耗时 11-1 s
         * 收益 exp:2000-8000 gold:200-400 装备:普通1随机100%
         */
        var ss = "\n\n森林深处\n"+
            " 要求 等级>=20 战斗力>=150 速度>=0\n"+
            " 最快 战斗力>=200 速度>=40\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:2000-8000 金币:200-400 装备:普通1随机100%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji4(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:4
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian5(){
        /**
     * 珠峰
     * 要求 Lv>=30 power>=200 speed>=0
     * 最快 power=500 speed=50
     * 耗时 11-1 s
     * 收益 exp:5000-10000 gold:200-400 装备:普通2随机20%
     */
        var ss = "\n\n珠峰\n"+
            " 要求 等级>=30 战斗力>=200 速度>=0\n"+
            " 最快 战斗力>=500 速度>=50\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:5000-10000 金币:200-400 装备:普通2随机20%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji5(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:5
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian6(){
        /**
     * 龙人之塔
     * 要求 Lv>=40 power>=200 speed>=0
     * 最快 power=800 speed=80
     * 耗时 11-1 s
     * 收益 exp:8000-15000 gold:200-500 装备:普通2随机50%
     */
        var ss = "\n\n龙人之塔\n"+
            " 要求 等级>=40 战斗力>=200 速度>=0\n"+
            " 最快 战斗力>=800 速度>=80\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:8000-15000 金币:200-500 装备:普通2随机50%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji6(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:6
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian7(){
        /**
     * 练级7
     * 要求 Lv>=50 power>=200 speed>=0
     * 最快 power=1000 speed=200
     * 耗时 11-1 s
     * 收益 exp:20000-30000 gold:500-600 装备:普通2随机80%
     */
        var ss = "\n\n悲鸣洞穴\n"+
            " 要求 等级>=50 战斗力>=200 速度>=0\n"+
            " 最快 战斗力>=1000 速度>=200\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:20000-30000 金币:500-600 装备:普通2随机80%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji7(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:7
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian8(){
        /**
     * 练级8
     * 要求 Lv>=50 power>=500 speed>=50
     * 最快 power=1500 speed=500
     * 耗时 11-1 s
     * 收益 exp:20000-50000 gold:500-1000 装备:普通2随机100%
     */
        var ss = "\n\n天界\n"+
            " 要求 等级>=50 战斗力>=500 速度>=50\n"+
            " 最快 战斗力>=1500 速度>=500\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:20000-50000 金币:500-1000 装备:普通2随机100%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji8(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:8
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian9(){
        /**
     * 练级9
     * 要求 Lv>=60 power>=500 speed>=0
     * 最快 power=2000 speed=500
     * 耗时 11-1 s
     * 收益 exp:50000-80000 gold:800-1000 装备:普通3随机40%
     */
        var ss = "\n\n格兰迪\n"+
            " 要求 等级>=60 战斗力>=500 速度>=0\n"+
            " 最快 战斗力>=2000 速度>=500\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:50000-80000 金币:800-1000 装备:普通3随机40%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji9(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:9
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian10(){
        /**
     * 练级10
     * 要求 Lv>=70 power>=600 speed>=0
     * 最快 power=5000 speed=500
     * 耗时 11-1 s
     * 收益 exp:80000-100000 gold:1000-2000 装备:普通3随机60%
     */
        var ss = "\n\n钢铁之臂\n"+
            " 要求 等级>=70 战斗力>=600 速度>=0\n"+
            " 最快 战斗力>=5000 速度>=500\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:80000-100000 金币:1000-2000 装备:普通3随机60%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji10(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:10
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian11(){
        /**
     * 练级11
     * 要求 Lv>=80 power>=600 speed>=0
     * 最快 power=10000 speed=1000
     * 耗时 11-1 s
     * 收益 exp:100000-110000 gold:1000-2000 装备:普通3随机100%
     */
        var ss = "\n\n全蚀市场\n"+
            " 要求 等级>=80 战斗力>=600 速度>=0\n"+
            " 最快 战斗力>=10000 速度>=1000\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:100000-110000 金币:1000-2000 装备:普通3随机100%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji11(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:11
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian12(){
        /**
     * 练级12
     * 要求 Lv>=90 power>=600 speed>=0
     * 最快 power=20000 speed=1000
     * 耗时 11-1 s
     * 收益 exp:100000-150000 gold:1000-2000 装备:普通4随机50%
     */
        var ss = "\n\n断头谷\n"+
            " 要求 等级>=90 战斗力>=600 速度>=0\n"+
            " 最快 战斗力>=20000 速度>=1000\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:100000-150000 金币:1000-2000 装备:普通4随机50%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji12(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:12
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian13(){
        /**
     * 练级13
     * 要求 Lv>=100 power>=600 speed>=0
     * 最快 power=50000 speed=1500
     * 耗时 11-1 s
     * 收益 exp:150000-300000 gold:1000-2000 装备:普通4随机100%
     */
        var ss = "\n\n亡命杀镇\n"+
            " 要求 等级>=100 战斗力>=600 速度>=0\n"+
            " 最快 战斗力>=50000 速度>=1500\n"+
            " 耗时 11-1 s\n"+
            " 收益 经验:150000-300000 金币:1000-2000 装备:普通4随机100%";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji13(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:13
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian14(){
        /**
     * 练级14
     * 要求 Lv>=111 power>=5000 speed>=200
     * 最快 power=80000 speed=1800
     * 耗时 61-1 s
     * 收益 exp:500000-1000000 gold:2000-5000 装备:普通4随机100%X2
     */
        var ss = "\n\n鸟背\n"+
            " 要求 等级>=111 战斗力>=5000 速度>=200\n"+
            " 最快 战斗力>=80000 速度>=1800\n"+
            " 耗时 61-1 s\n"+
            " 收益 经验:500000-1000000 金币:2000-5000 装备:普通4随机100%X2";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji14(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:14
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    lian15(){
        /**
     * 练级15
     * 要求 Lv>=123 power>=5000 speed>=200
     * 最快 power=100000 speed=10000
     * 耗时 61-1 s
     * 收益 exp:1000000-2000000 gold:5000-100000 装备:普通4随机100%X2
     */
        var ss = "\n\n史诗之路\n"+
            " 要求 等级>=123 战斗力>=5000 速度>=200\n"+
            " 最快 战斗力>=100000 速度>=10000\n"+
            " 耗时 61-1 s\n"+
            " 收益 经验:1000000-2000000 金币:5000-100000 装备:普通4随机100%X2";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.lianji15(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser(),zidongnum:15
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    zi_name(num){
        var list = ["","平原","山洞","森林","森林深处","珠峰","龙人之塔","悲鸣洞穴","天界","格兰迪","钢铁之臂","全蚀市场","断头谷","亡命杀镇","鸟背","史诗之路"]
        return list[num]
    }
    zi(){
        if(!zidong){
            return 0;
        }
        if(this.state.zidongnum===1){
            t = contrlMan.lianji1(this.state.count);
        }else if(this.state.zidongnum===2){
            t = contrlMan.lianji2(this.state.count);
        }else if(this.state.zidongnum===3){
            t = contrlMan.lianji3(this.state.count);
        }else if(this.state.zidongnum===4){
            t = contrlMan.lianji4(this.state.count);
        }else if(this.state.zidongnum===5){
            t = contrlMan.lianji5(this.state.count);
        }else if(this.state.zidongnum===6){
            t = contrlMan.lianji6(this.state.count);
        }else if(this.state.zidongnum===7){
            t = contrlMan.lianji7(this.state.count);
        }else if(this.state.zidongnum===8){
            t = contrlMan.lianji8(this.state.count);
        }else if(this.state.zidongnum===9){
            t = contrlMan.lianji9(this.state.count);
        }else if(this.state.zidongnum===10){
            t = contrlMan.lianji10(this.state.count);
        }else if(this.state.zidongnum===11){
            t = contrlMan.lianji11(this.state.count);
        }else if(this.state.zidongnum===12){
            t = contrlMan.lianji12(this.state.count);
        }else if(this.state.zidongnum===13){
            t = contrlMan.lianji13(this.state.count);
        }else if(this.state.zidongnum===14){
            t = contrlMan.lianji14(this.state.count);
        }else if(this.state.zidongnum===15){
            t = contrlMan.lianji15(this.state.count);
        }else{
            return 0;
        }
        if(t===0){
            zidong=false;
            return 0;
        }
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser()
            });
            t = 0;this.save();
            this.zi();
        }.bind(this), t*1000+100);
    }
    zidonglian15(){
        if(zidong===false){
            if(t!==0){
                alert("有任务正在进行，无法操作!");
                return 0;
            }
        }
        zidong = zidong?false:true;
        this.zi();
        this.setState({
            iszi:zidong
        });
    }

    shenyuan1(){
        /**
     * 深渊1(消耗钻石1)
     * 要求 Lv>=150 power>=0 speed>=0
     * 最快 power=200000 speed=5000
     * 耗时 61-1 s
     * 收益 exp:10-100 gold:10-100 装备:史诗随机1%X5
     * 额外可能收益 Lv:1随机1%X5
     */
        var ss = "\n\n安图恩(消耗钻石1)\n"+
        " 要求 等级>=150 战斗力>=0 速度>=0\n"+
        " 最快 战斗力>=200000 速度>=5000\n"+
        " 耗时 61-1 s\n"+
        " 收益 经验:10-100 金币:10-100 装备:1%史诗-最多5个\n"+
        " 额外可能收益 等级:1%-最多5级";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.shenyuan1(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser()
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    shenyuan2(){
        /**
     * 深渊2(消耗钻石1)
     * 要求 Lv>=150 power>=10000 speed>=5000
     * 最快 power=500000 speed=10000
     * 耗时 101-1 s
     * 收益 exp:10-100 gold:10-100 装备:史诗随机2%X5
     * 额外可能收益 Lv:1随机10%X5
     */
        var ss = "\n\n卢克(消耗钻石1)\n"+
        " 要求 等级>=150 战斗力>=10000 速度>=5000\n"+
        " 最快 战斗力>=500000 速度>=10000\n"+
        " 耗时 101-1 s\n"+
        " 收益 经验:10-100 金币:10-100 装备:2%史诗-最多5个\n"+
        " 额外可能收益 等级:10%-最多5级";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.shenyuan2(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser()
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    shenyuan3(){
        /**
     * 深渊3(消耗钻石2)
     * 要求 Lv>=150 power>=10000 speed>=5000
     * 最快 power=500000 speed=10000
     * 耗时 101-1 s
     * 收益 exp:10-100 gold:10-100 装备:史诗随机4%X5
     * 额外可能收益 Lv:1随机10%X5
     */
        var ss = "\n\n超时空漩涡(消耗钻石2)\n"+
        " 要求 等级>=150 战斗力>=10000 速度>=5000\n"+
        " 最快 战斗力>=500000 速度>=10000\n"+
        " 耗时 101-1 s\n"+
        " 收益 经验:10-100 金币:10-100 装备:4%史诗-最多5个\n"+
        " 额外可能收益 等级:10%-最多5级";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.shenyuan3(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser()
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    shenyuan4(){
        /**
     * 深渊4(消耗钻石3)
     * 要求 Lv>=150 power>=10000 speed>=5000
     * 最快 power=500000 speed=10000
     * 耗时 101-1 s
     * 收益 exp:10-100 gold:10-100 装备:史诗随机6%X5
     * 额外可能收益 Lv:1随机20%X5
     */
        var ss = "\n\n伊希斯·普雷(消耗钻石3)\n"+
        " 要求 等级>=150 战斗力>=10000 速度>=5000\n"+
        " 最快 战斗力>=500000 速度>=10000\n"+
        " 耗时 101-1 s\n"+
        " 收益 经验:10-100 金币:10-100 装备:6%史诗-最多5个\n"+
        " 额外可能收益 等级:20%-最多5级";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.shenyuan4(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser()
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }
    shenyuan5(){
        /**
     * 深渊5(消耗钻石10)
     * 要求 Lv>=150 power>=8888888 speed>=8888888
     * 最快 power=88888888 speed=88888888
     * 耗时 101-1 s
     * 收益 exp:10-100 gold:10-100 装备:史诗随机50%X5
     * 额外可能收益 Lv:1随机99%X5
     */
        var ss = "\n\n希洛克(消耗钻石10)\n"+
        " 要求 等级>=150 战斗力>=8888888 速度>=888888\n"+
        " 最快 战斗力>=88888888 速度>=88888888\n"+
        " 耗时 101-1 s\n"+
        " 收益 经验:10-100 金币:10-100 装备:50%史诗-最多5个\n"+
        " 额外可能收益 等级:99%-最多5级";
        if(t!==0){
            alert("有任务正在进行，无法操作!"+ss);
            return 0;
        }
        t = contrlMan.shenyuan5(this.state.count);
        if(t === 0){
            alert("你没有资格!"+ss);
            return 0;
        }
        alert("本次行动将花费:"+t+"s"+ss);
        setTimeout(function(){
            this.setState({
                user:contrlMan.getUser()
            });
            t = 0;this.save();
        }.bind(this), t*1000+100);
    }



    zuanshi(){
        if(this.state.user.gold<1*500000){
            return 0;
        }
        contrlMan.gold2diamond(1);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    zuanshi2(){
        if(this.state.user.gold<10*500000){
            return 0;
        }
        contrlMan.gold2diamond(10);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    zuanshi3(){
        if(this.state.user.gold<100*500000){
            return 0;
        }
        contrlMan.gold2diamond(100);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    zuanshi4(){
        if(this.state.user.gold<1000*500000){
            return 0;
        }
        contrlMan.gold2diamond(1000);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    qiang(){
        if(this.state.where===""){
            alert("请你先选定一件身上的装备");
            return 0;
        }
        var ol = this.state.user.character[this.state.count][this.state.where].qianghua!==undefined?this.state.user.character[this.state.count][this.state.where].qianghua:0;
        var olP = this.state.user.character[this.state.count].power;
        contrlMan.qiang(this.state.count,this.state.where);
        this.setState({
            user:contrlMan.getUser()
        });
        var ne = this.state.user.character[this.state.count][this.state.where].qianghua!==undefined?this.state.user.character[this.state.count][this.state.where].qianghua:0;
        var neP = this.state.user.character[this.state.count].power;
        if(ne>ol&&ne>=10){
            alert("成功！！！  战斗力增加:"+(neP-olP));
        }this.save();
    }
    zeng(){
        if(this.state.where===""){
            alert("请你先选定一件身上的装备");
            return 0;
        }
        var ol = this.state.user.character[this.state.count][this.state.where].zengfu!==undefined?this.state.user.character[this.state.count][this.state.where].zengfu:0;
        var olP = this.state.user.character[this.state.count].power;
        contrlMan.zeng(this.state.count,this.state.where);
        this.setState({
            user:contrlMan.getUser()
        });
        var ne = this.state.user.character[this.state.count][this.state.where].zengfu!==undefined?this.state.user.character[this.state.count][this.state.where].zengfu:0;
        var neP = this.state.user.character[this.state.count].power;
        if(ne-ol&&ne>=10){
            alert("成功！！！战斗力增加:"+(neP-olP));
        }this.save();
    }
    tanxian(){
        var t = new Date();
        if(t.getTime()-this.state.time.getTime()>=1000*tanxianCD){
            contrlMan.tanxian(this.state.count);
            this.setState({
                user:contrlMan.getUser(),
                time:new Date()
            });this.save();
        }else{
            alert("冷却中!还剩:"+(1000*tanxianCD-t.getTime()+this.state.time.getTime())/1000+"s\n"+
                "\n探险\n 获得的奖励概率 取决于你的战斗力(8-88888888888 每10的倍数 概率提升)\n 可能获得：金币 钻石 等级 经验\n 强化/增幅保护卷\n (+7/+10/+11/+12/+13)(黑铁/黄金/翡翠/钻石)强化/增幅卷\n 装备品级调整箱(30-100/50-100/70-100/90-100)"
            );
        }
        
    }
    componentDidMount(){ 
    }
    componentWillUnmount(){
    }
    setWhere(w){
        this.setState({
            where:w
        });
    }
    sellAll(){
        contrlMan.sellAll(this.state.count);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    createMan(){
        contrlMan.createMan(0);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    DelMan(){
        if(this.state.count===""||!window.confirm("该操作不可恢复，你确定？")){
            return 0;
        }
        contrlMan.DelC(this.state.count);
        this.setState({
            user:contrlMan.getUser(),
            count: "",
        });this.save();
    }
    save(){
        var url = mainUrl + "?code=3&user="+this.state.user.user+"&passwd="+this.state.user.passwd;
        url += "&data="+JSON.stringify(contrlMan.getUser());
        
        console.log(url);
        fetch(url,{method: "GET"})
        .then(res => res.text())
        .then(
          (result) => {
            console.log(result);
          }
        )
        .catch((error) => console.log(error))
    }
    login(user, passwd){
        var user = window.prompt("请输入用户名","");
        var passwd = window.prompt("请输入密码","");
        var url = mainUrl + "?code=2&user="+user+"&passwd="+passwd;
        console.log(url);
        fetch(url,{method: "GET"})
        .then(res => res.text())
        .then(
          (result) => {
            console.log(result);
            var info = JSON.parse(result);
            if(typeof(info.data)===typeof("")){
                contrlMan.setUser({});
                this.setState({
                    user: {
                        user: "请登录",
                        passwd: "请登录",
                        gold: "请登录",
                        diamond: "请登录",
                        character: []
                    },
                    count: "",
                    where: "",
                    createMan: false
                });
                alert(info.data);
            }else{
                this.setState({
                    user: info.data,
                    count: "",
                    where: "",
                    createMan: true
                });
                contrlMan.setUser(this.state.user);
            }
          }
        )
        .catch((error) => console.log(error))
    }
    register(user, passwd){
        var user = window.prompt("请输入用户名","");
        var passwd = window.prompt("请输入密码","");
        var url = mainUrl + "?code=1&user="+user+"&passwd="+passwd;
        console.log(url);
        fetch(url,{method: "GET"})
        .then(res => res.text())
        .then(
          (result) => {
            console.log(result);
            var info = JSON.parse(result);
            alert(info.data);
          }
        )
        .catch((error) => console.log(error))
    }
    setS(abj){
        this.setState(abj);
    }
    getS(){
        return this.state;
    }
    use(index){
        var olZ = 0;
        var olQ = 0;
        var olP = 0;
        var the = contrlMan.getUser().character[this.getS().count].backpack[index];
        if(typeof(the)===typeof({})){
            contrlMan.zhuangbei(this.state.count,index);
        }else if(the==="强化保护卷"){
        }else if(the==="增幅保护卷"){
        }else{
            if(this.state.where===""){
                alert("请你先选定一件身上的装备");
                return 0;
            }
            contrlMan.useXZ(this.state.count,index,this.state.where);
            olP = this.state.user.character[this.state.count].power;
            olQ = this.state.user.character[this.state.count][this.state.where].qianghua!==undefined?this.state.user.character[this.state.count][this.state.where].qianghua:0;
            olZ = this.state.user.character[this.state.count][this.state.where].zengfu!==undefined?this.state.user.character[this.state.count][this.state.where].zengfu:0;
        }
        
        this.setS({
            user:contrlMan.getUser()
        });
        var neP = 0;
        var neQ = 0;
        var neZ = 0;
        if(this.state.count!==""&&this.state.where!==""){
            neP = this.state.user.character[this.state.count].power;
            neQ = this.state.user.character[this.state.count][this.state.where].qianghua!==undefined?this.state.user.character[this.state.count][this.state.where].qianghua:0;
            neZ = this.state.user.character[this.state.count][this.state.where].zengfu!==undefined?this.state.user.character[this.state.count][this.state.where].zengfu:0;
        }
        this.save();
        if(olQ>neQ){
            alert("成功！！！战斗力增加:"+(neP-olP));
        }else if(olZ>neZ){
            alert("成功！！！战斗力增加:"+(neP-olP));
        }
    }
    delBac(index){
        contrlMan.sell(this.state.count,index);
        this.setS({
            user:contrlMan.getUser()
        });this.save();
    }
    render(){
        return(
            <div style={{userSelect:"none",MozUserSelect:"none",msUserSelect:"none",WebkitUserSelect:"none"}}>
            <div class="container-fluid am-cf">
            <div class="row" >
                <div class="am-u-sm-12 am-u-md-12 am-u-lg-9">
                {this.state.createMan?(<button style={{backgroundColor:"blue",color:"yellow"}} onClick={this.createMan} type="button" class="page-header-button">新建角色</button>):<React.Fragment />}
                    {this.state.user.character.map((m,index)=><input style={{color:this.state.count===index?"yellow":"",backgroundColor:this.state.count===index?"#A52A2A":""}} value={m.name+"  Lv:"+m.Lv} onClick={
                        ()=>this.setS({count:index})
                    } class="page-header-button" type="button" />)}
                </div>
                <div class="am-u-lg-3">
                    <button onClick={this.login} type="button" class="page-header-button">登录</button>
                    <button onClick={this.register} type="button" class="page-header-button">注册</button>
                </div>
            </div>
            </div>
                {this.state.createMan&&this.state.count!==""?(
                <React.Fragment>
                    <div style={{float:"left",width:"20%",color:"#8A2BE2"}}>
                        <div style={{width:"95%",borderRadius:"10px",margin:"0 auto",border:"5px solid #FFFFFF",fontSize:"20px"}}>
                            <center><span style={{color:"#990099",fontSize:"30px"}}>用户:&nbsp;{this.state.user.user}</span><br /></center>
                            &nbsp;&nbsp;&nbsp;金币：&nbsp;{Number.parseInt(this.state.user.gold)}<br />
                            &nbsp;&nbsp;&nbsp;钻石：&nbsp;{Number.parseInt(this.state.user.diamond)}<br />
                            <center><span style={{color:"#990099",fontSize:"25px"}}>当前角色：&nbsp;{this.state.user.character[this.state.count].name}</span><br /></center>
                            &nbsp;&nbsp;&nbsp;Lv：&nbsp;{this.state.user.character[this.state.count].Lv}<br />
                            &nbsp;&nbsp;&nbsp;经验：&nbsp;{this.state.user.character[this.state.count].exp.toFixed(2)}<br />
                            &nbsp;&nbsp;&nbsp;职业：&nbsp;{contrlMan.getProfession()[this.state.user.character[this.state.count].profession][this.state.user.character[this.state.count].professionZhuan].name}<br />
                            &nbsp;&nbsp;&nbsp;战斗力：&nbsp;{this.state.user.character[this.state.count].power.toFixed(2)}<br />
                            &nbsp;&nbsp;&nbsp;速度：&nbsp;{this.state.user.character[this.state.count].speed.toFixed(2)}<br />
                            <center><button style={{width:"100%",borderRadius:"5px",height:"40px",backgroundColor:"red",color:"yellow",border:"none"}} onClick={this.DelMan} type="button" class="tpl-table-black-operation-del"><i class="am-icon-trash"></i>删除该角色</button></center>
                        </div>
                    </div>
                    <div style={{float:"right",width:"80%"}}>
                    <input style={{border:"5px solid #FFFFFF",borderRadius:"5px",width:"15%"}} class="page-header-button" type="button" value="强化" onClick = {this.qiang}/>
                    <input style={{border:"5px solid #FFFFFF",borderRadius:"5px",width:"15%"}} class="page-header-button" type="button" value="增幅" onClick = {this.zeng}/>
                    <input style={{border:"5px solid #A52A2A",borderRadius:"5px",width:"35%"}} class="page-header-button" type="button" value="Lv+1 钻石-1" onClick = {this.maiLv}/>
                    <input style={{border:"5px solid #FF3399",borderRadius:"5px",width:"15%"}} class="page-header-button" type="button" value="转职" onClick = {this.zhuanzhi}/>
                    <input style={{border:"5px solid #FF00FF",borderRadius:"5px",width:"20%"}} class="page-header-button" type="button" value="探险" onClick = {this.tanxian}/>

                    <input style={{border:"5px solid #00FFFF",borderRadius:"5px",width:"40%"}} class="page-header-button" type="button" value="金币换钻石50W:1" onClick = {this.zuanshi}/>
                    <input style={{border:"5px solid #00FFFF",borderRadius:"5px",width:"15%"}} class="page-header-button" type="button" value="10" onClick = {this.zuanshi2}/>
                    <input style={{border:"5px solid #00FFFF",borderRadius:"5px",width:"20%"}} class="page-header-button" type="button" value="100" onClick = {this.zuanshi3}/>
                    <input style={{border:"5px solid #00FFFF",borderRadius:"5px",width:"25%"}} class="page-header-button" type="button" value="1000" onClick = {this.zuanshi4}/>
                    
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"16%"}} class="page-header-button" type="button" value="平原" onClick = {this.lian1}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"16%"}} class="page-header-button" type="button" value="山洞" onClick = {this.lian2}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"16%"}} class="page-header-button" type="button" value="森林" onClick = {this.lian3}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"16%"}} class="page-header-button" type="button" value="森林深处" onClick = {this.lian4}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"16%"}} class="page-header-button" type="button" value="珠峰" onClick = {this.lian5}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"16%"}} class="page-header-button" type="button" value="龙人之塔" onClick = {this.lian6}/>

                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"16%"}} class="page-header-button" type="button" value="悲鸣洞穴" onClick = {this.lian7}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"16%"}} class="page-header-button" type="button" value="天界" onClick = {this.lian8}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"16%"}} class="page-header-button" type="button" value="格兰迪" onClick = {this.lian9}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"17%"}} class="page-header-button" type="button" value="钢铁之臂" onClick = {this.lian10}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"17%"}} class="page-header-button" type="button" value="全蚀市场" onClick = {this.lian11}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"17%"}} class="page-header-button" type="button" value="断头谷" onClick = {this.lian12}/>

                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"17%"}} class="page-header-button" type="button" value="亡命杀镇" onClick = {this.lian13}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"17%"}} class="page-header-button" type="button" value="鸟背" onClick = {this.lian14}/>
                    <input style={{border:"5px solid #FFFF00",borderRadius:"5px",width:"17%"}} class="page-header-button" type="button" value="史诗之路" onClick = {this.lian15}/>
                    <input style={{color:this.state.iszi?"blue":"",backgroundColor:this.state.iszi?"red":"",border:this.state.iszi?"5px solid red":"5px solid #FFFF00",borderRadius:"5px",width:"45%"}} class="page-header-button" type="button" value={this.state.iszi?"自动练级："+this.zi_name(this.state.zidongnum)+"(开)":"自动练级："+this.zi_name(this.state.zidongnum)+"(关)"} onClick = {this.zidonglian15}/>
                    
                    <input style={{border:"5px solid #FF0000",borderRadius:"5px",width:"15%"}} class="page-header-button" type="button" value="安图恩" onClick = {this.shenyuan1}/>
                    <input style={{border:"5px solid #FF0000",borderRadius:"5px",width:"15%"}} class="page-header-button" type="button" value="卢克" onClick = {this.shenyuan2}/>
                    <input style={{border:"5px solid #FF0000",borderRadius:"5px",width:"25%"}} class="page-header-button" type="button" value="超时空漩涡" onClick = {this.shenyuan3}/>
                    <input style={{border:"5px solid #FF0000",borderRadius:"5px",width:"20%"}} class="page-header-button" type="button" value="深渊-普雷" onClick = {this.shenyuan4}/>
                    <input style={{border:"5px solid #FF0000",borderRadius:"5px",width:"25%"}} class="page-header-button" type="button" value="深渊-希洛克" onClick = {this.shenyuan5}/>
                    </div>
                </React.Fragment>):<React.Fragment />}
            {this.state.createMan&&this.state.count!==""?(
            <div class="am-u-sm-12 am-u-md-12 am-u-lg-6" style={{width:"50%"}}>
            <div class="widget am-cf">
                <div class="widget-head am-cf">
                    <div class="widget-title am-fl">背包</div>
                    <div class="widget-function am-fr">
                        <a onClick={this.best} href="javascript:;" class="am-icon-cog">一键最优操作</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={this.paixu} href="javascript:;" class="am-icon-cog">按照售价高到低排序</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={this.zidongzhuangbei} href="javascript:;" class="am-icon-cog">自动装备</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={this.selldiji} href="javascript:;" class="am-icon-cog">卖出低级物品(黑铁,+7,30-100调整箱)</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={this.sellB} href="javascript:;" class="am-icon-cog">只卖出保护卷</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={this.sellQ} href="javascript:;" class="am-icon-cog">只卖出强化卷</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={this.sellZ} href="javascript:;" class="am-icon-cog">只卖出增幅卷</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={this.sellT} href="javascript:;" class="am-icon-cog">只卖出调整箱</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={this.sellW} href="javascript:;" class="am-icon-cog">只卖出装备</a>&nbsp;&nbsp;&nbsp;&nbsp;
                        <a onClick={this.sellAll} href="javascript:;" class="am-icon-cog">卖出全部</a>
                    </div>
                </div>
                <div class="widget-body  widget-body-lg am-fr">
                <table width="100%" class="am-table am-table-compact am-table-bordered am-table-radius am-table-striped tpl-table-black ">
                <thead><tr><th>物品名字</th><th>信息</th><th>售价</th><th>操作</th></tr></thead>
            <tbody>
                {this.state.count!==""?this.state.user.character[this.state.count].backpack.map((w,index)=>
                    <tr class="even gradeC">
                    <td>{typeof(w)===typeof({})?(
                        w.type==="jacket"?w.name+" 上衣":
                        w.type==="shoulder"?w.name+" 护肩":
                        w.type==="breastplate"?w.name+" 胸甲":
                        w.type==="leg"?w.name+" 护腿":
                        w.type==="shoes"?w.name+" 鞋":
                        w.type==="weapon"?w.name+" 武器":
                        w.type==="necklace"?w.name+" 项链":
                        w.type==="bracelet"?w.name+" 手镯":
                        w.type==="ring"?w.name+" 戒指":
                        w.type==="stone"?w.name+" 魔法石":
                        w.type==="auxiliary"?w.name+" 辅助装备":
                        w.type==="earring"?w.name+" 耳环":"未知"):w
                    }</td>
                    <td>{
                        typeof(this.state.user.character[this.state.count].backpack[index])===typeof("")?"无":("战斗力:"+this.state.user.character[this.state.count].backpack[index].power+" __ 速度:"+this.state.user.character[this.state.count].backpack[index].speed+" __ 质量:"+this.state.user.character[this.state.count].backpack[index].quality)
                    }</td>
                    <td>{
                        Number.parseInt(contrlMan.jisuan(this.state.user.character[this.state.count].backpack[index]))
                    }</td>
                    <td>
                        <div class="tpl-table-black-operation">
                            <button style={{borderRadius:"5px",backgroundColor:"blue",color:"yellow",border:"none"}} onClick={()=>this.use(index)}>&nbsp;&nbsp;使用&nbsp;&nbsp;</button>&nbsp;&nbsp;&nbsp;
                            <button style={{borderRadius:"5px",backgroundColor:"red",color:"yellow",border:"none"}} onClick={()=>this.delBac(index)} class="tpl-table-black-operation-del">
                            &nbsp;&nbsp;<i class="am-icon-trash"></i>&nbsp;出售&nbsp;&nbsp;
                            </button>
                        </div>
                    </td>
                    </tr>
                ):""}
            </tbody>
            </table></div></div></div>
            ):<React.Fragment />}
            
                    {this.state.createMan&&this.state.count!==""?(
                    <div class="am-u-sm-12 am-u-md-4" style={{width:"50%"}}>
                        <div class="widget am-cf" >
                            <div class="widget-head am-cf">
                                <div class="widget-title am-fl">已装备的物品<br />{
                                this.state.where==="jacket"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 上衣":
                                this.state.where==="shoulder"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 护肩":
                                this.state.where==="breastplate"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 胸甲":
                                this.state.where==="leg"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 护腿":
                                this.state.where==="shoes"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 鞋":
                                this.state.where==="weapon"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 武器":
                                this.state.where==="necklace"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 项链":
                                this.state.where==="bracelet"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 手镯":
                                this.state.where==="ring"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 戒指":
                                this.state.where==="stone"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 魔法石":
                                this.state.where==="auxiliary"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 辅助装备":
                                this.state.where==="earring"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 耳环":"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 未指定!"
                            }</div>
                                <div class="widget-function am-fr">
                                    <a href="javascript:;" class="am-icon-cog"></a>
                                </div>
                            </div>
                            <div class="widget-body widget-body-md am-fr" style={{height: "450px"}}>

                                <a onClick={()=>this.setWhere("weapon")}>
                                    <MainZ c="w" kao="left" now={this.state.where} where={this.state.user.character[this.state.count].weapon}/>
                                </a>
                                <a onClick={()=>this.setWhere("jacket")}>
                                    <MainZ c="f" kao="left" now={this.state.where} where={this.state.user.character[this.state.count].jacket}/>
                                </a>

                                <a onClick={()=>this.setWhere("stone")}>
                                    <MainZ kao="right" now={this.state.where} where={this.state.user.character[this.state.count].stone}/>
                                </a>
                                <a onClick={()=>this.setWhere("necklace")}>
                                    <MainZ c="s" kao="right" now={this.state.where} where={this.state.user.character[this.state.count].necklace}/>
                                </a>
                                

                                <a onClick={()=>this.setWhere("shoulder")}>
                                    <MainZ c="f" kao="left" now={this.state.where} where={this.state.user.character[this.state.count].shoulder}/>
                                </a>
                                <a onClick={()=>this.setWhere("breastplate")}>
                                    <MainZ c="f" kao="left" now={this.state.where} where={this.state.user.character[this.state.count].breastplate}/>
                                </a>

                                <a onClick={()=>this.setWhere("auxiliary")}>
                                    <MainZ kao="right" now={this.state.where} where={this.state.user.character[this.state.count].auxiliary}/>
                                </a>
                                <a onClick={()=>this.setWhere("bracelet")}>
                                    <MainZ c="s" kao="right" now={this.state.where} where={this.state.user.character[this.state.count].bracelet}/>
                                </a>

                                <a onClick={()=>this.setWhere("leg")}>
                                    <MainZ c="f" kao="left" now={this.state.where} where={this.state.user.character[this.state.count].leg}/>
                                </a>
                                <a onClick={()=>this.setWhere("shoes")}>
                                    <MainZ c="f" kao="left" now={this.state.where} where={this.state.user.character[this.state.count].shoes}/>
                                </a>

                                <a onClick={()=>this.setWhere("earring")}>
                                    <MainZ kao="right" now={this.state.where} where={this.state.user.character[this.state.count].earring}/>
                                </a>
                                <a onClick={()=>this.setWhere("ring")}>
                                    <MainZ c="s" kao="right" now={this.state.where} where={this.state.user.character[this.state.count].ring}/>
                                </a>

                            </div>
                        </div>
                        
                    </div>
                
                
                
                ):<React.Fragment />}
                    
            </div>
        );
    }
}

//*. 组件合成
function App(){
    return (
        <All />
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);
