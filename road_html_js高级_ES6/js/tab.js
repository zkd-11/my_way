var that;
class Tab{
    constructor(id){
       that = this;
        // 获取元素
        this.main = document.querySelector(id);
        
        this.add = this.main.querySelector(".tabadd"); 
        // 获取 li的父元素   
        this.ul = this.main.querySelector('.firstnav ul')

        //获取section的父元素
        this.fsection = this.main.querySelector(".tabscon")
        
        this.init(); //构造函数调用init初始化
        
     

    }
    init(){
        this.updateNode();
        //   init 初始化操作让相关的元素绑定事件
        for (var i=0; i<this.lis.length; i++){
            this.lis[i].index = i;
            this.lis[i].onclick = this.toggleTab;
            this.remove[i].onclick = this.removeTab;
            // 为span标签文本修改 绑定双击事件
            this.spans[i].ondblclick =this.editTab;
            this.sections[i].ondblclick =this.editTab;
        }

        this.add.onclick = this.addTab;
    }

    // 更新元素
    updateNode(){
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
        // 将新增的元素重新获取，都需放入updateNode中
        this.remove = this.main.querySelectorAll(".icon-guanbi")
        // 更新所有span标签
        this.spans = this.main.querySelectorAll(".firstnav li span:first-child");

    }
    // 1. 切换功能
    toggleTab(){
        that.clearClass();
        this.className = 'liactive';
        that.sections[this.index].className = "conactive";
        
    }
    // 清除所有 section 和 li类
    clearClass(){
        for (var i=0; i<this.lis.length; i++) {
            this.lis[i].className = '';
            this.sections[i].className = '';
        }
        this.lis = this.main.querySelectorAll("li");
        this.sections = this.main.querySelectorAll("section");
    }
    // 2. 添加功能 
    addTab(){
        console.log(that.ul)
        console.log(that.remove)
        that.clearClass();
        var random = Math.random();
        var li = ' <li class="liactive"><span >新选项卡'+'&nbsp;'+'</span><span class="icon-guanbi">x&nbsp;</span> </li>'
        var section = ' <section class="conactive">新测试内容'+ random +'</section>'
        that.ul.insertAdjacentHTML('beforeend', li);
        that.fsection.insertAdjacentHTML('beforeend', section);
        that.init();
    }
    // 3. 删除功能
    removeTab(e){

        e.stopPropagation(); //阻止冒泡 防止触发li的切换点击事件
        var index = this.parentNode.index;
        console.log(index);
        // 根据索引号删除对应的li 和 section ， remove()方法可以直接删除指定的元素
        that.lis[index].remove();
        that.sections[index].remove();
        

        // 手动点击事件,不需要 鼠标触发
        
        //此功能 用于删除第一个时，后面的文本内容为选中状态 
        // if(that.lis.length>1 && index ==-1)
        // that.lis[index+1].click();   //不清楚 index+1 为什么为下一个，未重置化，原本为0索引，删除后，index-- ，想要让下一个应该为1索引才对，为什么index被重置化
        // console.log(index);
    //   长度大于1时 才执行点击
    
    // 如删除为当前显示选中之外的tab 维持现状
        
    if(document.querySelector('.liactive')) return;
    // 删除当前显示界面，将上一页文本自动显示内容
        index--;
        that.lis[index] && that.lis[index].click();
        that.init();
        

    }
    // 4. 修改功能
    editTab(){
        var str = this.innerHTML;
        // 双击禁止选中文字
        window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty()
        this.innerHTML = '<input type="text"/>';
        var input = this.children[0];
        input.value = str;
        input.select(); //文本框内容处理为 选中状态
        // 当离开文本框时，将值赋值给span， blur 焦点事件
        input.onblur = function(){
            this.parentNode.innerHTML = this.value;
        }
        // 按下回车 将文本框内容赋值给span
        input.onkeyup = function(e){
            if(e.keyCode === 13){
                // 手动调用表单失去焦点事件 
                this.blur();
            }
        }
    } 
}
    new Tab("#tab"); 