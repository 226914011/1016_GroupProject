$(document).ready(function () {
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('li').each(function () {
            $(this).removeClass('active');
        })
        $(this).parents('li, ul').addClass('active');
     
        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
});

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('.sidebar a').not(".title").each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        var value = 300;
        if (refElement.position().top-value <= scrollPos && refElement.position().top-value + refElement.height() > scrollPos) {
            $('.sidebar ul li a').parents('li, ul').removeClass("active");
            currLink.parents('li, ul').addClass("active");
        }
        else{
            currLink.parents('li, ul').removeClass("active");
        }
    });
}