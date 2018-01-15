$(document).ready(function () {
    //《-----------------购物车-----------------》
var count = 0;
$("#detail-cart-btn").click(function () {
    // alert("加入购物车");
    count++;
    //将此值放入session作用域中
    $("#detail-cart-num").text(count);
});

});//ready



