/**
 * tab组件
 */
function Tab(id){
    this.oParent = $('#'+id);//父级
    this.aNav = this.oParent.find('.du_tabNav li');//tab标签
    this.aCon = this.oParent.find('.du_tabCon li');//con标签
    this.index = 0;
    this.settings = {//默认参数
        event : 'click',    //事件类型
        index : 0,          //初始第几个
        delay : 0           //时间
    }
}
Tab.prototype.init = function(opt){
    $.extend(this.settings,opt);
    var This = this;
    var delayTime = null;
    //初始化第index个
    this.index = this.settings.index;
    this.show(this.aNav.eq(this.index).get(0));

    //绑定事件
    this.aNav.on(this.settings.event,function(){
        var _this = this;
        if(This.settings.event == 'mouseover' && This.settings.delay){
            //有延迟的mouseover
            delayTime = setTimeout(function(){
                This.show(_this);
            },This.settings.delay)
        }else{
            This.show(_this);
        }

    });
    this.aNav.on('mouseout',function(){
        clearTimeout(delayTime);
    })

}

Tab.prototype.autoPlay = function(t){
    var This = this;
    var autoTime = null;
    autoTime = setInterval(go,t);
    this.aNav.on('mouseover',function(){
        clearInterval(autoTime);
    });
    this.aNav.on('mouseout',function(){
        autoTime = setInterval(go,t);
    });
    function go(){
        var i = This.index+1;
        i = i%(This.aNav.length);
        //console.log(i);
        This.show(This.aNav.eq(i).get(0));
    }
}

Tab.prototype.show = function(obj){
    //nav
    this.aNav.removeClass('du_tabActive');
    this.aNav.eq($(obj).index()).addClass('du_tabActive');
    //con
    this.aCon.removeClass('du_tabActive');
    this.aCon.eq($(obj).index()).addClass('du_tabActive');
    //改变当前的index下标
    this.index = $(obj).index();
}