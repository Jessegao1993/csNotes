//获取元素属性值
function getStyle(obj,name){
    if(window.getComputedStyle){
        return getComputedStyle(obj,null)[name];
    }else{
        return obj.currentStyle[name];
    }
}

  //尝试创建一个可以执行简单动画的函数
  function divMove(obj,attr,target,speed,callback){
    /*
     参数
         obj:被操作的对象
         attr:要执行动画的样式，width,height,left,top
         target:目标位置
         speed:速度，正数右移，负数左移
         callback:回调函数，会在动画执行完毕之后执行
    */
 clearInterval(obj.timer);
 var currentValue = parseInt(getStyle(obj,attr));
 if(currentValue > target){
     speed = -speed;
 }
     //向执行动画的对象中添加一个属性，保存自己的定时器标识
     obj.timer =  setInterval(function(){
         var oldValue = parseInt(getStyle(obj,attr));
         var newValue = oldValue + speed;
             if(speed < 0 && newValue < target || speed > 0 && newValue > target){
                 newValue = target;
             }

             obj.style[attr] = newValue + "px";

             if(newValue==target){
                 clearInterval(obj.timer);
                 callback && callback();
             }  
      },50);
} 
//给元素添加类的函数
function addClass(obj,cn){
    if(!hasClass(obj,cn)){
        obj.className += " "+cn;
    }	
}
//判断元素是否已经拥有某个类的函数
function hasClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}
//移除类
function removeClass(obj,cn){
    var reg = new RegExp("\\b"+cn+"\\b");
    obj.className = obj.className.replace(reg,"");
}
//切换类
function toggleClass(obj,cn){
    if(hasClass(obj,cn)){
        removeClass(obj,cn)
    }else{
        addClass(obj,cn);
    }
}