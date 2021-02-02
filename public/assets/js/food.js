$(function () {
    $(".eat").on("click", function (event) {
        var id = $(this).data("id");
        var eaten = $(this).data("eaten");

        var eatenState = {
            eaten: eaten
        };

        $.ajax("/api/food/" + id, {
            type: "PUT",
            data: eatenState
        }).then(
            function () {
                console.log("Eaten changed to", eaten);
                location.reload();
            }
        );
    });

    $(".create-form").on("submit", function (event) {
        event.preventDefault();

        var newFood = {
            name: $("#comida").val().trim(),
            eaten: $("[name=eaten]:checked").val().trim()
        };

        $.ajax("/api/food", {
            type: "POST",
            data: newFood
        }).then(
            function () {
                console.log("Added new Food");
                location.reload();
            }
        );
    });
});