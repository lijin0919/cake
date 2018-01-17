//公共的js文件

//<------------导航条商品分类鼠标移入---------->


    $().ready(function () {
        //获取到该div
        $(".navbar_type").mouseover(function () {
            $(".type_list").css("display","block")
        });
        $(".navbar_type").mouseout(function () {
            $(".type_list").css("display","none")
        });
    });