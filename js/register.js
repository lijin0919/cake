// 就绪函数
$().ready(function(){
    //让当前表单调用validate方法，实现表单验证功能
    $("#commentForm").validate({
        onfocusout: function(element) { $(element).valid(); },
        rules: {     //配置验证规则，key就是被验证的dom对象，value就是调用验证的方法(也是json格式)
            username: {
                required: true,  //必填。如果验证方法不需要参数，则配置为true
                rangelength: [6, 12]
            },
            password: {
                required: true,
                rangelength: [6, 12]
            },
            phone: {
                required: true,
                digits:true,
                minlength: 11
            }
        },
        messages: {
            username: {
                required: "请输入用户名（必填）",
                rangelength: $.validator.format("用户名长度在必须为：{0}-{1}之间")
            },
            password: {
                required: "请输入密码（必填）",
                rangelength: $.validator.format("字段长度必须为：{0}-{1}之间")
            },
            phone: {
                required: "请输入用户电话号码（必填）",
                digits:"请输入的号码格式不正确",
                minlength:"请您输入11位手机号码"
            }
        }
    })
});

// {
//     onfocusout:true,
//         rules:{
//     username:"required",
//         username:{
//         required:true,
//             minlength:
//     }
// },
//     message:{
//         username:{
//             required:"请输入正确的用户名",
//                 minlength:"用户名不能小于8个"
//         }
//     }
// });