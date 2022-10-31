# 8.3

## Cs /Bs 模式

Client/ server 客户端/服务器

常用于大型游戏  cf qq飞车

\1.  均需下载客户端

\2.  软件由客户端和服务器两部分组成

\3.  更新需同步到每终端，比较麻烦

\4.  运算压力均分到各终端，服务器压力减小

 

Browser/ server 浏览器/服务器

常用于网页 淘宝 12306

\1.  不需要下载客户端

\2.  软件全部 部署服务器端

\3.  更新简单，更新只需在服务器

\4.  运算压力基本在服务端，不用来做大型游戏开发

 

## 互联网三大基石： url 、 http协议、 html

   url: 统一资源定位符

   http协议：共同遵守的语言协议、 数据解析规范

   html: 超文本标记语言

小明给小红传纸条： 

   url: 小红位置-地址

   http协议： 双方共同能遵守的语言 —中文

   html: 纸条上的内容 信息的载体 — 今晚约会 !

 

## Html: 超文本语言 描述网页的语言，内嵌在浏览器中

  Hyper text markup language

\1.  超文本： 可展示、文本、声音、图片等多媒体内容

\2.                                 

标签： 尖括号包围的关键词 <html>

**封闭类标记**（**双标记**） 成对出现 <p> </p> 

前为 开始/ 开放 标签

后为  结束/ 闭合 标签

非封闭类标记： 叫做空标记 单标记 ， <br/>

 

 

 

<html>

<head>


</head>

<body>

</body>

</html>

 

Html 根标签是最外层的标签

含有两个一级**子标签**和 head、body

Head 为不显示在页面上，但比较重要的内容

Body 为显示在页面上的内容

 

# 9.6

 

 

<meta> 标签提供了HTML 文档的元数据  存在于head标签内






## 9.12  学习进度

1. 主要学习了格式化标签，初步认识了 css样式，段落标签中的 style 中 font字体的size、color、family、width

​		aqua 蒂芙尼蓝色

2. 字符实体： 一些类同标签符号的语句，由于html会自动识别语句，所以需要用到实体转化语句 如<br> 得用成 &lt ; br &gt ;

3. 超链接标签： <a> <a/> a 标签， 锚点设置 href="路径位置"  如图  #为跳转自己，target_self 从当前页跳转，_blank 从新的一页跳转
4. <img src="9.12 学习日报.assets/image-20220913013750600.png" alt="image-20220913013750600" style="zoom:50%;" />

5.多媒体标签， audio img video 

​							img 中的 alt是为当前图片加载不出来显示的内容

​							audio 和 video 中需要 controls 中的插件才能显示出来音频文件，auto play 自动播放，loop为循环次数





# 9.21 学习进度

1.学习了列表标签 有序和无序  ol ul，中type不同，所显示的序号不同， <lib> 标签，标签中有序和无序的嵌套<img src="html  学习日报.assets/image-20220922013605497.png" alt="image-20220922013605497" style="zoom:33%;" />





2.详情标签 dl图片、dd文字

3.table标签   thead、 tbody、 tfoot 标签分化对不同部分好处理 样式 th居中加粗  

​		table中嵌套table/  rowspan 跨行并、 colspan 跨列并、

​			 border所有框线、 cellpading单元格大小   cellspacing 框线间距

tip： 跨行并，跨列并后，需在合并后的下一个单元格填写信息



# js学习

1. ##### 数据类型

<img src="html  学习日报.assets/image-20221019215141180.png" alt="image-20221019215141180" style="zoom:50%;" />



<img src="html  学习日报.assets/image-20221019215237733.png" alt="image-20221019215237733" style="zoom:50%;" />



双引号内容的隔开需要使用； 无引号需要用 ，

<img src="html  学习日报.assets/image-20221019215428545.png" alt="image-20221019215428545" style="zoom:50%;" />



##### 计时器  

​		console.time("命名")  内需加双引号

​			执行语句

​		console.timeEnd("命名")

<img src="html  学习日报.assets/image-20221019215559625.png" alt="image-20221019215559625" style="zoom:50%;" />



<img src="html  学习日报.assets/image-20221019215636354.png" alt="image-20221019215636354" style="zoom:50%;" />



##### 栈和堆

​	一般变量的是在栈内生成，对象的变量也是（指向堆中的空间）

​	栈内变量 == 栈内变量 （比较的是数值）

​	对象变量 ！== ，即使内容相同，所指向的地址不同，属于不同的两个堆空间

<img src="html  学习日报.assets/image-20221019215901569.png" alt="image-20221019215901569" style="zoom:50%;" /> 



##### 传入函数的实参数量和 形参之间的关系

大于不会报错（结果可能有误），小于会出现 形参未被赋值，未定义

<img src="html  学习日报.assets/image-20221019215922270.png" alt="image-20221019215922270"  />



函数就是对象，对象与函数均可以作为实参传递到形参，并且函数内可嵌套函数



##### 立即执行函数 

​	需要以（） 类似c中的无参函数

​		( function(){

```js
	   alert("我是立即执行函数")

	  })
```

执行方式； （）;



##### **枚举：**

![image-20221021133434445](html  学习日报.assets/image-20221021133434445.png)



**var** 属性 或 声明函数，都会在程序运行之前生成，相当于置顶位置处理，但是赋值的语句需要在执行本条语句过后，才能生效

##### 全局作用域 和 局部作用域

​    **全局作用域**： window(可视窗口)  局部作用域：**函数** 会屏蔽全局作用域（当具有相同的声明变量或函数时）

​		函数内变量 可访问全局变量，反则不可，当 函数内部没有所要进行的操作变量或函数时，会逐步向外找

，	在函数内**未声明的变量**，会被系统认定为 **全局变量**（ 有定义形参的情况除外）



##### **谷歌浏览器调试**：

​		 源代码中指定行数 使运行暂停到某一步骤，监视 可加入所要监视的对象



##### this:

​	this 谁调用this，就指向谁，多用于对 对象数据的处理 



##### 构造函数生成一类，类生成对象：

<img src="html  学习日报.assets/image-20221021135325591.png" alt="image-20221021135325591" style="zoom:50%;" />



##### 原型：

​	对象和类的共享空间，对象均可以使用的静态空间

​                  <img src="html  学习日报.assets/image-20221021135444853.png" alt="image-20221021135444853" style="zoom: 50%;" />



##### 检测对象是否含有某个属性

​	 如 congosle.log( person1.hasOwnProperty("属性名") )，在当前对象中，是否含有此属性

**原型的进入方法**： person. \_\_proto\_\_ (此为进入原型，左右下划线各为) 	 

<img src="html  学习日报.assets/image-20221021140232887.png" alt="image-20221021140232887" style="zoom:50%;" />



##### 数组

​		数组也是对象，具备对象的功能

​			var arr =new Array[1,2,3]  此语句为构造 数组元素为3 的数组

​			var arr =new Array（2） 括号表示个数  此语句为构造 数组元素为2 的数组

​		数组内的元素多样化， 可以是变量、函数、对象、数组...  

<img src="html  学习日报.assets/image-20221021140614824.png" alt="image-20221021140614824" style="zoom:50%;" />



###### 数组方法

1. arr.push() 尾部添加，并返回数组长度
2. arr,shift() 删除数组第一个元素，并将删除元素返回
3. .pop() 弹出最后一个元素，并将其返回
4. .unshift() 向数组开头添加一个或多个元素，并返回新的数组长度，原本数组元素往后移，下标添加x位
   1. 以下为数组方法的补充
5. .slice(),提取元素并将其返回，不修改原数组，（x,y） 为左闭右开，y可为负数，表示倒数X个，前者不能小于后者
6. splice()，用于删除数组的指定元素，修改原数组，并将被删除的元素返回（x,y,"z","z1"） x表示开始位置的索引，y表示删除的元素个数，z和z1自动插入到开始位置索引的前面，替代原本元素的位置
7. concat()，连接数组并返回数组，对原数组无影响，可在连接数组后，新添字符串或对象，也作为连接合并作业
8. reverse() 对原数组进行倒转
9. join() 将数组转化为字符串，对原数组无影响，并将字符串返回，join（"符号"），符号表示连接的字符
10. sort() 对数组元素排序，修改原数组 ，可在数组内添加回调函数，指定排序规则，见代码

```js
    // slice (), 从数组提取元素并将元素返回， 不会修改数组的元素
      //  slice(x,y)  从数组下标(索引)为x的元素提取，结束于y, 前[x,y), 含x不含y
      //     y是负数时，表示倒数， -1 倒数第一个，-2表示倒数第二个
      var arr1 = ["林修", "金乌", "九头犬", "萧红眉"];
      result = arr1.slice(0, -1);
      //   console.log("提取出来的元素为 倒3（萧九金）：" + result)  倒向提取不了
      console.log(result);

      /* splice (类似python的切片) 用于删除数组的指定元素 （能修改原数组的元素）
                 - 将被删除的元素作为返回值 返回
              - 参数 splice(x, y，“z”,"z1")   
              -  x 表示： 开始位置的索引，y表示删除的数量
            y 后的 z1 z2为所传递的元素， 元素将会自动插入到 开始位置索引的前面
             */

      arr1.splice(2, 1, "阳天", "王浩");
      console.log(arr1);


  // concat(), 连接数组 作用  对原数组无影响
      arr = ["林修", "王浩", "白小纯", "萧红媚"];
      arr1 = ["林动", "萧衍", "萧鼎"];
      var result = arr1.concat(arr, "无极霆");
      console.log("连接后的两个数组" + result);

      //reverse(),对原数组进行倒转
      arr2 = [1, 2, 3, 4, 5, 6];
      arr2.reverse();
      console.log("倒转后arr2数组元素是：（6,5，4，3，2，1）" + arr2);

      // join()  将数组转化为字符串， 对原数组无影响
      //    将转换后的字符串作为结果返回， join（“指定的字符串”） 作为元素的连接符
      result = arr.join("@_@");
      console.log(
        "使用join（）方法将数组转化为字符串，并用指定字符连接：" + result
      );

      /*sort()  对数组内元素排序，会影响原数组，默认按照Unicode进行排序
        可在内部添加一个回调函数，指定排序规则
         回调函数 需要定义两个形参, 浏览器会使用数组中的实参去调用回调函数
            数组a 一定在 b 前
        如果返回值 >0, 交换位置， <= 0, 元素位置不变
      */

      arr2.sort(function (a, b) {
        return a - b;
      });
      console.log(arr2);
```



###### 数组遍历

forEach(),见代码块及注释

需要一个函数作为参数传递	

​	函数内部可定义三个参数（1.value，2.index.3,obj)

括号内数字代表对应位置 参数所被赋值的类型

​	关于遍历时，数组为字符串时

console.log("字符串"+value)等能正确显示

​	数组为对象时，返回为元素类型：object object

如要正确显示，只能有形参值，如上："字符串"去除

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      function Person(name, age) {
        this.name = name;
        this.age = age;
      }
      var p1 = new Person("林修", 1008);
      var p2 = new Person("小金乌", 7);
      var p3 = new Person("玉帝之子", 15);
      var p4 = new Person("肖韵", 27);
      var p5 = new Person("晓梅", 18);
      var arr = [p1, p2, p3, p4, p5];

      //   将满18的元素 筛选放到一个新的数组并输出
      function getAdult(arr) {
        var newarr = [];
        for (var i = 0; i < arr.length; i++) {
          if (arr[i].age >= 18) {
            newarr.push(arr[i]);
          } else continue;
        }
        return newarr;
      }
      var newarr = getAdult(arr);
      console.log("新数组中满18岁的元素是 ", newarr);
      console.log("满足的元素个数为：(3) " + newarr.length);

      /*   数组遍历 forEach(), 需要一个函数作为参数  (仅支持内核 IE8以上的浏览器，ie不能运行此方法)
             遍历的次数 = 元素个数， 这种函数是由系统进行调用， 称为 回调函数
                第一个参数： 当前正在遍历的元素 
                第二个参数： 当前正在遍历的元素的索引 
                第三个元素：正在遍历的数组
     */
      //  数组的遍历，当数组的元素为 单一变量时，返回时 为属性值
      var arr1 = ["林修", "金乌", "九头犬", "萧红眉"];
      arr1.forEach(function (value, index, obj) {
        console.log("每个元素的内容： " + value);
        console.log("元素下标： " + index);
        console.log("整个对象（数组）：" + obj);
      });

      console.log("---------这是分割线--------");
      //  数组的遍历，当数组的元素为 对象时，
      // 语句为 xx+属性名时   返回时 为元素类型 ：（object object）
      //  去除双引号文本内容后，才是元素信息
      newarr.forEach(function (value, index, obj) {
        console.log(value);
        console.log("元素下标： " + index);
        console.log("整个对象（数组）：" + obj);
      });
    </script>
  </head>
  <body></body>
</html>

```



###### 函数方法

​	1.函数名.call() 函数名.apply()，作用类同，括号内为指定对象去运行某个函数

​	不同的是，apply所要传递的实参需要以数组封装

如：fun1.call(p1, 20, "王浩");

​	fun1.apply(p1, [18, "林修"]);

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      /* call() 和 apply（）为函数对象的方法，需要通过函数对象调用 
         这两个方法的作用为： 调用函数执行
         括号内 可以将一个对象指定为一个参数传入
    此对象会成为该函数执行的this， 不执行此方法，调用函数为 window
       
    函数定义多个形参时    
        call() 方法可以将实参在对象之后依次传递实参
        apply()方法需要将实参封装在 数组中
        
    - this的情况
        1. 函数调用时，this 永远时window
        2. 以方法调用时，this为调用方法的对象
        3. 以构造函数形式调用时， this是新创建的对象
        4. 使用call、 apply调用， this为用户 所指定 传入的对象
        */
      var name = "window";
      var obj = { name: "林修" };
      function fun() {
        console.log(this);
        console.log("调用该函数的为：" + this.name);
      }
      fun();
      fun.call(obj);

      var obj = new Object();
      function fun() {
        console.log(this.name);
      }

      //   指定对象 更改指定对象的值
      function fun1(age, name) {
        this.age = age;
        this.name = name;
        console.log("调用该函数的为：" + this.name);
      }
      fun1(17, "我是改后的window名咯"); //window 传入的参数,如不传入,函数中的name未被赋值,传回为undefine
      var p1 = { age: 18, name: "林修" };
      fun1.call(p1, 20, "王浩");
      //   p1.toString(name + age + "岁");
      console.log(p1);
      fun1.apply(p1, [18, "林修"]);
      console.log(p1);
      console.log(this.name);
    </script>
  </head>
  <body></body>
</html>

```



###### 函数所被浏览器传递的两个隐含参数

​	1.argunments(): 类数组对象（非数组），即使函数未定义形参，其他对象在调用函数时，会自动保存在argunments()中

​	2. callee: 指向函数本身

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      /* 在调用函数时，浏览器每次都会传递进两个隐函的参数
        1. 函数的上下文对象 this
        2. 封装实参的对象 argunments
            -argunments 是一个类 数组对象（但不是数组），可通过索引来操作数据 也可以获取长度
            -调用函数时，所传递的实参都会在argunments保存
            - 我们即使不定义形参，可以通过 argunments 使用实参
            
            callee
             此函数对应一个函数对象，指向函数本身
    */
      function fun() {
        console.log(arguments instanceof Array); //检测一个对象是否是一个类（构造函数）的实例
        console.log(Array.isArray(arguments)); //检测arguments 是否是数组
        console.log(arguments.length);
        console.log(arguments[0]);
        console.log(arguments.callee);
      }

      fun("林修", 18);
    </script>
  </head>
  <body></body
</html>

```

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      /* 在调用函数时，浏览器每次都会传递进两个隐函的参数
        1. 函数的上下文对象 this
        2. 封装实参的对象 argunments
            -argunments 是一个类 数组对象（但不是数组），可通过索引来操作数据 也可以获取长度
            -调用函数时，所传递的实参都会在argunments保存
            - 我们即使不定义形参，可以通过 argunments 使用实参


            callee
             此函数对应一个函数对象，指向函数本身
    */
      function fun() {
        console.log(arguments instanceof Array); //检测一个对象是否是一个类（构造函数）的实例
        console.log(Array.isArray(arguments)); //检测arguments 是否是数组
        console.log(arguments.length);
        console.log(arguments[0]);
        console.log(arguments.callee);
      }
    
      fun("林修", 18);
    </script>

  </head>
  <body></body>
</html><!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      /* 在调用函数时，浏览器每次都会传递进两个隐函的参数
        1. 函数的上下文对象 this
        2. 封装实参的对象 argunments
            -argunments 是一个类 数组对象（但不是数组），可通过索引来操作数据 也可以获取长度
            -调用函数时，所传递的实参都会在argunments保存
            - 我们即使不定义形参，可以通过 argunments 使用实参


```js
        callee
         此函数对应一个函数对象，指向函数本身
*/
  function fun() {
    console.log(arguments instanceof Array); //检测一个对象是否是一个类（构造函数）的实例
    console.log(Array.isArray(arguments)); //检测arguments 是否是数组
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments.callee);
  }

  fun("林修", 18);
</script>
```

  </head>
  <body></body>
</html><!DOCTYPE html>
<html lang="en">

  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      /* 在调用函数时，浏览器每次都会传递进两个隐函的参数
        1. 函数的上下文对象 this
        2. 封装实参的对象 argunments
            -argunments 是一个类 数组对象（但不是数组），可通过索引来操作数据 也可以获取长度
            -调用函数时，所传递的实参都会在argunments保存
            - 我们即使不定义形参，可以通过 argunments 使用实参


```js
        callee
         此函数对应一个函数对象，指向函数本身
*/
  function fun() {
    console.log(arguments instanceof Array); //检测一个对象是否是一个类（构造函数）的实例
    console.log(Array.isArray(arguments)); //检测arguments 是否是数组
    console.log(arguments.length);
    console.log(arguments[0]);
    console.log(arguments.callee);
  }

  fun("林修", 18);
</script>
```

 

###### Date()类,所生成的对象具有的方法

- 新建一个Date对象时， 如无传递字符串时，时间对象字符串内容为 当前代码运行的时间

1. .getFullyear(): 所在年份
2. .getMonth(): 所在月份
3. getDate(): 所在日数
4. getDay(): 所在星期的第几天
5. getTime(): 时间戳 ，距离格林威时间1970 01 01 00：00：00到当前所花费的毫秒数

- 将time转化为: 当前时间： 1970 +time/1000/60/60/24/365

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Documen获得d1的所在日数t</title>
    <script>
      var d = new Date(); //无传递字符串时，为当前代码运行的时间
      console.log(d);
      //  "月/ 日/ 年/ 时"
      var d1 = new Date("12/13/2022 12:13:20");
      console.log(d1);

      //   获得d1的时间 由用户自己定义
      // 获得 d1的年 月份 日数 周几
      var d3 = d1.getFullYear();
      var d4 = d1.getMonth();
      var d5 = d1.getDate();
      var d6 = d1.getDay();
      console.log("获得d1的所在年份" + d3);
      console.log("获得d1的所在月份" + d4);
      console.log("获得d1的所在日数" + d5);
      console.log("获得d1的所在星期的周" + d6);

      /*   getTime()
            -获取当前日期的时间戳
            -时间戳 指的是从格林威标准时间1970年 1月1日 0时0分0秒
                到当前日期所花费的毫秒数 1秒 = 1000毫秒
            - 计算机底层保存时间使用都为 时间戳
      */
      var time = d1.getTime();
      console.log(time);
      console.log(1970 + time / 1000 / 60 / 60 / 24 / 365);
      //   可用时间戳 计算程序的运行的时间， 在语句前定义一个时间戳，语句后定义一句，相减
    </script>
  </head>
  <body></body>
</html>

```



##### Math属性和方法

- Math 为一个数学工具包

1. 向上取整： Math.ceil()
2. 向下取整： Math.floor()
3. 四舍五入： Math.round()
4. 最大和最小值： .max() 和 .min()
5. .pow(x,y) 返回x的 y次方
6. .sprt: 开方

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      // abs() 计算一个 数的绝对值
      console.log(Math.abs(-7));
      //  向上取整 ceil()  向下取整floor()  四舍五入 round()
      console.log("向上取整" + Math.ceil(1.1));
      console.log("向下取整" + Math.floor(1.1));
      console.log("四舍五入(1.1) " + Math.round(1.1));
      console.log("四舍五入(1.5) " + Math.round(1.5));

      //   random() -生成一个0-1 间的随机数  [0, 1)
      for (var i = 0; i < 10; i++) {
        console.log("0-1间的随机数" + Math.random());
      }

      //   Math.round(Math.random()* (y-x) +x ) 表示 随机生成 x - y 的数
      for (var i = 0; i < 10; i++) {
        console.log("1-10间的随机数" + Math.round(Math.random() * 9 + 1));
      }

      // max() 和 min() 求数值最大和数值最小
      console.log(Math.max(11, 99, 88));
      console.log(Math.min(11, 99, 88));

      // Math.pow(x, y) 返回x 的 y次幂
      console.log(Math.pow(2, 3));

      //   Math.sqrt()  开方计算
      console.log(Math.sqrt(49));
    </script>
  </head>
  <body></body>
</html>

```



##### 包装类：基本数据类型转化 转化对象	

-    转化之后具备对象的功能，可为其定义属性和方法

var a  = new Number(7)// 定义一个数字对象 7 

1. String() 转化为 String对象
2. Number() 转化为 Number对象
3. Boolean() 转化为 Boolean对象



```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      /* 基本数据类型 String Number Boolean Undefined 
            引用数据类型 Object
            js中提供三个包装类,通过三种包装类将基本数据类型转化为对象
                - String()  转化为 String 对象
                - Number()  转化为 Number 对象
                - Boolean() 转化为 Boolean 对象
        */
      // 转化为对象后 具备对象的功能 属性 方法都可定义
      var a = new Number(7);
      a.name = "林修";
      console.log(a);
      console.log(a.name);

      // 不将其转化为对象时,虽浏览器临时会将其转化,检查类型时也为对象,但定义未成功
      var b = 7;
      b = b.toString();
      b.name = "王浩";
      console.log(typeof b);
      console.log(b);
      console.log(b.name); //未将其转化为对象 所以显示的为 未定义

      // 定义为对象时 比较的为地址,内容相同, 地址不同, 全等 返回为false
      var c = true;
      var d = new Boolean(true);
      console.log(c === d); //

      //   e内容即使为false,因为返回的为对象所以也能运行
      var e = new Boolean(false);
      if (e) {
        console.log("由于d是对象,所以为真,即使内容值为false该语句能运行");
      }
    </script>
  </head>
  <body></body>
</html>

```



##### 字符串的方法

1.  str.length : 返回字符串的长度，包含空格

2. .charAt（索引）： 根据索引返回字母

3. .chatCodeAt（索引）： 根据索引返回其Ascii

4. fromCharAt(索引)： 返回字符

5. .concat(): 连接多个字符 与+作用

6. .indexof(x,y): x为检索字符串中是否含有此字符串，y为第x次出现的索引，不添加y时，默认返回第一次出现的索引

7. .lastIndexof(x,y): y为倒数第y处开始查找

8. .slice(x,y)  [ ) x表示开始位置的索引，y表示结束位置的索引，y可为负数，表示 倒数+y个   不加参数y时，表示从x索引截取到尾部

9.  .substring(x,y) 类同slice() 但是y不能接受负数,当传递参数为负数时，系统会自动将其转化为0， 会自动调整，x为比y小值

10. .sunstr(x,y) x： 为开始位置的索引 y: 截取长度

11. .toUpperCase() 和 .toLowerCase() 将字符串转化大小写

12. spilt() 将字符拆分为数组，括号内为定义的参数作为拆分数组的规则，以此参数划分字符数组并消失，分割后的数组以 , 间隔分开

    

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      // 字符串具备的方法 ,lenghth属性 可获取字符的长度, 空格也算一个字符
      str = "Hello world";
      console.log("str的字符长度为: " + str.length);
      //     charAt()
      //        - 返回指定位置的字符, 根据括号内索引返回
      var result = str.charAt(0);
      console.log("返回的字符为:(H) " + result);

      //   charCOdeAt()
      //         - 返回指定索引字符 的Code 码
      result = str.charCodeAt(0);
      console.log("返回H的ASCII码: " + result);

      //   fromCharCode(),
      //          - 根据字符编码获取字符
      result = String.fromCharCode(72);
      console.log("72编码获取到的字符为:" + result);

      //   concat()  - 连接两个或多个字符 ,于+ 作用类同
      result = str.concat("林修", "王浩");
      console.log("连接后的字符为" + result);

      /* indexOf() 
            - 检索一个字符串中是否含有指定内容
            - 如果含有该内容,返回第一次出现的索引, 如果未出现 返回 -1
            - 可以指定一个 第二参数, 指定 第几次出现的位置
    */
      str1 = "hello world";
      result = str1.indexOf("h");
      console.log("h第一次出现的索引" + result);
      // 指定第二参数
      result = str1.indexOf("o", 4);
      console.log("从索引4开始找o: (4) " + result);
      //   使用方法于 indexOf() 一样,从后往前找
      result = str1.lastIndexOf("h");
      console.log("h从后往前找第一次出现的索引 (0): " + result);
      //      从后往前找字符,参数不能是负数, 包含所指定的索引
      result = str1.lastIndexOf("o", 4);
      console.log("倒数第4个字符开始找o " + result);

      //---------------------截取字符--------------------------------
      //   slice() 可以从字符串中 截取所指定位置的字符,并将字符返回
      //   单个参数传入时,表示从此位置的索引往后截取
      //   - (x, y)  x表示开始位置的索引, y表示结束位置的索引 [ )
      //       - y可为负数, 表示 倒数第x个
      result = str1.slice(0, 5);
      console.log("返回的字符为(hello): " + result);
      //   单个参数传入时,表示从此位置的索引往后截取
      result = str1.slice(6);
      console.log("返回的字符为 (helloWorld): " + result);

      /*   substring() 可用来截取字符, slice() 类同
        -参数
            - (] 包含开始位置的索引,不包过结束位置的索引,但是 y 不能接受负值作为参数
            -   当传递了赋值,则默认使用0
            -   自动调整参数的位置, 会将大的索引置于后一位
    */
      result = str1.substring(6, -1);
      console.log("返回的字符为(hello) :" + result);

      //   substr() -截取字符 （x,y） x:截取开始位置的索引  y: 截取的长度
      result = str1.substr(0, 5);
      console.log("(hello)" + result);

      //-toUpperCase() 将字符转化为大写并返回
      // - toLowerCase() 将字符转化为小写并返回
      result = str1.toUpperCase();
      console.log("字符都转化为大写： " + result);
      result = str.toLowerCase();
      console.log("字符都转化为小写 " + result);

      // split()
      //        - 可以将一个字符拆为数组
      //          -需要一个字符串作为参数,会根据该参数拆分数组
      str = "ab,cde,fg,hij";
      result = str.split(",");
      console.log("返回的数组为以(ab,cde,fg,hij ):");
      result = str.split("");
      console.log("当分割的字符串标识为空时,会拆分每一个字符" + result);
    </script>
  </head>
  <body></body>
</html>

```



##### 正则表达式

正则表达式 = 规则表达式

- var reg = RegExp("A", "i");

1.    // 正则表达式 语句, 第一个参数表示含有即返回true , 后者i 表示忽略大小写
2.    //  test() - 检测字符串是否符合规则

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      // 正则表达式 = 规则表达式
      // 正则表达式 语句, 第一个参数表示含有即返回true , 后者i 表示忽略大小写
      //   test() - 检测字符串是否符合规则
      var reg = RegExp("A", "i");
      console.log(reg.test("abcd"));

      //  | 和 [] 都表示或
      reg = RegExp("a| b| c", "i");
      console.log(reg.test("Cde"));

      reg = RegExp("[ab]");
      console.log(reg.test("bcd"));

      //表示 非(a-z), 有满足即正确
      reg = RegExp("[^a-z]");
      console.log("返回为(true) : " + reg.test("bcd11"));

      // var reg = RegExp("x","y")  = var reg = /x/y;
      //    x和y 不需要用双引号
      var reg1 = /[A-z]/;
      console.log("返回为true) : " + reg1.test("Af"));

      reg1 = /a[bde]c/;
      console.log("a[bde]c表示中间包围的字母只能出现一次: " + reg1.test("adc"));
    </script>
  </head>
  <body></body>
</html>

```





###### 支持正则表达式的String()

1. search（正则表达式），只能返回第一个出现的索引，全局匹配无效
2. match(/正则表达式/g) 可全局匹配，符合条件的元素，会被提取出来作为数组
3. spilt(/正则表达式/g ) 将符合条件元素返回数组
4. replace（/正则表达式/g,"x" ） 将符合的字符替换为x
5.  

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      /* search()
                  -可以搜索字符串是否含有指定内容
                  - 搜索到指定内容后,会返回第一次出现的索引,未搜索到则返回-1
                  - 可接受正则表达式作为参数
                  - 只会 查找第一个,设置全局匹配无效
              */
      str = "hello jianfeng hello abc adc";
      result = str.search(/a[bd]c/);
      console.log("用search搜索到a[bd]c :" + result);
      /*
              match()
                  - 可以根据正则表达式,从字符串中将符合条件的内容提取出来
                  - 默认情况只会找到第一个符合要求的内容
                  - 可加 -g 全局模式,将所有匹配的内容返回
                  - 符合条件的会被提取出来 作为一个数组对象
                  -   正则表达式可以设置多个匹配模式,顺序无所谓
      */
      str1 = "1a2b3c4d5e6f7g8H";
      result = str1.match(/[a-z]/gi);
      console.log("使用正则表达式和match()提取出来的字母: " + result);
      console.log("提取出来的数组指定下标提取[2]个元素为(c) :" + result[2]);

      // split(), 将字符串分割为数组
      result = str1.split(/[A-z]/gi);
      console.log("用split()和正则表达式提取出来的数字数组(1-8): " + result);

      /* replace()
                  - 将字符串指定内容替换为新的内容
                  - 参数
                      1.第一个参数: 被替换的内容,可接受一个正则表达式作为参数,
                      2. 第二个参数为所要替换的内容
                      - 默认只会替换第一个
            */
      result = str1.replace(/[1-9]/gi, "--");
      console.log("用replace()将所有数字替换为--  " + result);
    </script>
  </head>
  <body></body>
</html>

```



###### 正则表达式量词

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      /*  量词：
            -{x} 量词只对前边一个内容生效，设置一个内容出现的 x 次数
            - {x, y}  出现 x-y 次
            - {x, } 出现x及 x以上
            -  + 至少一个
            -  * 0个或多个，相当于{0，}
            - ？ 0个或1个  相当于{0，1}
            */

      var reg = /b{3}/;
      console.log("包含连续3个(返回true): " + reg.test("12bbb"));
      //   ^ 表示开头  $ 表示结尾
      reg = /^a$/;
      console.log("只能匹配a,返回为true): " + reg.test("a"));

      // 检测手机号
      //      - 以1开头  第二 3-9  3-11 数字任意
      //      ^1  [3-9]  [0-9]{9}$   ^$ 表示开头和结尾 限制只识别数字
      reg = RegExp("^1[3-9][0-9]{9}$");
      var a = 17688058148;
      console.log("检测手机号码(返回true) :" + reg.test(a));
    </script>
  </head>
  <body></body>
</html>

```



###### 正则表达式语法

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      // 检查字符串是否含有.  “ .”在语法中表示任意字符
      //  需检测普通的 .时需要加 \作为转义字符 ， \\表示 “\”
      var reg = /\./;
      console.log("返回为false) : " + reg.test("pea"));
      /*    \W  除了字母、 数字、 _ 、 [^A-z 0-9_]
          \d  任意的数字 [0-9]
          \D - 除了数字
          \s 空格
          \S 除了空格
          \b 单词边界
          \B 除了单词边界
      */
      //    检查一个字符是否含有child ，加\b是边界
      reg = /\bchild\b/;
      console.log("返回false): " + reg.test("childhodd"));

      //   当用户输入一个字符串时，去除字符串前后的空格
      //  - 去除开头的空格
      var str = prompt("请输入字符串（开头中间尾部都有空格）： ");
      var str1 = str;
      var str2 = str;
      str = str.replace(/^\s*/, "");
      console.log("去除开头空格后的字符串:" + str);
      //   去除尾部空格
      str1 = str1.replace(/\s*$/, "");
      console.log("去除尾部空格后的字符串:" + str1);
      //   去除开头和尾部的空格
      str2 = str2.replace(/^\s*|\s*$/, "");
      console.log("去除头尾部空格后的字符串:" + str2);
    </script>
  </head>
  <body></body>
</html>

```



###### 正则表达式检验手机号

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      /*  
            电子邮件：
                任意字母数字下划线  . 任意字母数字下划线@ 
                任意字母数字   【.任意字母数字（2-5）位 .任意字母（2-5位）】
            \w{3, }  (\.\w+)* @ [A-Z 0-9]+ (\.[A-Z]{2,5}){1,2}
        */
      var reg = /^\w{3,}(\.\w+)*@[A-Z 0-9]+(\.[A-Z]{2,5}){1,2}$/i;
      console.log("检验邮箱是否符合正则表达式： " + reg.test("xslmsu@163.com"));
    </script>
  </head>
  <body>
    <button id="btn">我是一个按钮</button>
  </body>
</html>

```



###### 获取元素节点 事件操作

1. vat btn  =  document.getElementByid("btn")
2. getElementsByTagName() 返回的为数组，使用时需加[索引]
3. getElementsByName()  同上 带s都为数组

- btn.innerHTML = "i'm button"



###### onload 延迟触发事件

```js
 window.onload = function () {
        var btn = document.getElementById("btn");
        btn.onclick = function () {
          alert("这是由按钮单击触发事件： ");
        };
      };
```



dom查询

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #total {
        width: 400px;
        height: 600px;
        background-color: aliceblue;
        float: left;
      }
      #btnList {
        width: 400px;
        height: 265px;
        background-color: aliceblue;
        float: right;
        margin-top: 0px;
      }
      #btn0 {
        height: 30px;
      }
    </style>
    <script>
      function myClick(idstr, fun) {
        var btn = document.getElementById(idstr);
        btn.onclick = fun;
      }

      window.onload = function () {
        //1. 查找#bj节点
        btn01.onclick = function () {
          var li = document.getElementById("bj");
          console.log(li.innerHTML);
        };

        //2. 查找所有Li节点
        btn02.onclick = function () {
          //getElementsByTagName() 根据标签名获取一组元素节点对象
          // 会返回一个类数组对象，查询到的元素都会封装到对象中
          var li = document.getElementsByTagName("li");
          for (var i = 0; i < li.length; i++) {
            console.log(li[i].innerHTML);
          }
        };
        //3. 查找name=gender的所有节点
        btn03.onclick = function () {
          var a = document.getElementsByName("gender");
          for (var i = 0; i < a.length; i++) {
            console.log(a[i].value);
            // innerHTML不能读取元素节点元素
            //直接使用 元素.属性名， class属性： 保留字，需要使用className
            console.log(a[i].className);
          }
        };

        //4. 查找#city下所有子节点
        var btn04 = document.getElementById("btn04");
        btn04.onclick = function () {
          var city = document.getElementById("city");
          var cns = city.childNodes;
          console.log("city的子节点应该为9,包括5个空白节点： " + cns.length);
          for (var i = 0; i < cns.length; i++) {
            console.log("子节点的内容" + cns[i].innerHTML);
          }
        };

        //5.返回#city的Li节点
        var btn05 = document.getElementById("btn05");
        btn05.onclick = function () {
          var a = document.getElementById("city");
          var lis = a.children;
          console.log("city下的子元素:" + lis.length);
          for (var i = 0; i < lis.length; i++) {
            // 五个空白节点 四个文本节点
            console.log(lis[i].innerHTML);
          }
        };

        //6. 返回井phone的第一个子节点
        var btn06 = document.getElementById("btn06");
        btn06.onclick = function () {
          var pe = document.getElementById("phone");
          var fir = pe.firstChild;
          // 返回的为空格；
          console.log("返回为空白节点： " + fir);
        };

        //7. 返回#bj的父节点
        myClick("btn07", function () {
          var bj = document.getElementById("bj");
          var pn = bj.parentNode;
          console.log(pn);
          console.log("bj的父节点html内容为： " + pn.innerHTML);
          console.log("bj的父节点文本内容为： " + pn.innerText);
        });

        //8.返回#android的前一个兄弟节点
        myClick("btn08", function () {
          var and = document.getElementById("android");
          var ps = and.previousSibling;
          console.log("android的前一个兄弟节点： " + ps.innerHTML);
        });

        //9.读取#username的Value属性值
        myClick("btn09", function () {
          var um = document.getElementById("username");
          console.log("username的Value：" + um.value);
        });

        //10. 设置#username的value属性值
        myClick("btn10", function () {
          var um = document.getElementById("username");
          um.value = "詹姆斯牛逼";
        });
        //11. 返回#bj的文本值
        myClick("btn11", function () {
          var bj = document.getElementById("bj");
          // node value 表示节点的内容
          console.log("bj的文本值" + bj.firstChild.nodevalue);
          console.log("bj的文本值" + bj.innerHTML);
          console.log("bj的文本值" + bj.innerText);
        });
      };
    </script>
  </head>
  <body>
    <div id="total">
      <div class="inner">
        <p>你喜欢哪座城市</p>
        <ul id="city">
          <li id="bj">北京</li>
          <li>上海</li>
          <li>东京</li>
          <li>首尔</li>
        </ul>
        <br />
        <br />
        <p>你喜欢哪款单机游戏</p>
        <ul id="game">
          <li id="rl">红警</li>
          <li>飞车</li>
          <li>LOL</li>
          <li>魔兽</li>
        </ul>
        <br />
        <br />

        <p>你手机的操作系统是</p>

        <ul id="phone">
          <li>IOS</li>
          <li id="android">Android</li>
          <li>windows phone</li>
        </ul>
      </div>

      <!-- 性别框 -->
      <div class="inner">
        gender:
        <input class="inner" type="radio" name="gender" value="male" />
        Male
        <input class="inner" type="radio" name="gender" value="female" />
        female
        <br />
        <br />
        name:
        <input type="text" name="name" id="username" value="abcde" />
      </div>
    </div>
    <!-- 这是返回操作块 -->
    <div id="btnList">
      <div><button id="btn01">查找#bj节点</button></div>
      <div><button id="btn02">查找所有Li节点</button></div>
      <div><button id="btn03">查找name=gender节点</button></div>
      <div><button id="btn04">查找#city下所有子节点</button></div>
      <div><button id="btn05">返回#city的所有li节点（子元素）</button></div>
      <div><button id="btn06">返回#phone的第一个子节点</button></div>
      <div><button id="btn07">返回#bj的父节点</button></div>
      <div><button id="btn08">返回#Android的前一个子节点</button></div>
      <div><button id="btn09">返回#username的value属性值</button></div>
      <div><button id="btn10">设置#usename的value属性值</button></div>
      <div><button id="btn11">返回#bj的文本值</button></div>
    </div>
  </body>
</html>

```



##### 全选练习

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {
        //    全选按钮
        var checkedAllBtn = document.getElementById("checkedAllBtn");
        checkedAllBtn.onclick = function () {
          // 获取四个多选框items
          var items = document.getElementsByName("items");
          // 遍历items
          for (var i = 0; i < items.length; i++) {
            // 将四个选款全部设置为选中
            items[i].checked = true;
          }
          checkedAllBox.checked = true;
        };

        // 全不选按钮
        var checkedNoBtn = document.getElementById("checkedNoBtn");
        checkedNoBtn.onclick = function () {
          // 获取四个多选框items
          var items = document.getElementsByName("items");
          // 遍历items
          for (var i = 0; i < items.length; i++) {
            // 将四个选款全部设置为选中
            items[i].checked = false;
          }
          checkedAllBox.checked = false;
        };

        // 3. 反选按钮
        var checkedRevBtn = document.getElementById("checkedRevBtn");
        checkedRevBtn.onclick = function () {
          checkedAllBox.checked = true;
          var items = document.getElementsByName("items");
          for (var i = 0; i < items.length; i++) {
            items[i].checked = !items[i].checked;
            if (items[i].checked == false) {
              checkedAllBox.checked = false;
            }
          }
        };

        // 4. 提交按钮
        var sendBtn = document.getElementById("sendBtn");
        sendBtn.onclick = function () {
          var items = document.getElementsByName("items");
          for (var i = 0; i < items.length; i++) {
            if (items[i].checked) {
              console.log(items[i].value);
            }
          }
        };

        //   全选/全不选按钮
        /*    在时间的响应函数中，响应函数给谁绑定的this就是谁
            - 选中时所有item选中，未选中所有取消
            - 少一个时不选，全点击时自动勾上
              -
         */
        var checkedAllBox = document.getElementById("checkedAllBox");
        checkedAllBox.onclick = function () {
          var items = document.getElementsByName("items");
          for (var i = 0; i < items.length; i++) {
            items[i].checked = this.checked;
          }
        };

        //为四个多选框 绑定响应函数
        var items = document.getElementsByName("items");
        for (var i = 0; i < items.length; i++) {
          items[i].onclick = function () {
            checkedAllBox.checked = true;
            // 判断是否要将 全选/全不选框 选中
            for (var i = 0; i < items.length; i++) {
              if (!items[i].checked) {
                checkedAllBox.checked = false;
                break;
              }
            }
          };
        }
      };
    </script>
  </head>
  <body>
    <form method="post" action="">
      你爱好的运动是？
      <input type="checkbox" id="checkedAllBox" />全选/全不选

      <br />
      <input type="checkbox" name="items" value="足球" />足球
      <input type="checkbox" name="items" value="篮球" />篮球
      <input type="checkbox" name="items" value="羽毛球" />羽毛球
      <input type="checkbox" name="items" value="乒乓球" />乒乓球
      <br />
      <input type="button" id="checkedAllBtn" value="全 选" />
      <input type="button" id="checkedNoBtn" value="全不选" />
      <input type="button" id="checkedRevBtn" value="反 选" />
      <input type="button" id="sendBtn" value="提 交" />
    </form>
  </body>
</html>

```



###### dom查询剩余的方法

-  // doument.querySelector() -需要一个选择器的字符串作为参数
- ​    //    - 可根据一个css选择器来查询一个元素， .box p

 	**var box = document.querySelector(".box div");**

css语句 ，找到名字为name的div，再找其包含的div标签

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {
        // 获取Body 标签
        var body = document.getElementsByTagName("body")[0];
        // console.log(body);

        // document 中有 body属性，保存的是对body的引用
        var body = document.body;
        console.log(body);

        // document.documentElement 保存的时html根标签
        var html = document.documentElement;
        // console.log(html);

        // document.all 代表页面中所有的标签
        // all = document.getElementsByTagName("*");
        // var all = document.all;
        // console.log(all.length);
        // for (var i = 0; i < all.length; i++) {
        //   console.log(all[i]);
        // }

        //  根据元素的class属性值查询一组元素节点对象
        /*   getElementsByClassName() 可根据class属性值获取一组
               元素节点对象
        */
        var box = document.getElementsByClassName("box");
        console.log(box.length);

        //   获取class为box中的所有p
        //  .box p
        // doument.querySelector() -需要一个选择器的字符串作为参数
        //      - 可根据一个css选择器来查询一个元素， .box p
        var box = document.querySelector(".box div");
        console.log("box中p内容： " + box.innerHTML);

        //   document.querySelectorAll() 和去all一样
        //    -不同点： 该数组会将符合条件的元素封装到一个数组中返回
        var box = document.querySelectorAll(".box div");
        console.log("第一个符合条件的元素： " + box[1].innerHTML);
        console.log("box中p内容： " + box[0].innerText);
      };
    </script>
  </head>
  <body>
    <div class="box">
      <div>林修 一代苟修</div>
    </div>
    <div class="box1"></div>
    <div class="box">
      <div>孟浩 我命由我不由天</div>
    </div>
  </body>
</html>

```



###### dom增删查改、

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #outer {
        float: left;
        background-color: rgb(173, 189, 189);
        width: 300px;
        height: 300px;
        /* text-align: center; */
        list-style: none;
      }
      #btnList {
        float: right;
        background-color: aliceblue;
        width: 300px;
        height: 300px;
      }
    </style>
    <script>
      function myClick(idstr, fun) {
        var btn = document.getElementById(idstr);
        btn.onclick = fun;
      }

      window.onload = function () {
        var li = document.createElement("li");
        var gztext = document.createTextNode("广州");
        li.appendChild(gztext);
        // 1. 创建广州节点

        myClick("btn01", function () {
          // 新建一个li节点
          var li = document.createElement("li");

          // 新建一个"广州文本节点"
          var gztext = document.createTextNode("广州");

          li.appendChild(gztext);
          var city = document.getElementById("city");
          city.appendChild(li);
        });

        //2.  将"广州"节点插入到#bj前面

        myClick("btn02", function () {
          // 新建一个li节点
          var li = document.createElement("li");

          // 新建一个"广州"节点 插入到Bj 前
          /*    -可以在指定的子节点前插入新的子节点
                -语法：    
                        父节点.insertBefore(新节点，子节点)
           */
          var gztext = document.createTextNode("广州");
          li.appendChild(gztext);
          var bj = document.getElementById("bj");
          var city = document.getElementById("city");
          city.insertBefore(li, bj);
        });

        // 3. 使用广州节点替换#bj节点
        //   - 使用语法： 父节点.replaceChild(新节点，旧节点）
        myClick("btn03", function () {
          var bj = document.getElementById("bj");
          var city = document.getElementById("city");
          city.replaceChild(li, bj);
        });

        // 4.删除bj 节点
        // removeChild
        // 使用语法  父节点.removeChild(子节点);
        myClick("btn04", function () {
          var bj = document.getElementById("bj");
          bj.parentNode.removeChild(bj);
        });

        // 5. 读取#city 内的html代码
        myClick("btn05", function () {
          var city = document.getElementById("city");
          console.log("city内的html代码" + city.innerHTML);
        });

        // 6. 设置#bj内的html代码
        myClick("btn06", function () {
          var bj = document.getElementById("bj");
          console.log("bj内的代码" + bj.innerHTML);
          bj.innerHTML = "林修 一代苟修";
        });

        // 7. 创建一个广州节点,添加city下
        myClick("btn07", function () {
          var city = document.getElementById("city");
          // 直接以文本内容添加的方法添加
          //   city.innerHTML += "<li>广州</li>";
          city.appendChild(li);
        });
      };
    </script>
  </head>
  <body>
    <div id="outer">
      <p>你喜欢哪座城市</p>
      <ul id="city">
        <li id="bj">北京</li>
        <li>上海</li>
        <li>东京</li>
        <li>首尔</li>
      </ul>
    </div>

    <div id="btnList">
      <div><button id="btn01">创建一个"广州"节点，添加到#city下</button></div>
      <div><button id="btn02">将 "广州"节点插入到#bj前面</button></div>
      <div><button id="btn03">使用 "广州"节点替换#bj节点</button></div>
      <div><button id="btn04">删除#bj节点</button></div>
      <div><button id="btn05">读取#city内的HTML代码</button></div>
      <div><button id="btn06">设置#bj内的HTML代码</button></div>
      <div><button id="btn07">创建一个"广州"节点，添加到#city下</button></div>
    </div>
  </body>
</html>

```



###### 增加删除记录

- 绑定函数时只需要赋值函数名即可，带括号表示返回的是一个由window执行后返回的结果，赋值后会有 this对象自己去执行此函数。

在增加tr一行的例子中，有两种方法，一种为从外至内添加，比较繁琐， 新建行，新建列，新建文本再逐步插入内容，最后再由行插入原本表格，代码量多

 新建行后，然后直接行内容 innerHTML加入，最后再找到行中原本所在父元素 直接插入

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <script>
    function delA() {
      // a为td 字节点， td为tr子节点
      /*  this 为什么不更改为all[i],因为for循环只是绑定
            每一个按钮的功能，for先执行绑定
            this 如果变成 all[i], 
          会变成 undefined, i执行完毕变为3
          this 则表示谁调用 就代表谁
 
      */
      var tr = this.parentNode.parentNode;
      //   需找到 table来删除 tr一整行
      var name = tr.children[0].innerHTML;
      if (confirm("确定要删除" + name + "该行吗")) {
        tr.parentNode.removeChild(tr);
      }
      //   使页面不进行跳转，或是将 a 中herf转变为 (javascript: ;)
      return false;
    }

    window.onload = function () {
      var allA = document.getElementsByTagName("a");
      for (var i = 0; i < allA.length; i++) {
        allA[i].onclick = delA;
      }

      var adbtn = document.getElementById("addEmpButton");
      // 添加行 方法 （多重内嵌添加）
      addEmpButton.onclick = function () {
        // 普通的方法
        var name = document.getElementById("empName").value;
        var email = document.getElementById("email").value;
        var salary = document.getElementById("salary").value;

        // 新建一个tr行  4个td
        var trn = document.createElement("tr");
        trn.innerHTML =
          "<td>" +
          name +
          "</td>" +
          "<td>" +
          email +
          "</td>" +
          "<td>" +
          salary +
          "</td>" +
          "<td><a href='javascript:;'>Delete</a></td>";
        // var a = trn.getElementsByTagName("a")[0];
        var a = trn.getElementsByTagName("a")[0];
        console.log(a.length);
        console.log(a);

        a.onclick = delA;

        /*
                    var td1 = document.createElement("td");
                    var td2 = document.createElement("td");
                    var td3 = document.createElement("td");
                    var td4 = document.createElement("td");

                    // 创建a 元素
                    var a = document.createElement("a");
                    // 创建a中deleate
                    var nameText = document.createTextNode(name);
                    var emailText = document.createTextNode(email);
                    var salaryText = document.createTextNode(salary);
                    // 此行为写死，为文本值，固定值，其他行都为 变量传导值
                    var delText = document.createTextNode("Delete");

                    // 将deleate 添加到a 中, 并未a设置 herf属性
                    a.appendChild(delText);
                    a.href = "javascript:;";

                    // 将文本条件添加到td中
                    td1.appendChild(nameText);
                    td2.appendChild(emailText);
                    td3.appendChild(salaryText);
                    td4.appendChild(a);

                    // 将td 添加到tr中
                    trn.appendChild(td1);
                    trn.appendChild(td2);
                    trn.appendChild(td3);
                    trn.appendChild(td4);

                // a.onclick = delA();
         // 关于为什么不加括号 因为绑定函数，只需要传递函数名，表示由这个this对象）去执行此函数
        // 加括号时，是由window执行函数并返回的结果
                a.onclick = delA;
            */

        // 获取table
        var employeeTable = document.getElementById("employeeTable");
        // 获取employeeTable中的tbody
        var tbody = employeeTable.getElementsByTagName("tbody")[0];
        //
        tbody.appendChild(trn);
      };
    };
  </script>
  <body>
    <table
      border="5px"
      cellspacing="0px"
      cellpadding="0px"
      width="300px"
      height="170px"
      align="center"
      id="employeeTable"
    >
      <tr>
        <th>Name</th>
        <th>Email</th>
        <th>Salary</th>
        <th>function</th>
      </tr>
      <tr>
        <td>Tom</td>
        <td>tom@tom.com</td>
        <td>5000</td>
        <!-- <td><a href="deleteEmp?id=001">Delete</a></td> -->
        <!-- href="javascript:;" 也能关闭超链接默认行为 -->
        <td><a href="javascript:;">Delete</a></td>
      </tr>
      <tr>
        <td>Jerry</td>
        <td>jerry@sohu.com</td>
        <td>8000</td>
        <td><a href="deleteEmp?id=002">Delete</a></td>
      </tr>
      <tr>
        <td>Bob</td>
        <td>bob@tom.com</td>
        <td>8000</td>
        <td><a href="deleteEmp?id=003">Delete</a></td>
      </tr>
    </table>

    <br />

    <div id="formDiv">
      <h4 align="center">添加新员工</h4>

      <table
        border="5px"
        width="300px"
        cellspacing="0px"
        cellpadding="0px"
        align="center"
      >
        <tr>
          <td class="word">name:</td>
          <td class="inp">
            <input type="text" name="empName" id="empName" />
          </td>
        </tr>
        <tr>
          <td class="word">email:</td>
          <td class="inp">
            <input type="text" name="email" id="email" />
          </td>
        </tr>
        <tr>
          <td class="word">salary:</td>
          <td class="inp">
            <input type="text" name="salary" id="salary" />
          </td>
        </tr>
        <tr>
          <td colspan="2" align="center">
            <button id="addEmpButton">Submit</button>
          </td>
        </tr>
      </table>
    </div>
  </body>
</html>

```



###### 操作内联样式

-  obj.style.width/height/… ，直接改变标签内的style样式

- 内联样式： 为最高级，会屏蔽head中外联样式，除非加！important（表示将此项变为最高级）

  

  ###### 获取元素样式

  - 关于兼容，是由于ie8及以下，大部分方法是由window所拥有，像谷歌等浏览器已经将方法传递给对象。
  - 且 大部分时候，ie8及以下 不拥有实现某功能的方法，或是与ie8以上的版本函数名不同，使用形式不同

  

  - 伪类： 已经存在的标签，选择器，如**a:hover**,指的是a中便签，会自动生效，选择的标签的内容，**向已存在的的选择器添加效果**
  - 伪元素： 虚拟元素，可以是任意的存在于标签内部的内容本身。
  - **div**::first-letter {  color: red; }
    - 对div 块中出现的第一个元素，添加颜色效果

  

  ###### getComputed(obj,null)["name"]

  ​	null表示不传递伪元素，有内容时会去获取body中某一个元素，name处为所要获取的样式名

  ###### obj.currentStyle["name"]

  ​	此方法为兼容ie8时使用

  ```js
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Document</title>
      <script>
        //   定义一个函数 兼容ie8 及ie8以上版本的浏览器
        //
        function getStyle(obj, name) {
          if (window.getComputedStyle) {
            return getComputedStyle(obj, null)[name];
          } else {
            return obj.currentStyle[name];
          }
        }
        window.onload = function () {
          var btn01 = document.getElementById("btn01");
          btn01.onclick = function () {
            /*  获取元素显示的样式
                      语法： 元素.currentStyle.样式名
                      （IE）
                      如当前没设置该样式，获取默认值
                      如宽度未设置，返回auto
  
              其他兼容浏览器： 使用的为window的方法
                  getComputedStyle()
                      语法：两个参数
                          第一个：要获取样式的元素
                          第二个： 传递一个伪元素，一般为null
                      如当前没设置样式，获取的值为真实值，具体的长度
          */
            var box = document.getElementById("box");
            //  使用函数时 需要传递字符串
            var a = getComputedStyle(box, null)["width"];
            alert(a);
            var a = getStyle(box, "background-color");
            alert(a);
          };
        };
      </script>
      <style>
        #box {
          height: 300px;
        }
      </style>
    </head>
    <body>
      <div id="box" style="width: 300px; background-color: red"></div>
      <button id="btn01">获取元素样式</button>
    </body>
  </html>
  
  ```



##### 其他样式相关的属性

在样式中，设置 **overflow:**对一个父元素设置，为其内部设置虚拟空间，如div块中含有另一个子元素块时，子元素块比父元素大，内嵌形成滚动滑轮 不会溢出

###### obj.offersetParent

​	获取当前元素 距离最近开启了定位的 祖先元素

###### obj.clientWidth - obj.clientHeight 

​	 获得可视宽度 （为数值，不带px可用于计算）

​		获取可视高度

###### obj.offsetLeft - obj.offsetTop

​	当前元素相对于父元素的水平偏移量

​		垂直偏移量

###### obj.scrollHeight -  obj.scrollWidth

​	滚动区域高度 和 滚动区域宽度 

​		一般选择的父元素定义了 overflow的那个元素

###### obj.scrollLeft  - obj.scrollTop

​	滚轮 滚动的水平距离 和垂直距离



```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #box1 {
        width: 200px;
        height: 200px;
        background-color: #bfa;
      }
      #box2 {
        width: 200px;
        padding-left: 10px;
        height: 200px;
        background-color: rgb(70, 120, 58);
      }
      #box4 {
        width: 200px;
        height: 300px;
        background-color: #bfa;
        /* 子元素比此元素大时 不会溢出，内嵌形成滚动滑轮 */
        overflow: auto;
        float: left;
      }
      #box5 {
        width: 300px;
        height: 600px;
        background-color: yellow;
      }
      #box2 {
        float: right;
      }
    </style>
    <script>
      window.onload = function () {
        var box1 = document.getElementById("box1");
        var btn01 = document.getElementById("btn01");

        btn01.onclick = function () {
          // clientWith 和 clientHeight获取元素的可见宽度和高度
          // 不带px 可用于计算
          console.log(box1.clientWidth + box1.clientHeight);
          console.log(box1.clientWidth + box1.clientHeight);

          // offersetParent   获取当前元素的定位父元素
          //        -会获取距离最近的开启了定位的祖先元素： 包含块
          var op = box1.offsetParent;
          console.log(op.id);

          /*    offersetLeft - 当前元素相对于父元素的水平偏移量
                offsetTop  -垂直偏移量
           */
          //   与定义了位置属性 包含块的左边距
          console.log(box1.offsetLeft);
          console.log(box1.offsetTop);

          // clientHeight clientWidth  可视窗高度 和宽度
          console.log("可视窗高度" + box4.clientHeight);
          console.log("可视窗宽度" + box4.clientWidth);

          //   scrollWidth  scollHeight 获得滚动区域的宽度和高度
          console.log("滚动区域宽度" + box4.scrollHeight);
          console.log("滚动区域高度" + box4.scrollWidth);

          //   scrollLeft and scrollTop 水平和垂直滚动条的移动距离
          console.log("水平滚动条滚动的距离" + box4.scrollLeft);
          console.log("垂直滚动条滚动的距离" + box4.scrollTop);
        };
      };
    </script>
  </head>
  <body>
    <button id="btn01">按钮</button>
    <div id="box4" style="position: relative">
      <div id="box5" style="position: relative"></div>
    </div>
    <div id="box2" style="position: relative">
      <div id="box1"></div>
    </div>
  </body>
</html>

```

​	

#####  滚动滑轮的注册

###### 	.onsroll = function(){ }

​		绑定滚动事件

此案例 主要是使用到 scrollHeight （可滚动高度） - scrollTop（滚动条滚动距离） ==  clientHeight （可视高度）

 **disabled**： 禁用功能 ) 

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {
        /*
                垂直滚动条 到底时使表单项可用
                onscroll
                 -该事件会元素滚动时触发

            */
        //    为info滚动条绑定一个滚动的事件
        //  onscroll 滚动事件
        info.onscroll = function () {
          var info = document.getElementById("info");
          // 获取两个表单项
          var inputs = document.getElementsByTagName("input");
          if (info.scrollHeight - info.scrollTop == info.clientHeight) {
            // disabled 为禁用功能， 将禁用功能取消则不禁用
            inputs[0].disabled = false;
            inputs[1].disabled = false;
          }
        };
      };
    </script>
    <style>
      #info {
        width: 300px;
        height: 500px;
        background-color: #bfa;
        overflow: auto;
      }
    </style>
  </head>
  <body>
    <h3>欢迎亲爱的用户注册</h3>
    <p id="info">
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
      亲爱的用户，请仔细阅读以下协议 亲爱的用户，请仔细阅读以下协议
    </p>
    <!-- disable 默认禁用 -->
    <input type="checkbox" disabled="disabled" />我已仔细阅读协议，一定遵守
    <input type="submit" value="注册" disabled="disabled" />
  </body>
</html>

```



##### 事件对象- event

###### 	obj.onmousemove(event)function(){}

- ​	event事件对象： 在括号内传递此参数时，每次移动鼠标时，浏览器会传入此事件对象，该对象含有当前事件相关的一切信息，如鼠标坐标，键盘输入等

###### 	event.clientX - event.clientY

​		鼠标的横纵坐标

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>

    <script>
      window.onload = function () {
        // 当鼠标在areaDiv移动时，在showMsg显示鼠标的坐标
        var areaDiv = document.getElementById("areaDiv");
        var showMsg = document.getElementById("showMsg");

        // onmousemove - 事件鼠标移动触发
        /* 事件对象
                - 当事件的响应函数被触发时，浏览器每次都会将一个事件对象作为实参传递进响应函数
                事件对象中封装了当前事件相关的一切信息，如鼠标的坐标，滚轮滚动方向 键盘的按键被按下 
        */
        areaDiv.onmousemove = function (event) {
          /* 
            在Ie8中，响应函数被触发时，浏览器不会传递事件对象
            在Ie8及以下的浏览器中，该事件对象作为window对象的属性保存
          */
          // 在showMsg 中显示鼠标的坐标
          //   之后兼容的版本都储存在函数内，函数内有此event属性
          if (!event) {
            event = window.event;
          }
          var x = event.clientX;
          var y = event.clientY;
          //   在showMsg 显示鼠标的坐标
          showMsg.innerHTML = "x = " + x + ", y = " + y;
        };
      };
    </script>
  </head>
  <body>
    <div
      id="areaDiv"
      style="
        width: 300px;
        height: 200px;
        border: 1px solid black;
        background-color: aliceblue;
      "
    ></div>
    <div
      id="showMsg"
      style="width: 300px; height: 70px; border: 1px solid rgb(93, 103, 103)"
    ></div>
  </body>
</html>

```



##### div跟随鼠标移动

###### document.documentElement.scrollTop -document.documentElement.scrollLeft

​	获取滚轮条的滚动距离

加上鼠标的可视 水平和垂直 距离

 event.X + document.documentElement.scrollLeft

 event.Y + document.documentElement.scrollTop

等于div的偏移量  实现div随鼠标移动

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        background-color: aqua;
        position: absolute;
      }
    </style>
    <script>
      window.onload = function () {
        /* 
                使div跟随鼠标移动
            */

        var box1 = document.getElementById("box1");
        //绑定鼠标移动事件
        document.onmousemove = function (event) {
          //  clientX 和 clientY 可见窗口的坐标

          //  获取滚动条距离
          /* var st = document.body.scrollTop 
           html 中的滚动  ： 谷歌等都兼容此条件

            document.documentElement.scrollTop;          
        */ var st = document.documentElement.scrollTop;
          var sl = document.documentElement.scrollLeft;
          //   pageX 和 pageY 获取鼠标相对页面的坐标
          //  但是ie中不兼容
          var left = event.clientX;
          var top = event.clientY;

          // 设置div的偏移量
          box1.style.left = left + sl + "px";
          box1.style.top = top + st + "px";
        };
      };
    </script>
  </head>
  <body style="height: 2000px; width: 1900px">
    <div id="box1"></div>
  </body>
</html>

```



##### 事件的冒泡

######   （bubble）事件由子元素向外触发

- event.cancelBubble = true;
  - 在该事件的函数中传递event参数，并添加此条语句

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      #box1 {
        width: 200px;
        height: 200px;
        background-color: yellowgreen;
      }
      #s1 {
        background-color: rgb(84, 89, 76);
      }
    </style>
    <script>
      window.onload = function () {
        /*
            事件的冒泡（Bubble）
             - 所谓的冒泡就是事件的向上传导，当后代元素中的事件被触发时，其祖先元素的相同事件也会被触发
             - 在开发中大部分情况冒泡都是有用的
             -   如果不希望发生事件冒泡可以通过事件对象来取消冒泡 
             */
        var s1 = document.getElementById("s1");
        s1.onclick = function (event) {
          console.log("我是span单击响应函数");

          //   取消冒泡
          // 可以将事件对象中的cancelBuble设置为true,即可取消冒泡
          event.cancelBubble = true;
        };
        // 为div绑定单击响应函数
        var box1 = document.getElementById("box1");
        box1.onclick = function () {
          console.log("我是box1单击响应函数");
        };
        // 为body绑定单击响应函数
        document.body.onclick = function () {
          console.log("我是body单击响应函数");
        };
      };
    </script>
  </head>
  <body>
    <div id="box1">我是box1 <span id="s1">我是span</span></div>
  </body>
</html>

```



##### 事情的委派

​      指将事件统一绑定给元素的共同祖先，当后代元素上的事件触发时，会一直冒泡到祖先元素，从而通过祖先元素的响应函数来处理事件

​      事件委派是利用了**冒泡**，通过委派可以减少事件绑定的次数，提高程序的性能

​	为相同事件统一绑定，即使后添加的事件也能一并绑定

触发时，我们只希望期望对象触发 可用 **target**

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {
        var u1 = document.getElementById("u1");
        var btn01 = document.getElementById("btn01");
        btn01.onclick = function () {
          // 创建li
          var li = document.createElement("li");
          li.innerHTML = "<a href='javascript:;' class='link'>新建的超链接</a>";
          u1.appendChild(li);
        };
        //为每一个超链接绑定一个单击函数- 获取所有的a
        var allA = document.getElementsByTagName("a");
        for (var i = 0; i < allA.length; i++) {
          allA[i].onclick = function () {
            console.log("我是a单击函数");
          };
        }
        /* 
            
         */
        // 我们希望 只绑定一次事件，即可应用到多个的元素，即使元素是后添加的
        /* 
            我们可以尝试将其绑定给元素的共同的祖先元素
            事件的委派
                -指将事件统一绑定给元素的共同祖先，当后代元素上的事件触发时，会一直冒泡到祖先元素
                    从而通过祖先元素的响应函数来处理事件
                - 事件委派是利用了冒泡，通过委派可以减少事件绑定的次数，提高程序的性能
        */
        u1.onclick = function (event) {
          // 如果触发事件的对象是我们期望的元素，则执行则不执行
          // event.target 谁触发事件 target就是谁
          if (event.target.className == "link")
            console.log("我是ul单击响应函数");
        };
      };
    </script>
  </head>
  <body>
    <button id="btn01">添加链接</button>
    <ul id="u1">
      <li><a href="javascript:;" class="link">超链接1</a></li>
      <li><a href="javascript:;" class="link">超链接2</a></li>
      <li><a href="javascript:;" class="link">超链接3</a></li>
    </ul>
  </body>
</html>

```



##### 事件的绑定

###### 	obj.addEventListner(eventStr,callback,false)

​		为同一事件绑定多个函数，如用多个.onclic函数绑定后，则后出现的函数会覆盖前面的函数，只有最后定义的函数生效。

​	eventStr 为事件 去on 

​	callback： 回调函数，所要执行的事件

兼容ie8及以下使用的为 :

###### 	obj.attachEvent("on" + eventStr, function(){callback.call(obj)})

​	由于ie8中对象不具备 callback，所以得用一个匿名函数，让window调用后，指定callback.call（obj） obj执行 

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {
        var btn01 = document.getElementById("btn01");
        btn01.onclick = function () {
          console.log("这是首个绑定函数");
        };
        // onclcik 的方法，后一个会覆盖前一个
        btn01.onclick = function () {
          console.log("这是第二个绑定函数");
        };
        // // addEventListener()
        //     - 通过这个方法可为元素绑定函数
        //     - 参数
        //         1. 事件的字符串,不要on
        //         2. 回调函数,当事件触发时函数会被调用
        //         3. 是否在捕获阶段触发事件，需要一个布尔值，一般传false
        /*  使用此方法可以同时为一个元素的相同事件绑定多个响应函数
                这样当事件被触发时，响应函数将会按照函数的绑定顺序执行
         */
        //   --------------------分割线------------------------
        //  此方法不支持ie8以下的浏览器
        // btn01.addEventListener(
        // "click",
        // function () {
        //     console.log("这是addEventListenner首个绑定函数");
        // },
        // false
        // );
        // btn01.addEventListener(
        // "click",
        // function () {
        //     console.log("这是第二个绑定函数，按绑定顺序执行");
        // },
        // false
        // );

        //   --------------------分割线------------------------
        // 兼容 iE8 的 attachEvent
        // btn01.attachEvent("onclick", function () {
        //   alert("11");
        //   console.log("这是attachEent第一个绑定函数");
        // });
        // btn01.attachEvent("onclick", function () {
        //   console.log("这是第二个绑定函数,倒序执行");
        // });
        bind(btn01, "click", function () {
          alert(this);
          console.log("我是兼容后的版本函数~");
        });
      };

      //   定义函数为指定元素绑定响应函数;
      /*
        参数： obj要绑定事件的对象
        eventStr 事件的字符串
        callback 回调函数
        */

      function bind(obj, eventStr, callback) {
        if (obj.addEventListener) {
          //大部分函数兼容的方式
          obj.addEventListener(eventStr, callback, false);
        } else {
          // ie8及以下
          //  由于ie8下 callback 属于window运行，所以我们需要使用一个隐匿函数
          //   callback.call(obj)
          //   由window指定 btn01运行
          obj.attachEvent("on" + eventStr, function () {
            callback.call(obj);
          });
        }
      }
    </script>
  </head>
  <body>
    <button id="btn01">绑定事件</button>
  </body>
</html>

```



##### 事件的传播

​	w3c 综合两方  将事件传播分为 三个阶段

1. 捕获阶段
	- 在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
2. 目标阶段
    -事件捕获到目标元素，捕获结束开始在目标元素上触发事件
3. 冒泡阶段
    - 事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件

   -如果希望在捕获阶段就触发事件，可以将 addEventListener()第三个参数设置为true
​            
 -   iE8以下没有捕获阶段

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {
        var box1 = document.getElementById("box1");
        var box2 = document.getElementById("box2");
        var box3 = document.getElementById("box3");
        /* 事件的传播
            -关于事件的传播 网景公司 和微软公司 有不同理解 
            - 微软公司认为事件 由内往外传播
                    由子元素向祖先元素上传播，事件应该在冒泡阶段执行
            - 网景公司相反，从外至内 
            -  （事件的捕获阶段 ）
        w3c 综合两方  将事件传播分为 三个阶段
            1. 捕获阶段
                - 在捕获阶段时从最外层的祖先元素，向目标元素进行事件的捕获，但是默认此时不会触发事件
            2. 目标阶段
                -事件捕获到目标元素，捕获结束开始在目标元素上触发事件
            3. 冒泡阶段
                - 事件从目标元素向他的祖先元素传递，依次触发祖先元素上的事件
            
            -如果希望在捕获阶段就触发事件，可以将 addEventListener()第三个参数设置为true
            
                -   iE8以下没有捕获阶段
            */

        bind(box1, "click", function () {
          console.log("我是box1的响应函数");
        });
        bind(box2, "click", function () {
          console.log("我是box2的响应函数");
        });
        bind(box3, "click", function () {
          console.log("我是box3的响应函数");
        });
      };
      function bind(obj, eventStr, callback) {
        if (obj.addEventListener) {
          //大部分函数兼容的方式
          obj.addEventListener(eventStr, callback, false);
        } else {
          // ie8及以下
          //  由于ie8下 callback 属于window运行，所以我们需要使用一个隐匿函数
          //   callback.call(obj)
          //   由window指定 btn01运行
          obj.attachEvent("on" + eventStr, function () {
            callback.call(obj);
          });
        }
      }
    </script>
    <style>
      #box1 {
        width: 300px;
        height: 300px;
        background-color: yellowgreen;
      }
      #box2 {
        width: 200px;
        height: 200px;
        background-color: yellow;
      }
      #box3 {
        width: 150px;
        height: 150px;
        background-color: aquamarine;
      }
    </style>
  </head>
  <body>
    <div id="box1">
      <div id="box2">
        <div id="box3"></div>
      </div>
    </div>
  </body>
</html>

```



##### div拖拽

​	共三个按键： 鼠标按下 -  鼠标按住移动 - 鼠标松开

处理按下 方块即为所点位置 移动

###### 拖拽优化补充

​	当按住后 ＋ ctrl A选中页面所有元素移动时，会对我们实际所要的效果产生影响， 如选中文本进行搜索

###### 	setCapture（）

​		将所有相关事件捕获到自身上，

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function (event) {
        //推拽 box1元素
        /*  `   1. 当鼠标在被拖拽元素上按下时，开始拖拽 onmousedown
                2.当鼠标移动时，被拖拽元素跟随移动  onmousemove
                3. 当鼠标松开时，被拖拽元素固定在当前位置 onmouseup
                */
        var box1 = document.getElementById("box1");

        box1.onmousedown = function (event) {
          var ol = event.clientX - box1.offsetLeft;
          var ot = event.clientY - box1.offsetTop;

          //  设置box1捕获多有鼠标按下的事件
          // if (box1.setCapture) {
          //   box1.setCapture();
          // }

          //  同上  语句优化
          box1.setCapture && box1.setCapture();

          document.onmousemove = function (event) {
            // 当鼠标元素被拖拽 元素跟随鼠标移动
            // 获取鼠标的坐标
            var left = event.clientX - ol;
            var top = event.clientY - ot;

            //修改Box1的位置

            box1.style.left = left + "px";
            box1.style.top = top + "px";
          };
          //   c此方法在多个块存在页面时，无法在其他块上松
          // 不能绑定box1.onmouseup, 绑定的应为documentElement
          document.onmouseup = function () {
            // 当鼠标松开时，被拖拽元素固定在当前位置 onmouseup
            document.onmousemove = null;
            // 需为鼠标松开 设置null
            document.onmouseup = null;

            // 鼠标松开时，取消对事件的捕获
            if (box1.releaseCapture) {
              box1.releaseCapture();
            }
          };
          //避免按中ctrl 全选，内容搜索， 所以需返回false
          return false; //取消浏览器本身的搜索功能
        };
      };
    </script>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        background-color: aqua;
        position: absolute;
      }
      #box2 {
        width: 100px;
        height: 100px;
        background-color: rgb(16, 115, 115);
        position: absolute;
        left: 200px;
        top: 200px;
        position: absolute;
      }
    </style>
  </head>
  <body>
    <div id="box1"></div>
    <div id="box2"></div>
  </body>
</html>

```



##### 拖拽封装代码

```js
   function drag(obj) {
        //推拽 obj元素
        /*  `   1. 当鼠标在被拖拽元素上按下时，开始拖拽 onmousedown
                      2.当鼠标移动时，被拖拽元素跟随移动  onmousemove
                      3. 当鼠标松开时，被拖拽元素固定在当前位置 onmouseup
                      */
        // 封装BY ID 需要改为 形参
        var obj = document.getElementById(obj);
        obj.onmousedown = function (event) {
          var ol = event.clientX - obj.offsetLeft;
          var ot = event.clientY - obj.offsetTop;

          //  设置obj捕获多有鼠标按下的事件
          // if (obj.setCapture) {
          //   obj.setCapture();
          // }

          //  同上  语句优化
          obj.setCapture && obj.setCapture();
          document.onmousemove = function (event) {
            // 当鼠标元素被拖拽 元素跟随鼠标移动
            // 获取鼠标的坐标
            var left = event.clientX - ol;
            var top = event.clientY - ot;

            //修改obj的位置

            obj.style.left = left + "px";
            obj.style.top = top + "px";
          };
          //   c此方法在多个块存在页面时，无法在其他块上松
          // 不能绑定obj.onmouseup, 绑定的应为documentElement
          document.onmouseup = function () {
            // 当鼠标松开时，被拖拽元素固定在当前位置 onmouseup
            document.onmousemove = null;
            // 需为鼠标松开 设置null
            document.onmouseup = null;

            // 鼠标松开时，取消对事件的捕获
            if (obj.releaseCapture) {
              obj.releaseCapture();
            }
          };
          //避免按中ctrl 全选，内容搜索， 所以需返回false
          return false; //取消浏览器本身的搜索功能
        };
      }
    </script>
  
```



##### 鼠标滚轮事件

**event.wheelDelta** 获取鼠标滚轮滚动的方向

​	向上：120 向下 -120

**wheelDelta** 同上

​	向上 -3 向下 3

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <script>
      window.onload = function () {
        var box1 = document.getElementById("box1");
        // 为box1绑定一个鼠标滚轮滚动的事件
        /*
              onmousewheel鼠标滚轮滚动的事件，会在滚动时触发

      */
        box1.onmousewheel = function (event) {
          {
            // event.wheelDelta 可获取鼠标滚轮滚动的方向
            /*      向上滚120  向下滚-120
                wheelDelta 不看大小 只看正负

                火狐不支持 wheelDelta 
                    event.detail 获取滚动的方向 
                    向上滚 -3， 向下滚 3

            判断鼠标滚轮滚动的方向
        */
            if (event.wheelDelta > 0 || event.detail < 0) {
              box1.style.height = box1.clientHeight - 10 + "px";
            } else {
              box1.style.height = box1.clientHeight + 10 + "px";
            }
          }
          //   火狐需要使用 event.prebentDefault(), ie8不承认

          //   当页面长时，滚动条跟动，false取消行为
          return false;
          // bind(box1, "DOMMouseScroll", function () {
          // alert("滚了没有啊~~");
          // });

          // function bind(obj, eventStr, callback) {
          // if (obj.addEventListener) {
          //     //大部分函数兼容的方式
          //     obj.addEventListener(eventStr, callback, false);
          // } else {
          //     // ie8及以下
          //     //  由于ie8下 callback 属于window运行，所以我们需要使用一个隐匿函数
          //     //   callback.call(obj)
          //     //   由window指定 btn01运行
          //     obj.attachEvent("on" + eventStr, function () {
          //     callback.call(obj);
          //     });
          // }
        };
      };
    </script>
    <style>
      #box1 {
        width: 100px;
        height: 100px;
        min-height: 50px;
        background-color: antiquewhite;
      }
    </style>
  </head>
  <body>
    <div id="box1"></div>
  </body>
</html>

```



