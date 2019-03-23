bioClick = false;
portClick = false;
resClick = false;

function genBio(){
    if(bioClick){
        $('#bioCon').remove();
        bioClick = false;
    }
    else{
        var jumbo = $('<div>').addClass("jumbotron jumbotron-fluid mt-3").attr('id','bioCon').attr('style','background-color: rgba(255, 255, 255, 0.5);');
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

function genPort(){
    if(portClick){
        $('#portCon').remove();
        portClick = false;
    }
    else{
        /* Creates carousel Item */
        var carousel = $('<div>').addClass('carousel slide').attr('id','portCon').attr('data-ride','carousel');

        /* Creates indicators for carousel items */
        var indicatorCon = $('<ol>').addClass('carousel-indicators');

        var indicator1 = $('<li>').attr('data-target','#portCon').attr('data-slide-to','0').addClass('active');
        var indicator2 = $('<li>').attr('data-target','#portCon').attr('data-slide-to','1');
        var indicator3 = $('<li>').attr('data-target','#portCon').attr('data-slide-to','2');

        /* Creates images for carousel */
        var img1 = $('<img>').addClass('d-block w-100').attr('src','assets/images/SpriteFight.png').attr('alt','First slide');
        var img2 = $('<img>').addClass('d-block w-100').attr('src','assets/images/SpriteFight.png').attr('alt','Second slide');
        var img3 = $('<img>').addClass('d-block w-100').attr('src','assets/images/SpriteFight.png').attr('alt','Third slide');

        /* Creates containers for images in carousel */
        var innerCon = $('<div>').addClass("carousel-inner");

        var innerDiv1 = $('<div>').addClass("carousel-item active");
        var innerDiv2 = $('<div>').addClass("carousel-item");
        var innerDiv3 = $('<div>').addClass("carousel-item");

        /* Adding images to carousel containers */
        innerDiv1.append(img1);
        innerDiv2.append(img2);
        innerDiv3.append(img3);

        /* Previous Control Button */
        var controlPrev = $('<a>').addClass('carousel-control-prev')
                                .attr('href','#portCon')
                                .attr('role','button')
                                .attr('data-slide','prev');
        
        var prevSpan1 = $('<span>').addClass('carousel-control-prev-icon').attr('aria-hidden','true');
        var prevSpan2 = $('<span>').addClass('sr-only').text('Previous');


        /* Previous Control Button */
        var controlNext = $('<a>').addClass('carousel-control-next')
                                .attr('href','#portCon')
                                .attr('role','button')
                                .attr('data-slide','next');

        var nextSpan1 = $('<span>').addClass('carousel-control-next-icon').attr('aria-hidden','true');
        var nextSpan2 = $('<span>').addClass('sr-only').text('Next');


        carousel.appendTo('#port');
        carousel.append(indicatorCon).append(innerCon).append(controlPrev).append(controlNext);
        indicatorCon.append(indicator1).append(indicator2).append(indicator3);
        innerCon.append(innerDiv1).append(innerDiv2).append(innerDiv3);
        controlPrev.append(prevSpan1).append(prevSpan2);
        controlNext.append(nextSpan1).append(nextSpan2);

        portClick = true;
    } 
}

function shiftImg(upOrNot){
    var divHeight = $('#bioCon').height();

    if(upOrNot === true){
        /* $('#profile_img').attr('style', 'position: relative; bottom: 20px;'); */
        $('#profile_img').addClass('moveUp');
        $('#profile_title').addClass('moveUp');
    }
    else{
        $('#profile_img').removeClass('moveUp');
        $('#profile_title').removeClass('moveUp');
    }
}

$(document).ready( function() {

    var html = document.documentElement;

    $('#profile_img').on('click', function() {

        var w = window.innerWidth;
        

        if(bioClick === false){
            $('#bio').css('opacity', 1);
            bioClick = true;

            if(w>600){
                html.scrollTop += 400;
            }
            else{
                html.scrollTop += 100;
            } 
        }
        else{
            $('#bio').css('opacity', 0);
            bioClick = false;

            
        }
    });

    $('#portfolio_img').on('click', function() {

        var w = window.innerWidth;

        if(portClick === false){
            $('#port').css('opacity', 1);
            portClick = true;

            if(w>600){
                html.scrollTop += 400;
            }
            else{
                html.scrollTop += 100;
            }
        }
        else{
            $('#port').css('opacity', 0);
            portClick = false;

            
        }
    });

    $('#resume_img').on('click', function() {

        var w = window.innerWidth;
        
        if(resClick === false){
            $('#res').css('opacity', 1);
            resClick = true;

            if(w>600){
                html.scrollTop += 400;
            }
            else{
                html.scrollTop += 100;
            }
        }
        else{
            $('#res').css('opacity', 0);
            resClick = false;
        }
    });

});