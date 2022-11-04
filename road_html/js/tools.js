function move(obj, atter, target, speed, callback) {
  //   关闭两个计时器
  clearInterval(obj.timer);
  //获取元素当前 位置
  var current = parseInt(getStyle(obj, atter));

  if (current > target) {
    speed = -speed;
  }
  // w向执行对象中 添加对象
  obj.timer = setInterval(function () {
    var oldValue = parseInt(getStyle(obj, atter));
    var newValue = oldValue + speed;

    // 此 if 目的在于防止目标对象  超出目标位置
    if (
      (speed < 0 && newValue <= target) ||
      (speed > 0 && newValue >= target)
    ) {
      newValue = target;
    }
    //  取变量的方式，由于atter为字符串，所以用中括号的方式
    obj.style[atter] = newValue + "px";
    console.log(newValue);

    if (newValue == target) {
      clearInterval(obj.timer);
      // 动画执行完毕后，执行回调函数
      callback && callback();
    }
  }, 30);
}

  function getStyle(obj, name) {
    if (window.getComputedStyle) {
      return getComputedStyle(obj, null)[name];
    } else {
      return obj.currentStyle[name];
    }
  }


   /*
            定义一个函数，用来向一个元素添加指定的class属性

            参数： - obj 要添加的属性的元素
                - cn 要添加的class值
        */
                function addClass(obj, cn) {
                  // 检查 obj 中是否含有cn,未含才加，避免重复加
                  //  一开始 以为是检查style里面有无含此 类样式
                  if (!hasClass(obj, cn)) {
                    obj.className += " " + cn;
                  }
                }
        
                /*
                    判断一个元素中是否含有指定的class属性值
                    如果有该class 则返回true
                */
        
                function hasClass(obj, cn) {
                  // 判断obj中有没有 cn  class
                  // 创建一个正则表达式
                  // var reg = /\bb2\b/;
                  var reg = new RegExp("\\b" + cn + "\\b");
                  return reg.test(obj.className);
                }
        
                // 删除一个 obj中 指定的class属性
                function removeClass(obj, cn) {
                  var reg = new RegExp("\\b" + cn + "\\b"); //此处加了一个空格，匹配时 将b2的空格也一并删除
        
                  // 删除class
                  obj.className = obj.className.replace(reg, "");
                }
                // 有则去，无则加
                function toggleClass(obj, cn) {
                  if (hasClass(obj, cn)) {
                    removeClass(obj, cn);
                  } else {
                    addClass(obj, cn);
                  }
                }