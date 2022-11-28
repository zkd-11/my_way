window.onload = function(){
    var regtel = /^1[3|4|5|7|8|9]\d{9}$/ //手机号码的正则表达式
    var tel = document.querySelector('#tel');
    regexp(tel,regtel);
    
    var qq = document.querySelector("#qq");
    var regqq = /^[1-9]\d{4,}$/
    regexp(qq,regqq);

    var nc = document.querySelector("#nc");
    var regnc = /^[\u4e00-\u9fa5]{2,8}$/;
    regexp(nc,regnc);
   
    var msg = document.querySelector("#msg");
    var regmsg = /\d{6}$/;
    regexp(msg,regmsg);

    var pwd = document.querySelector('#pwd');
    var surepwd = document.querySelector('#surepwd');
    var regpwd = /^[a-zA-Z0-9_-]{6,16}$/;
    regexp(pwd,regpwd);
    
    function regexp(ele, reg){
        ele.onblur = function(){
            if(reg.test(this.value)){
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class = "success_icon"></i>输入正确';
            }
            else{
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = '<i class = "error_icon"></i>格式输入不正确';
    
            }
        }
    }
    
    surepwd.onblur = function(){
        if(this.value == pwd.value) {
        this.nextElementSibling.className = 'success';
        this.nextElementSibling.innerHTML = '<i class = "success_icon"></i>输入正确';
    }
    else{
        this.nextElementSibling.className = 'error';
        this.nextElementSibling.innerHTML = '<i class = "error_icon"></i>密码不一致';

    }
        
}
}