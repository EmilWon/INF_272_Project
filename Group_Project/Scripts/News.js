$("#electricity_activities input[type='checkbox']").change(function(){
    if(this.checked)
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "visible");
    }
    else
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "hidden");
    }
});

$("#recycling_activities input[type='checkbox']").change(function(){
    if(this.checked)
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "visible");
    }
    else
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "hidden");
    }
});

$("#travel_activities input[type='checkbox']").change(function(){
    if(this.checked)
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "visible");
    }
    else
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "hidden");
    }
});

$("#water_activities input[type='checkbox']").change(function(){
    if(this.checked)
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "visible");
    }
    else
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "hidden");
    }
});

$("#food_activities input[type='checkbox']").change(function(){
    if(this.checked)
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "visible");
    }
    else
    {
        var parent = $(this).parent();
        var sibling = $(parent).siblings()[1];
        
        $(sibling).css("visibility", "hidden");
    }
});

$("#performanceModalBack, #closePerformance").on('click', function () {
    $("#PerformanceModal").css("visibility", "hidden");

    $("#overlay2").css("visibility", "hidden");
});

$("#accountSettingsModalBack").on('click', function () {
    $("#accountSettingsModal").css("visibility", "hidden");

    $("#overlay2").css("visibility", "hidden");
});

$("#ViewActivities").on('click', function () {

    var id = "#activitiesLbl";

    $('html,body').animate({ scrollTop: $(id).offset().top - $(window).height() / 5 }, 'slow');
});

$(".card-header").on('click', function () {

    var arrow = $(this).children()[1];

    if ($(arrow).hasClass("glyphicon glyphicon-menu-up")) {
        $(arrow).removeClass("glyphicon glyphicon-menu-up");
        $(arrow).addClass("glyphicon glyphicon-menu-down");
    }
    else {
        $(arrow).removeClass("glyphicon glyphicon-menu-down");
        $(arrow).addClass("glyphicon glyphicon-menu-up");
    }
    
});

$(".card-body table tr td").on('click', function () {

    //if ($(this).is(":checkbox"))
    console.log($(this));
    var child = $(this).siblings()[0];

    child = $(child).children()[0];

    if ($(child).is(":checkbox")) {
        if ($(child).is(":checked")) {
            $(child).prop("checked", false);
        }
        else
            $(child).prop("checked", true);
    }
});

$("#activityBack, #activityPrint").on('click', function () {
    $("#trendReport").css("visibility", "hidden");

    $("#overlay2").css("visibility", "hidden");
});

$("#closeActivityReport").on('click', function () {
    $("#trendReport").css("visibility", "hidden");

    $("#overlay2").css("visibility", "hidden");
});

function showActivityReport() {

    $("#trendReport").css("visibility", "visible");

    $("#overlay2").css("visibility", "visible");

    var id = "#trendReportLbl";

    $('html,body').animate({ scrollTop: $(id).offset().top - $(window).height() / 2 }, 'slow');
}