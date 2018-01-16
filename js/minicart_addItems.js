$().ready(function () {
    //《-----------------迷你购物车-----------------》
//item_count6为迷你购物车内商品夜礼服的数量
var item_count6=1;
//item_count5为迷你购物车内商品芒果列车的数量
var item_count5=1;
//item_count4为迷你购物车内商品玫瑰物语的数量
var item_count4=1;
//item_count3为迷你购物车内商品留恋之恋的数量
var item_count3=1;
//totalPrice为迷你购物车内商品总价
var totalPrice=0;
//totalNUm为迷你购物车内总件数
    var totalNUm=4;
    /*迷你购物车内每次点击某个商品的增加按钮，商品数量数量增加1个,并且重新计算总价*/
    //商品夜礼服的增加按钮功能
    $("#btn-info6").click(function () {
        item_count6=parseInt($(this).prev().val()) + 1;
        // $(this).prev() 就是当前元素的上一个元素，即 类名为text_box的标签
        $(this).prev().val(item_count6);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    //商品芒果列车的增加按钮功能
    $("#btn-info5").click(function () {
        item_count5=parseInt($(this).prev().val()) + 1;
        // $(this).prev() 就是当前元素的上一个元素，即 类名为text_box的标签
        $(this).prev().val(item_count5);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    //商品玫瑰物语的增加按钮功能
    $("#btn-info4").click(function () {
        item_count4=parseInt($(this).prev().val()) + 1;
        // $(this).prev() 就是当前元素的上一个元素，即 类名为text_box的标签
        $(this).prev().val(item_count4);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    //商品留恋之恋的增加按钮功能
    $("#btn-info3").click(function () {
        item_count3=parseInt($(this).prev().val()) + 1;
        // $(this).prev() 就是当前元素的上一个元素，即 类名为text_box的标签
        $(this).prev().val(item_count3);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });


    /*迷你购物车内每次点击某个商品的减少按钮，商品数量数量减少1个,并且重新计算总价*/
    //商品夜礼服的减少按钮功能
    $("#btn-warning6").click(function () {
        item_count6=parseInt($(this).next().val()) - 1;
        //当商品数量减少到0或者小于0的时候，我们设置其为0
        if(parseInt(eval(item_count6))<=0){
            item_count6=0;
        }
        // $(this).next() 就是当前元素的下一个元素，即 类名为text_box的标签
        $(this).next().val(item_count6);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    //商品芒果列车的减少按钮功能
    $("#btn-warning5").click(function () {
        item_count5=parseInt($(this).next().val()) - 1;
        //当商品数量减少到0或者小于0的时候，我们设置其为0
        if(parseInt(eval(item_count5))<=0){
            item_count5=0;
        }
        // $(this).next() 就是当前元素的下一个元素，即 类名为text_box的标签
        $(this).next().val(item_count5);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    //商品玫瑰物语的减少按钮功能
    $("#btn-warning4").click(function () {
        item_count4=parseInt($(this).next().val()) - 1;
        //当商品数量减少到0或者小于0的时候，我们设置其为0
        if(parseInt(eval(item_count4))<=0){
            item_count4=0;
        }
        // $(this).next() 就是当前元素的下一个元素，即 类名为text_box的标签
        $(this).next().val(item_count4);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    //商品留恋之恋的减少按钮功能
    $("#btn-warning3").click(function () {
        item_count3=parseInt($(this).next().val()) - 1;
        //当商品数量减少到0或者小于0的时候，我们设置其为0
        if(parseInt(eval(item_count3))<=0){
            item_count3=0;
        }
        // $(this).next() 就是当前元素的下一个元素，即 类名为text_box的标签
        $(this).next().val(item_count3);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });


    /*迷你购物车内每次点击某个商品的删除按钮，则将此商品移除,并且重新计算总价*/
    //商品夜礼服的删除按钮功能
    $("#btn-danger6").click(function () {
        //根据类名删除该商品所在标签容器
        $(".item6-in-minicart-a").remove();
        //重新计算订单总金额totalPrice
        item_count6=0;
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    //商品芒果列车的删除按钮功能
    $("#btn-danger5").click(function () {
        //根据类名删除该商品所在标签容器
        $(".item5-in-minicart-a").remove();
        //重新计算订单总金额totalPrice
        item_count5=0;
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    //商品玫瑰物语的删除按钮功能
    $("#btn-danger4").click(function () {
        //根据类名删除该商品所在标签容器
        $(".item4-in-minicart-a").remove();
        //重新计算订单总金额totalPrice
        item_count4=0;
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    //商品留恋之恋的删除按钮功能
    $("#btn-danger3").click(function () {
        //根据类名删除该商品所在标签容器
        $(".item3-in-minicart-a").remove();
        //重新计算订单总金额totalPrice
        item_count3=0;
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrice").text(totalPrice);
        //重新计算购物车内总件数
        totalNUm=item_count6+item_count5+item_count4+item_count3;
        $(".glyphicon-shopping-cart").text(totalNUm)
    });
    /*mini迷你购物车窗口事件-----------------------------------------*/
    //迷你迷你购物车页面鼠标悬停和失去触发事件
    //悬停时让迷你迷你购物车不显示
    $("#cart-img").mouseover(function () {
        // alert(123);
        $("#minicart-show").css("display","block");
    });
    //失去时时让迷你迷你购物车不显示
    $("#cart-img").mouseout(function () {
        $("#minicart-show").css("display","none");
    });

    // //当点击迷你迷你购物车的商品数量的"+"时，增加商品数量1个
    // $(".add").click(function() {
    //     // $(this).prev() 就是当前元素的前一个元素，即 text_box
    //     $(this).prev().val(parseInt($(this).prev().val()) + 1);
    //     setTotal();
    // });
    // //当点击迷你迷你购物车的商品数量的"-"时，减少商品数量1个
    // $(".min").click(function() {
    //     // $(this).next() 就是当前元素的下一个元素，即 text_box
    //     $(this).next().val(parseInt($(this).next().val()) - 1);
    //     setTotal();
    // })
});//ready



