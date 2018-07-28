import React from 'react';
import ReactDOM from 'react-dom';
import Man from './func';

var contrlMan = new Man();
var t = 0;
var zidong = false;

function Z(props){
    return(<div>
    {props.quality?(<div>
    <div class="am-progress-title">{props.str}<span class="am-fr am-progress-title-more">质量:{props.quality}%</span></div>
    <div class="am-progress">
    <div class={props.color==="red"?"am-progress-bar am-progress-bar-warning":props.color==="danger"?"am-progress-bar am-progress-bar-danger":"am-progress-bar"} style={{width:props.quality+"%"}}></div></div></div>):<span />
    }
    </div>
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

        this.shenyuan1 = this.shenyuan1.bind(this);
        this.shenyuan2 = this.shenyuan2.bind(this);
        this.shenyuan3 = this.shenyuan3.bind(this);
        this.shenyuan4 = this.shenyuan4.bind(this);
        this.shenyuan5 = this.shenyuan5.bind(this);
        
        this.zhuanzhi = this.zhuanzhi.bind(this);
        this.maiLv = this.maiLv.bind(this);
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
        " 初始 => 一转  要求:Lv>=10\n"+
        " 一转 => 二转  要求:Lv>=30 power>=500\n"+
        " 二转 => 三转  要求:Lv>=60 power>=2200\n"+
        " 三转 => 四转  要求:Lv>=100 power>=88888\n"+
        " 四转 => 五转  要求:Lv>=150 power>=222222\n"+
        " 五转 => 神  要求:Lv>=150 power>=1888888888";
        alert(ss);
        contrlMan.zhuanzhi(this.state.count);
        this.setState({
            user:contrlMan.getUser()
        });
        this.save();
    }
    lian1(){
        /**
         * 练级1
         * 要求 Lv>=0 power>=0 speed>=0
         * 最快 power=20 speed=20
         * 耗时 5-1 s
         * 收益 exp:100-500 gold:100-200 装备:普通1随机30%
         */
        var ss = "\n\n练级1\n"+
            " 要求 Lv>=0 power>=0 speed>=0\n"+
            " 最快 power=20 speed=20\n"+
            " 耗时 5-1 s\n"+
            " 收益 exp:100-500 gold:100-200 装备:普通1随机30%";
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
         * 练级2
         * 要求 Lv>=10 power>=0 speed>=0
         * 最快 power=100 speed=20
         * 耗时 11-1 s
         * 收益 exp:500-1000 gold:100-200 装备:普通1随机60%
         */
        var ss = "\n\n练级2\n"+
            " 要求 Lv>=10 power>=0 speed>=0\n"+
            " 最快 power=100 speed=20\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:500-1000 gold:100-200 装备:普通1随机60%";
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
         * 练级3
         * 要求 Lv>=10 power>=100 speed>=0
         * 最快 power=150 speed=30
         * 耗时 11-1 s
         * 收益 exp:1000-5000 gold:100-200 装备:普通1随机80%
         */
        var ss = "\n\n练级3\n"+
            " 要求 Lv>=10 power>=100 speed>=0\n"+
            " 最快 power=150 speed=30\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:1000-5000 gold:100-200 装备:普通1随机80%";
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
         * 练级4
         * 要求 Lv>=20 power>=150 speed>=0
         * 最快 power=200 speed=40
         * 耗时 11-1 s
         * 收益 exp:2000-8000 gold:200-400 装备:普通1随机100%
         */
        var ss = "\n\n练级4\n"+
            " 要求 Lv>=20 power>=150 speed>=0\n"+
            " 最快 power=200 speed=40\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:2000-8000 gold:200-400 装备:普通1随机100%";
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
     * 练级5
     * 要求 Lv>=30 power>=200 speed>=0
     * 最快 power=500 speed=50
     * 耗时 11-1 s
     * 收益 exp:5000-10000 gold:200-400 装备:普通2随机20%
     */
        var ss = "\n\n练级5\n"+
            " 要求 Lv>=30 power>=200 speed>=0\n"+
            " 最快 power=500 speed=50\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:5000-10000 gold:200-400 装备:普通2随机20%";
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
     * 练级6
     * 要求 Lv>=40 power>=200 speed>=0
     * 最快 power=800 speed=80
     * 耗时 11-1 s
     * 收益 exp:8000-15000 gold:200-500 装备:普通2随机50%
     */
        var ss = "\n\n练级6\n"+
            " 要求 Lv>=40 power>=200 speed>=0\n"+
            " 最快 power=800 speed=80\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:8000-15000 gold:200-500 装备:普通2随机50%";
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
        var ss = "\n\n练级7\n"+
            " 要求 Lv>=50 power>=200 speed>=0\n"+
            " 最快 power=1000 speed=200\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:20000-30000 gold:500-600 装备:普通2随机80%";
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
        var ss = "\n\n练级8\n"+
            " 要求 Lv>=50 power>=500 speed>=50\n"+
            " 最快 power=1500 speed=500\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:20000-50000 gold:500-1000 装备:普通2随机100%";
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
        var ss = "\n\n练级9\n"+
            " 要求 Lv>=60 power>=500 speed>=0\n"+
            " 最快 power=2000 speed=500\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:50000-80000 gold:800-1000 装备:普通3随机40%";
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
        var ss = "\n\n练级10\n"+
            " 要求 Lv>=70 power>=600 speed>=0\n"+
            " 最快 power=5000 speed=500\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:80000-100000 gold:1000-2000 装备:普通3随机60%";
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
        var ss = "\n\n练级11\n"+
            " 要求 Lv>=80 power>=600 speed>=0\n"+
            " 最快 power=10000 speed=1000\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:100000-110000 gold:1000-2000 装备:普通3随机100%";
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
        var ss = "\n\n练级12\n"+
            " 要求 Lv>=90 power>=600 speed>=0\n"+
            " 最快 power=20000 speed=1000\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:100000-150000 gold:1000-2000 装备:普通4随机50%";
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
        var ss = "\n\n练级13\n"+
            " 要求 Lv>=100 power>=600 speed>=0\n"+
            " 最快 power=50000 speed=1500\n"+
            " 耗时 11-1 s\n"+
            " 收益 exp:150000-300000 gold:1000-2000 装备:普通4随机100%";
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
        var ss = "\n\n练级14\n"+
            " 要求 Lv>=111 power>=5000 speed>=200\n"+
            " 最快 power=80000 speed=1800\n"+
            " 耗时 61-1 s\n"+
            " 收益 exp:500000-1000000 gold:2000-5000 装备:普通4随机100%X2";
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
        var ss = "\n\n练级15\n"+
            " 要求 Lv>=123 power>=5000 speed>=200\n"+
            " 最快 power=100000 speed=10000\n"+
            " 耗时 61-1 s\n"+
            " 收益 exp:1000000-2000000 gold:5000-100000 装备:普通4随机100%X2";
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
            t = 0;this.save();this.zi();
        }.bind(this), t*1000+100);
    }
    zidonglian15(){
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
        var ss = "\n\n深渊1(消耗钻石1)\n"+
        " 要求 Lv>=150 power>=0 speed>=0\n"+
        " 最快 power=200000 speed=5000\n"+
        " 耗时 61-1 s\n"+
        " 收益 exp:10-100 gold:10-100 装备:史诗随机1%X5\n"+
        " 额外可能收益 Lv:1随机1%X5";
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
        var ss = "\n\n深渊2(消耗钻石1)\n"+
        " 要求 Lv>=150 power>=10000 speed>=5000\n"+
        " 最快 power=500000 speed=10000\n"+
        " 耗时 101-1 s\n"+
        " 收益 exp:10-100 gold:10-100 装备:史诗随机2%X5\n"+
        " 额外可能收益 Lv:1随机10%X5";
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
        var ss = "\n\n深渊3(消耗钻石2)\n"+
        " 要求 Lv>=150 power>=10000 speed>=5000\n"+
        " 最快 power=500000 speed=10000\n"+
        " 耗时 101-1 s\n"+
        " 收益 exp:10-100 gold:10-100 装备:史诗随机4%X5\n"+
        " 额外可能收益 Lv:1随机10%X5";
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
        var ss = "\n\n深渊4(消耗钻石3)\n"+
        " 要求 Lv>=150 power>=10000 speed>=5000\n"+
        " 最快 power=500000 speed=10000\n"+
        " 耗时 101-1 s\n"+
        " 收益 exp:10-100 gold:10-100 装备:史诗随机6%X5\n"+
        " 额外可能收益 Lv:1随机20%X5";
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
        var ss = "\n\n深渊5(消耗钻石10)\n"+
        " 要求 Lv>=150 power>=8888888 speed>=8888888\n"+
        " 最快 power=88888888 speed=88888888\n"+
        " 耗时 101-1 s\n"+
        " 收益 exp:10-100 gold:10-100 装备:史诗随机50%X5\n"+
        " 额外可能收益 Lv:1随机99%X5";
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
        contrlMan.gold2diamond(1);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    zuanshi2(){
        contrlMan.gold2diamond(10);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    zuanshi3(){
        contrlMan.gold2diamond(100);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    zuanshi4(){
        contrlMan.gold2diamond(1000);
        this.setState({
            user:contrlMan.getUser()
        });this.save();
    }
    qiang(){
        if(this.state.where==""){
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
        if(this.state.where==""){
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
        if(t.getTime()-this.state.time.getTime()>=10000){
            contrlMan.tanxian(this.state.count);
            this.setState({
                user:contrlMan.getUser(),
                time:new Date()
            });this.save();
        }else{
            alert("冷却中!还剩:"+(10000-t.getTime()+this.state.time.getTime())/1000+"s\n"+
                "\n探险\n 获得的奖励取决于你的power(8-88888888888 每10的倍数 概率提升)\n 可能获得：gold diamond Lv exp\n 强化/增幅保护卷\n (+7/+10/+11/+12/+13)(黑铁/黄金/翡翠/钻石)强化/增幅卷\n 装备品级调整箱(30-100/50-100/70-100/90-100)"
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
        });this.save();
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
        if(this.state.count===""){
            return 0;
        }
        contrlMan.DelC(this.state.count);
        this.setState({
            user:contrlMan.getUser(),
            count: "",
        });this.save();
    }
    save(){
        var url = "http://127.0.0.1:2333?code=3&user="+this.state.user.user+"&passwd="+this.state.user.passwd;
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
        var url = "http://127.0.0.1:2333?code=2&user="+user+"&passwd="+passwd;
        console.log(url);
        fetch(url,{method: "GET"})
        .then(res => res.text())
        .then(
          (result) => {
            console.log(result);
            var info = JSON.parse(result);
            if(typeof(info.data)==typeof("")){
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
        var url = "http://127.0.0.1:2333?code=1&user="+user+"&passwd="+passwd;
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
        this.setState(abj);this.save();
    }
    getS(){
        return this.state;this.save();
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
            if(this.state.where==""){
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
        
        if(olQ>neQ){
            alert("成功！！！战斗力增加:"+(neP-olP));
        }else if(olZ>neZ){
            alert("成功！！！战斗力增加:"+(neP-olP));
        }this.save();
    }
    delBac(index){
        contrlMan.sell(this.state.count,index);
        this.setS({
            user:contrlMan.getUser()
        });this.save();
    }
    render(){
        return(
            <div>
            <div class="container-fluid am-cf">
            <div class="row" >
                <div class="am-u-sm-12 am-u-md-12 am-u-lg-9">
                    <div class="page-header-heading">用户:&nbsp;&nbsp;{this.state.user.user}</div>&nbsp;&nbsp;&nbsp;
                    <span class="page-header-description">金币：&nbsp;&nbsp;&nbsp;{Number.parseInt(this.state.user.gold)}</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="page-header-description">钻石：&nbsp;&nbsp;&nbsp;{Number.parseInt(this.state.user.diamond)}</span><hr />
                    <span class="page-header-description">当前角色：&nbsp;&nbsp;&nbsp;{this.state.count===""?"请登录":this.state.user.character[this.state.count].name}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="page-header-description">Lv：&nbsp;&nbsp;&nbsp;{this.state.count===""?"请登录":this.state.user.character[this.state.count].Lv}</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="page-header-description">经验：&nbsp;&nbsp;&nbsp;{this.state.count===""?"请登录":this.state.user.character[this.state.count].exp.toFixed(2)}</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="page-header-description">职业：&nbsp;&nbsp;&nbsp;{this.state.count===""?"请登录":contrlMan.getProfession()[this.state.user.character[this.state.count].profession][this.state.user.character[this.state.count].professionZhuan].name}</span><br />&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="page-header-description">战斗力：&nbsp;&nbsp;&nbsp;{this.state.count===""?"请登录":this.state.user.character[this.state.count].power.toFixed(2)}</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    <span class="page-header-description">速度：&nbsp;&nbsp;&nbsp;{this.state.count===""?"请登录":this.state.user.character[this.state.count].speed.toFixed(2)}</span>&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;
                    {this.state.createMan?(<button onClick={this.DelMan} type="button" >删除该角色</button>):(<span />)}
                    <hr />
                    {this.state.user.character.map((m,index)=><input value={m.name+"  Lv:"+m.Lv} onClick={
                        ()=>this.setS({count:index})
                    } class="page-header-button" type="button" />)}
                </div>
                <div class="am-u-lg-3 tpl-index-settings-button">
                    
                    <button onClick={this.login} type="button" class="page-header-button">登录</button>
                    <button onClick={this.register} type="button" class="page-header-button">注册</button>
                    {this.state.createMan?(<button onClick={this.createMan} type="button" class="page-header-button">新建角色</button>):(<span />)}
                    {this.state.createMan?(<button onClick={this.save} type="button" class="page-header-button">保存</button>):(<span />)}
                </div>
            </div>
            </div>
{this.state.createMan&&this.state.count!==""?(
    <div>
        <input class="page-header-button" type="button" value="强化" onClick = {this.qiang}/>
        <input class="page-header-button" type="button" value="增幅" onClick = {this.zeng}/>
        <input class="page-header-button" type="button" value="钻石+1" onClick = {this.zuanshi}/>
        <input class="page-header-button" type="button" value="钻石+10" onClick = {this.zuanshi2}/>
        <input class="page-header-button" type="button" value="钻石+100" onClick = {this.zuanshi3}/>
        <input class="page-header-button" type="button" value="钻石+1000" onClick = {this.zuanshi4}/>
        <input class="page-header-button" type="button" value="探险" onClick = {this.tanxian}/>
        <input class="page-header-button" type="button" value="转职" onClick = {this.zhuanzhi}/>
        <input class="page-header-button" type="button" value="买等级-1钻石1级" onClick = {this.maiLv}/>
        
        <input class="page-header-button" type="button" value="练级1" onClick = {this.lian1}/>
        <input class="page-header-button" type="button" value="练级2" onClick = {this.lian2}/>
        <input class="page-header-button" type="button" value="练级3" onClick = {this.lian3}/>
        <input class="page-header-button" type="button" value="练级4" onClick = {this.lian4}/>
        <input class="page-header-button" type="button" value="练级5" onClick = {this.lian5}/>
        <input class="page-header-button" type="button" value="练级6" onClick = {this.lian6}/>
        <input class="page-header-button" type="button" value="练级7" onClick = {this.lian7}/>
        <input class="page-header-button" type="button" value="练级8" onClick = {this.lian8}/>
        <input class="page-header-button" type="button" value="练级9" onClick = {this.lian9}/>
        <input class="page-header-button" type="button" value="练级10" onClick = {this.lian10}/>
        <input class="page-header-button" type="button" value="练级11" onClick = {this.lian11}/>
        <input class="page-header-button" type="button" value="练级12" onClick = {this.lian12}/>
        <input class="page-header-button" type="button" value="练级13" onClick = {this.lian13}/>
        <input class="page-header-button" type="button" value="练级14" onClick = {this.lian14}/>
        <input class="page-header-button" type="button" value="练级15" onClick = {this.lian15}/>
        <input class="page-header-button" type="button" value={this.state.iszi?"自动练级"+this.state.zidongnum+"(开)":"自动练级"+this.state.zidongnum+"(关)"} onClick = {this.zidonglian15}/>
        
        <input class="page-header-button" type="button" value="深渊1" onClick = {this.shenyuan1}/>
        <input class="page-header-button" type="button" value="深渊2" onClick = {this.shenyuan2}/>
        <input class="page-header-button" type="button" value="深渊3" onClick = {this.shenyuan3}/>
        <input class="page-header-button" type="button" value="深渊4" onClick = {this.shenyuan4}/>
        <input class="page-header-button" type="button" value="深渊5" onClick = {this.shenyuan5}/>
    </div>
):<span />}
            {this.state.createMan&&this.state.count!==""?(
            <div class="am-u-sm-12 am-u-md-12 am-u-lg-6" style={{width:"50%"}}>
            <div class="widget am-cf">
                <div class="widget-head am-cf">
                    <div class="widget-title am-fl">背包</div>
                    <div class="widget-function am-fr">
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
                        w.type=="jacket"?w.name+"上衣":
                        w.type=="shoulder"?w.name+"护肩":
                        w.type=="breastplate"?w.name+"胸甲":
                        w.type=="leg"?w.name+"护腿":
                        w.type=="shoes"?w.name+"鞋":
                        w.type=="weapon"?w.name+"武器":
                        w.type=="necklace"?w.name+"项链":
                        w.type=="bracelet"?w.name+"手镯":
                        w.type=="ring"?w.name+"戒指":
                        w.type=="stone"?w.name+"魔法石":
                        w.type=="auxiliary"?w.name+"辅助装备":
                        w.type=="earring"?w.name+"耳环":"未知"):w
                    }</td>
                    <td>{
                        "战斗力:"+this.state.user.character[this.state.count].backpack[index].power+"/速度:"+this.state.user.character[this.state.count].backpack[index].speed+"/质量:"+this.state.user.character[this.state.count].backpack[index].quality
                    }</td>
                    <td>{
                        contrlMan.jisuan(this.state.user.character[this.state.count].backpack[index])
                    }</td>
                    <td>
                        <div class="tpl-table-black-operation">
                            <button style={{backgroundColor:"blue",color:"yellow"}} onClick={()=>this.use(index)}>使用</button>&nbsp;&nbsp;&nbsp;
                            <button style={{backgroundColor:"red",color:"yellow"}} onClick={()=>this.delBac(index)} class="tpl-table-black-operation-del">
                                <i class="am-icon-trash"></i> 出售
                            </button>
                        </div>
                    </td>
                    </tr>
                ):""}
            </tbody>
            </table></div></div></div>
            ):<span />}
            
                    {this.state.createMan&&this.state.count!==""?(
                    <div class="am-u-sm-12 am-u-md-4" style={{width:"50%"}}>
                        <div class="widget am-cf" >
                            <div class="widget-head am-cf">
                                <div class="widget-title am-fl">已装备的物品<br />{
                                this.state.where=="jacket"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 上衣":
                                this.state.where=="shoulder"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 护肩":
                                this.state.where=="breastplate"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 胸甲":
                                this.state.where=="leg"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 护腿":
                                this.state.where=="shoes"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 鞋":
                                this.state.where=="weapon"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 武器":
                                this.state.where=="necklace"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 项链":
                                this.state.where=="bracelet"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 手镯":
                                this.state.where=="ring"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 戒指":
                                this.state.where=="stone"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 魔法石":
                                this.state.where=="auxiliary"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 辅助装备":
                                this.state.where=="earring"?"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 耳环":"已选定装备(使用 调整箱/强化增幅卷 前请选定物品) - 未指定!"
                            }</div>
                                <div class="widget-function am-fr">
                                    <a href="javascript:;" class="am-icon-cog"></a>
                                </div>
                            </div>
                            <div class="widget-body widget-body-md am-fr" style={{height: "1000px"}}>
                            <a onClick={()=>this.setWhere("jacket")}><Z quality={this.state.user.character[this.state.count].jacket.quality} str={
                                    this.state.user.character[this.state.count].jacket.name+"上衣 / 战斗力: "+
                                    this.state.user.character[this.state.count].jacket.power+" / 速度:"+
                                    this.state.user.character[this.state.count].jacket.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].jacket.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].jacket.zengfu
                                    } color="red" /></a>
                            <a onClick={()=>this.setWhere("shoulder")}><Z quality={this.state.user.character[this.state.count].shoulder.quality} str={
                                    this.state.user.character[this.state.count].shoulder.name+"护肩 / 战斗力: "+
                                    this.state.user.character[this.state.count].shoulder.power+" / 速度:"+
                                    this.state.user.character[this.state.count].shoulder.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].shoulder.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].shoulder.zengfu
                                    } color="red" /></a>
                            <a onClick={()=>this.setWhere("breastplate")}><Z quality={this.state.user.character[this.state.count].breastplate.quality} str={
                                    this.state.user.character[this.state.count].breastplate.name+"胸甲 / 战斗力: "+
                                    this.state.user.character[this.state.count].breastplate.power+" / 速度:"+
                                    this.state.user.character[this.state.count].breastplate.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].breastplate.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].breastplate.zengfu
                                    } color="red" /></a>
                            <a onClick={()=>this.setWhere("leg")}><Z quality={this.state.user.character[this.state.count].leg.quality} str={
                                    this.state.user.character[this.state.count].leg.name+"护腿 / 战斗力: "+
                                    this.state.user.character[this.state.count].leg.power+" / 速度:"+
                                    this.state.user.character[this.state.count].leg.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].leg.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].leg.zengfu
                                    } color="red" /></a>
                            <a onClick={()=>this.setWhere("shoes")}><Z quality={this.state.user.character[this.state.count].shoes.quality} str={
                                    this.state.user.character[this.state.count].shoes.name+"鞋 / 战斗力: "+
                                    this.state.user.character[this.state.count].shoes.power+" / 速度:"+
                                    this.state.user.character[this.state.count].shoes.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].shoes.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].shoes.zengfu
                                    } color="red" /></a>
                            <a onClick={()=>this.setWhere("weapon")}><Z quality={this.state.user.character[this.state.count].weapon.quality} str={
                                    this.state.user.character[this.state.count].weapon.name+"武器 / 战斗力: "+
                                    this.state.user.character[this.state.count].weapon.power+" / 速度:"+
                                    this.state.user.character[this.state.count].weapon.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].weapon.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].weapon.zengfu
                                    } color="danger" /></a>
                            <a onClick={()=>this.setWhere("necklace")}><Z quality={this.state.user.character[this.state.count].necklace.quality} str={
                                    this.state.user.character[this.state.count].necklace.name+"项链 / 战斗力: "+
                                    this.state.user.character[this.state.count].necklace.power+" / 速度:"+
                                    this.state.user.character[this.state.count].necklace.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].necklace.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].necklace.zengfu
                                    } color="" /></a>
                            <a onClick={()=>this.setWhere("bracelet")}><Z quality={this.state.user.character[this.state.count].bracelet.quality} str={
                                    this.state.user.character[this.state.count].bracelet.name+"手镯 / 战斗力: "+
                                    this.state.user.character[this.state.count].bracelet.power+" / 速度:"+
                                    this.state.user.character[this.state.count].bracelet.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].bracelet.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].bracelet.zengfu
                                    } color="" /></a>
                            <a onClick={()=>this.setWhere("ring")}><Z quality={this.state.user.character[this.state.count].ring.quality} str={
                                    this.state.user.character[this.state.count].ring.name+"戒指 / 战斗力: "+
                                    this.state.user.character[this.state.count].ring.power+" / 速度:"+
                                    this.state.user.character[this.state.count].ring.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].ring.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].ring.zengfu
                                    } color="" /></a>
                            <a onClick={()=>this.setWhere("stone")}><Z quality={this.state.user.character[this.state.count].stone.quality} str={
                                    this.state.user.character[this.state.count].stone.name+"魔法石 / 战斗力: "+
                                    this.state.user.character[this.state.count].stone.power+" / 速度:"+
                                    this.state.user.character[this.state.count].stone.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].stone.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].stone.zengfu
                                    } color="danger" /></a>
                            <a onClick={()=>this.setWhere("auxiliary")}><Z quality={this.state.user.character[this.state.count].auxiliary.quality} str={
                                    this.state.user.character[this.state.count].auxiliary.name+"辅助装备 / 战斗力: "+
                                    this.state.user.character[this.state.count].auxiliary.power+" / 速度:"+
                                    this.state.user.character[this.state.count].auxiliary.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].auxiliary.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].auxiliary.zengfu
                                    } color="danger" /></a>
                            <a onClick={()=>this.setWhere("earring")}><Z quality={this.state.user.character[this.state.count].earring.quality} str={
                                    this.state.user.character[this.state.count].earring.name+"耳环 / 战斗力: "+
                                    this.state.user.character[this.state.count].earring.power+" / 速度:"+
                                    this.state.user.character[this.state.count].earring.speed+" / 强化:"+
                                    this.state.user.character[this.state.count].earring.qianghua+" / 增幅:"+
                                    this.state.user.character[this.state.count].earring.zengfu
                                    } color="danger" /></a>
                            </div>
                        </div>
                        
                    </div>
                
                
                
                ):<span />}
                    
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