var opened = false;

//when menu is opened
$("#menu_burger").on('click', function () {
    opened = true;

    $("#menu_burger").css("display", "none");
    $("#menu_panel").css({
        "transition": "0.6s",
        // "width": "auto",
        // "display": "block",
        "visibility": "visible",
        "overflow": "hidden",
        "white-space": "nowrap",
        "border": "3px solid #f1f1f1"
    });

    $("#overlay").css("visibility", "visible");

    $("#closeMenu").css("visibility", "visible");
});

//when the user clicks anywhere exept on the menu
$('html').click(function (e) {
    if (!$(e.target).hasClass('col-lg-2 col-md-3 col-sm-4') && !$(e.target).hasClass('menu_item')) {
        opened = false;

        if ($(window).width() < 1105 && opened == false) {
            $("#menu_panel").css({
                "padding-left": "0",
                // "display": "none",
                "visibility": "collapse",
                "overflow": "hidden",
                "padding-right": "0",
                "border": "none",
                "transition": "none"
            });

            $("#menu_burger").css("display", "block");

            $("#overlay").css("visibility", "hidden");
        }

        $("#closeMenu").css("visibility", "hidden");
    }
});


$(window).resize(function () {

    //when the window resizes to larger than 1105px
    if ($(window).width() > 1105) {
        showMenu();
    }

    //when the window resizes to smaller than 1105px
    if ($(window).width() < 1105) {
        hideMenu();
    }
});

//on window load, give the correct classes to divs
$(document).ready(function () {
    if ($(window).width() > 1105) {
        showMenu();
    }

    else {
        hideMenu();
    }
});

//navigate no correct part of page
$(".i").on('click', function () {

    if ($(window).width() < 1105) {
        hideMenu();
    }

    var id = "#" + $(this).attr("id") + "Lbl";

    $('html,body').animate({ scrollTop: $(id).offset().top - $(window).height() /5 }, 'slow');
})

function hideMenu() {

    //when the window resizes to smaller than 1105px and the menu is not opened
    if (!opened) {
        $("#menu_panel").css({
            "padding-left": "0",
            // "display": "none",
            "visibility": "collapse",
            "overflow": "hidden",
            "padding-right": "0",
            "border": "none",
            "transition": "none"
        });

        $("#menu_burger").css("display", "block");
    }

    //when the window resizes to smaller than 1105px and the menu is opened
    else if (opened) {
        $("#overlay").css("visibility", "visible");

        $("#closeMenu").css("visibility", "visible");
    }

    $("#main_content").removeClass("row justify-content-end");
    $("#main_content").addClass("row justify-content-center");

    $("#menu_panel").removeClass("col-lg-2 col-md-4 col-sm-5");
    $("#menu_panel").addClass("col-lg-3 col-md-4 col-sm-5");
}

function showMenu() {
    $("#menu_burger").css("display", "none");
    $("#menu_panel").css({
        "transition": "0.6s",
        "visibility": "visible",
        "overflow": "hidden",
        "white-space": "nowrap",
        "border": "3px solid #f1f1f1"
    });
    $("#overlay").css("visibility", "hidden");

    $("#closeMenu").css("visibility", "hidden");

    $("#main_content").removeClass("row justify-content-center");
    $("#main_content").addClass("row justify-content-end");

    $("#menu_panel").removeClass("col-lg-3 col-md-4 col-sm-5");
    $("#menu_panel").addClass("col-lg-2 col-md-4 col-sm-5");
}

$("#viewSats").on('click', function () {
    $("#PerformanceModal").css("visibility", "visible");

    $("#overlay2").css("visibility", "visible");

    var id = "#performanceLbl";

    $('html,body').animate({ scrollTop: $(id).offset().top - $(window).height() / 2 }, 'slow');
});
