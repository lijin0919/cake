$(document).ready(function () {
    //《-----------------购物车-----------------》
var count = 1;
$(".item_add").click(function () {

    alert("加入购物车成功");

    //将此值放入session作用域中
    $(".card_num").text(count++);
});

});//ready



