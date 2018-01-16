//点击注册提交后的触发事件

$.validator.setDefaults({
    submitHandler: function(form) {
        alert("提交事件!");
    }
});



// 就绪函数
    $().ready(function(){
        //让当前表单调用validate方法，实现表单验证功能
    $("#commentForm").validate({
        // debug:true,
        focusCleanup:true,
        onfocusout: function(element) { $(element).valid(); },
        rules: {     //配置验证规则，key就是被验证的dom对象，value就是调用验证的方法(也是json格式)
            username: {
                checkName:true,
                required: true,  //必填。如果验证方法不需要参数，则配置为true
                rangelength: [6, 12]
            },
            password: {
                checkPwd:true,
                required: true,
                rangelength: [6, 12]
            },
            phone: {
                required: true,
                minlength: 11,
                maxlength:11,
                isphoneNum:true
            }
        },
        messages: {
            username: {
                required: "*请输入用户名（必填）",
                rangelength: $.validator.format("*用户名长度在必须为：{0}-{1}之间"),
                checkName:"*只允许6-16位英文字母、数字或者下画线！"
            },
            password: {
                required: "*请输入密码（必填）",
                rangelength: $.validator.format("*字段长度必须为：{0}-{1}之间"),
                checkPwd:"*只允许2-10位英文字母、数字或者下画线！"
            },
            phone: {
                required: "*请输入用户电话号码（必填）",
                minlength:"请您输入11位手机号码",
                maxlength:"请您输入11位手机号码",
                isphoneNum:"*您输入的手机号码格式不正确"
            }
        }
    });


    //自定义正则表达式验证方法
    // 《------------------自定义验证用户名-----------------》
    $.validator.addMethod("checkName",function(value,element,params){
        var checkName = /^\w{2,10}$/g;
        return this.optional(element)||(checkName.test(value));
    });
    //《------------------自定义密码验证-------------------》
    $.validator.addMethod("checkPwd",function(value,element,params){
        var checkPwd = /^\w{6,16}$/g;
        return this.optional(element)||(checkPwd.test(value));
    });
    // 《-----------------自定义电话验证-------------------》
    $.validator.addMethod("isphoneNum", function(value, element,params) {
        // debugger;
        // var length = value.length;
        var mobile = /^1(3|4|5|7|8)\d{9}$/;
        return this.optional(element) || (mobile.test(value));
    });
});//ready
