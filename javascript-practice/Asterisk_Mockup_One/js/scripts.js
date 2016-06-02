$(document).ready(function() {
    var fade_speed = 300; // 0.3secs
    var auto_switch = true;
    var auto_switch_speed = 5000; // 5secs
    
    // TODO:  add active class first
    $(".slide").first().addClass('active');
    //hide the everything
    $(".slide").hide();
    //show active
    $(".active").show();
    
    
    // on left
    $("#left").on('click', setPrev);
    
    // on right
    $("#right").on('click', setNext);
    
    // auto_switch
    if (auto_switch) { setInterval(setNext, auto_switch_speed); }
    
    function setNext() {
        $(".active").removeClass("active").addClass("oldActive");
        
        if ($(".oldActive").is(":last-child")) {
            $(".slide").first().addClass("active");
        } else {
            $(".oldActive").next().addClass("active");
        }
        
        $(".oldActive").fadeOut(fade_speed);
        $(".active").fadeIn(fade_speed);
        $(".oldActive").removeClass("oldActive");
    }

    function setPrev() {
        $(".active").removeClass("active").addClass("oldActive");
        
        if ($(".oldActive").is(":first-child")) {
            $(".slide").last().addClass("active");
        } else {
            $(".oldActive").prev().addClass("active");
        }
        
        $(".oldActive").fadeOut(fade_speed);
        $(".active").fadeIn(fade_speed);
        $(".oldActive").removeClass("oldActive");
    }
});