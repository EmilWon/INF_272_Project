function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#avatar').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function () {
    readURL(this);
});

function takeSurvey() {
    $("#surveyMessageContainer").css("display", "none");

    $("#surveyContainer").css("visibility", "visible");
}