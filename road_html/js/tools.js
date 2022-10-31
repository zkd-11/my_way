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