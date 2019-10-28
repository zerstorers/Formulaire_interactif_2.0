$(document).ready(function(){

    $(".newPhone").click(function(){
        var temp = $("#phoneBar").html();
        $("#phoneContainer").append("<div>" + temp + "<button class='removePhone'>X</button></div>");
    })

    $(".removePhone").click(function(){
        $(this).parent().remove
    })

})