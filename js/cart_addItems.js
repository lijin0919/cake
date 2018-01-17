$().ready(function () {
    //《-----------------购物车-----------------》
    //count为购物车总数量
var count = 1;
//item_count6为购物车内商品夜礼服的数量
var item_count6=1;
//item_count5为购物车内商品芒果列车的数量
var item_count5=1;
//item_count4为购物车内商品玫瑰物语的数量
var item_count4=1;
//item_count3为购物车内商品留恋之恋的数量
var item_count3=1;
//totalPrice为购物车内商品总价
var totalPrice;
$(".item_add").click(function () {
    $(".card_num").text(count++);
    var json = {
        // title:"标题",
        msg:"添加购物车成功！",
        buttons:[
            { title:"继续购物",color:"blue",click:function(){
                //跳回当前页
                $(location).attr('href','#');
                // alert("你点了继续购物")
            } },
            { title:"立即结算",color:"red",click:function(){
                $(location).attr('href','cart.html');
                // alert("你点了立即结算")
            } }
        ]
    };
    $.alertView(json);

});


    // $().ready(function () {
    //     $("#testBtn").click(function () {
    //         $.alertView("你好")
    //     })
    // });



    /*购物车内每次点击某个商品的增加按钮，商品数量数量增加1个,并且重新计算总价*/
    //商品夜礼服的增加按钮功能
    $("#btn_info6").click(function () {
        item_count6++;
        $(".cart_item_num6").text("数量："+item_count6);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });
    //商品芒果列车的增加按钮功能
    $("#btn_info5").click(function () {
        item_count5++;
            $(".cart_item_num5").text("数量："+item_count5);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });
    //商品玫瑰物语的增加按钮功能
    $("#btn_info4").click(function () {
        item_count4++;
            $(".cart_item_num4").text("数量："+item_count4);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });
    //商品留恋之恋的增加按钮功能
    $("#btn_info3").click(function () {
        item_count3++;
            $(".cart_item_num3").text("数量："+item_count3);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });


    /*购物车内每次点击某个商品的减少按钮，商品数量数量减少1个,并且重新计算总价*/
    //商品夜礼服的减少按钮功能
    $("#btn_warning6").click(function () {
        item_count6--;
        //当商品数量减少到0或者小于0的时候，我们设置其为0
        if(parseInt(eval(item_count6))<=0){
            item_count6=0;
        }
            $(".cart_item_num6").text("数量："+item_count6);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });
    //商品芒果列车的减少按钮功能
    $("#btn_warning5").click(function () {
        item_count5--;
        //当商品数量减少到0或者小于0的时候，我们设置其为0
        if(parseInt(eval(item_count5))<=0){
            item_count5=0;
        }
            $(".cart_item_num5").text("数量："+item_count5);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });
    //商品玫瑰物语的减少按钮功能
    $("#btn_warning4").click(function () {
        item_count4--;
        //当商品数量减少到0或者小于0的时候，我们设置其为0
        if(parseInt(eval(item_count4))<=0){
            item_count4=0;
        }
            $(".cart_item_num4").text("数量："+item_count4);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });
    //商品留恋之恋的减少按钮功能
    $("#btn_warning3").click(function () {
        item_count3--;
        //当商品数量减少到0或者小于0的时候，我们设置其为0
        if(parseInt(eval(item_count3))<=0){
            item_count3=0;
        }
            $(".cart_item_num3").text("数量："+item_count3);
        //重新计算订单总金额totalPrice
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });


    /*购物车内每次点击某个商品的删除按钮，则将此商品移除,并且重新计算总价*/
    //商品夜礼服的删除按钮功能
    $("#btn_danger6").click(function () {
        $("#item_6").remove();
        //重新计算订单总金额totalPrice
        item_count6=0;
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });
    //商品芒果列车的删除按钮功能
    $("#btn_danger5").click(function () {
        $("#item_5").remove();
        //重新计算订单总金额totalPrice
        item_count5=0;
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });
    //商品玫瑰物语的删除按钮功能
    $("#btn_danger4").click(function () {
        $("#item_4").remove();
        //重新计算订单总金额totalPrice
        item_count4=0;
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });
    //商品留恋之恋的删除按钮功能
    $("#btn_danger3").click(function () {
        $("#item_3").remove();
        //重新计算订单总金额totalPrice
        item_count3=0;
        totalPrice=item_count6*299+item_count5*269+item_count4*299+item_count3*229;
        $("#cart_items_totalPrices").text("订单总金额: ¥"+totalPrice);
    });

});//ready



