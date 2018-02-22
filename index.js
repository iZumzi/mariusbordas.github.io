$(document).ready(function () {
    $("#submit-btn").click(function () {
        var city = $("#city").val();
        var root = "https://api.wunderground.com/api/3d8f2aed1448c4f6/forecast/q/RO/" + city + ".json";

        console.log(root)
        if (city != "") {
            $.ajax({
                url: root,
                method: "GET",
                success: function (response) {
                    alert("Operation succeded! Please check your browser's developer console!")
                    console.log(response.forecast.simpleforecast.forecastday);
                }
            });
        } else {
            alert("Please enter a valid Romanian city!");
        }
    });
});