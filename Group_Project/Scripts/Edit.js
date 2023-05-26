function readURL(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#avatar').attr('src', e.target.result);
        }

        reader.readAsDataURL(input.files[0]);
    }
}

$("#imgInp").change(function(){
    readURL(this);
});

function takeSurvey()
{
    $("#surveyMessageContainer").css("display", "none");

    $("#surveyContainer").css("visibility", "visible");
}

$("#sequrity_question_table2 tr").on('click', function() {
    var child = $(this).children();

    if(!child[0].children[0].checked)
    {
        child[0].children[0].checked = true;
    }

})
