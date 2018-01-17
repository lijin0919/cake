$().ready(function () {
    $("#delete_3").click(function () {
        $("tr#item_id_3").remove();
    });
    $("#delete_2").click(function () {
        $("tr#item_id_2").remove();
    });
    $("#success_2").click(function () {
        $("#success_2").text()
    });
});