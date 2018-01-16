$(document).ready(function () {
    //《-----------------购物车-----------------》
var count = 1;
var item_count=1;
$(".item_add").click(function () {

    alert("加入购物车成功");

    //将此值放入session作用域中
    $(".card_num").text(count++);
});
    // 购物车点击增加，减少，商品数量变动
$(".btn-info").click(function () {
    item_count++,
    $(".cart_item_num").text("数量："+item_count);
});
});//ready



