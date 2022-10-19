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

1. 数据类型

<img src="html  学习日报.assets/image-20221019215141180.png" alt="image-20221019215141180" style="zoom:50%;" />



<img src="html  学习日报.assets/image-20221019215237733.png" alt="image-20221019215237733" style="zoom:50%;" />



双引号内容的隔开需要使用； 无引号需要用 ，

<img src="html  学习日报.assets/image-20221019215428545.png" alt="image-20221019215428545" style="zoom:50%;" />



计时器  console.time("命名")  内需加双引号

​			执行语句

​		console.timeEnd("命名")

<img src="html  学习日报.assets/image-20221019215559625.png" alt="image-20221019215559625" style="zoom:50%;" />



<img src="html  学习日报.assets/image-20221019215636354.png" alt="image-20221019215636354" style="zoom:50%;" />



栈和堆， 一般变量的是在栈内生成，对象的变量也是（指向堆中的空间）

​	栈内变量 == 栈内变量 （比较的是数值）

​	对象变量 ！== ，即使内容相同，所指向的地址不同，属于不同的两个堆空间

<img src="html  学习日报.assets/image-20221019215901569.png" alt="image-20221019215901569" style="zoom:50%;" />



传入函数的实参数量 和 形参之间 的关系

大于不会报错（结果可能有误），小于会出现 形参未被赋值，未定义

<img src="html  学习日报.assets/image-20221019215922270.png" alt="image-20221019215922270"  />



函数就是对象，对象与函数均可以作为实参传递到形参，并且函数内可嵌套函数



立即执行函数 需要以（） 类似c中的无参函数

​		( function(){

   		   alert("我是立即执行函数")

  		  })

执行方式； （）;
