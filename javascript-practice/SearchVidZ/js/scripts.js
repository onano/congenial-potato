$(document).ready(function() {
    var searchfield = $("#searchBox");
    var searchBtn = $("#searchBtn");
    
    //Focus Event Handler
    $(searchfield).on('focus', function() {
        $(this).animate({
            width:'100%'
        }, 300); //Option and speed;
        $(searchBtn).animate({
            left:'120%'
        }, 300);
    });
    
    //Blur Event handler
    $(searchfield).on('blur', function() {
        if (searchfield.val() === "") {
            $(this).animate({
                width:'80%'
            }, 300, function() {}); //Option and speed;
            
            $(searchBtn).animate({
                left:'100%'
            }, 300, function() {});
        }
    });
    
    
    //Prevent Default Behaviour of form
    $("#search-form").submit(function(event) {
        event.preventDefault();
    });
    
});

function getVidz() {
    // Clear results
    $("#results").html('');
    //Clear Buttons
    $("#buttons").html('');
    // grab deh contaent
    var q = $("#searchBox").val();
    
    //JQuery API GET METHOD
    $.get("https://www.googleapis.com/youtube/v3/search", {
        part: 'snippet, id',
        q: q,
        type: 'video',
        key: API_KEY,
    }, function(data) {
        console.log(data);
    });
}