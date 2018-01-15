// 就绪函数
$().ready(function () {
    $("#commentForm").validate({
        onfocusout:true,
        rules:{
            username:"required",
            username:{
                required:true,
                minlength:8
            }
        },
        message:{
            username:{
                required:"请输入正确的用户名",
                minlength:"用户名不能小于8个"
            }
        }
    });

});