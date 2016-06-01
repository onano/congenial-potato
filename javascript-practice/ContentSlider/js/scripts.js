$(document).ready(function() {
    var fade_speed = 500; // .5sec
    var auto_switch = true; //if we want auto_switch or nah
    var auto_switch_speed = 3000 // 3 secs
    
    //add our class
    $('.slide').first().addClass('active')
    
    //hide all slides
    $('.slide').hide();
    
    //Show intial slide
    $('.active').show();
    
    //the next button
    $('#next').on('click', setNextSlide);
    
    //the prev button
    $('#prev').on('click', setPrevSlide);
    
    //Auto Switch Toggle
    if (auto_switch) {
        setInterval(setNextSlide, auto_switch_speed);
    }
    
    /* 
    Logic for setNextSlide() :
        1. find active class and remove the class active
            and add a class of oldActive as a identifier flag
            
        2. check if oldActive is last child in group 
        3. if check is yes then;
            grab .slide find first-child and add a class of active to it
        4 else check fails :
            grab oldActive and go to next child and add class active to it
            
        5 fadeOut oldActive
        6 bring in active slide
        7. remove our oldActive flag
    */
    
    function setNextSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':last-child')) {
            $('.slide').first().addClass('active'); 
        } 
        else {
            $('.oldActive').next().addClass('active');    
        }
        
        $('.oldActive').fadeOut(fade_speed);
        $('.active').fadeIn(fade_speed);
        $('.oldActive').removeClass('oldActive');    
    }

        /* 
        Logic for setPrevSlide() :
        1. find active class and remove the class active
            and add a class of oldActive as a identifier flag
            
        2. check if oldActive is first child in group 
        3. if check is yes then;
            grab .slide find last-child and add a class of active to it
        4 else check fails :
            grab oldActive and go to prev child and add class active to it
            
        5 fadeOut oldActive
        6 bring in active slide
        7. remove our oldActive flag
    */

    
    function setPrevSlide() {
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active'); 
        } 
        else {
            $('.oldActive').prev().addClass('active');    
        }
        
        $('.oldActive').fadeOut(fa-de_speed);
        $('.active').fadeIn(fade_speed);
        $('.oldActive').removeClass('oldActive');   
    }
});

