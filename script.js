$(document).ready(function () {

    $(".newPhone").click(function () {
        var temp = $("#phoneBar").html();
        $("#phoneContainer").append("<div>" + temp + "<button class='removePhone'>X</button></div>");

        $(".removePhone").click(function () {
            $(this).parent().remove();
        })

    })

    $("#hobbies").keyup(function () {
        var initList = ["sport", "jeux vidéo", "programmation"];
        var list = []


        for (let i = 0; i < initList.length; i++) {
            var addList = true;
            for (let j = 0; j < $("#hobbies").val().length; j++) {
                if ($("#hobbies").val()[j] != initList[i][j]) {
                    addList = false;
                    console.log($("#hobbies").val()[j], initList[i][j]);
                }
                console.log("plop");
            }
            if (addList == true) {
                list(initList[i], "true");
            }
            console.log(list);
        }


    })


})