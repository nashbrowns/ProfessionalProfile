bioClick = false;

function genBio(){
    if(bioClick){
        $('#bioCon').remove();
        bioClick = false;
    }
    else{
        var jumbo = $('<div>').addClass("jumbotron jumbotron-fluid mt-3").attr('id','bioCon').attr('style','background-color: rgba(255, 255, 255, 0.5); display:none;');
        var container = $('<div>').addClass("container");
        var p1 = $('<p>').addClass('lead').text("Hi, I'm Nash McDonald. I was born and raised in Bend, Oregon where I learned to love skiing, rock climbing, and skateboarding. When I'm not doing these, you can find me hanging out with friends, playing videogames, learning woodworking, and generally screwing around on the internet.");
        var p2 = $('<p>').addClass('lead').text("I Moved to Portland, Oregon to pursue a B.S. in Electrical Engineering which I managed to obtain in August of 2018. I recently started a fullstack web development bootcamp through the University of Oregon to hone my programming skills and to hopefully learn about back-end web systems. I'd like to use this knowledge to pursue a career in IOT devices.");
        var p3 = $('<p>').addClass('lead').text("I'm just starting my web dev career, but it's already a lot of fun! I like the idea of being able to do freelance web development in the future as well. This would give me a shot at being my own boss, which is something i've always dreamed of.");

        $(jumbo).appendTo('#bio');
        $(container).appendTo(jumbo);
        $(container).append(p1).append(p2).append(p3);

        bioClick = true;
    }   
}

$(document).ready( function() {

    $('#profile_img').click(function(){
        genBio();
        $('#bioCon').fadeIn();
    });

});