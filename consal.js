$(document).ready(function() {
    $("#gototop").hide()

    $(window).scroll(function() {
        if ($(this).scrollTop() >= 100)
            $("#gototop").show("slow")
        else
            $("#gototop").hide("slow")

    })

    $("#gototop").click(function() {
        $("html,body").animate({
            scrollTop: "0"
        }, 2000);
    })
    var zoom = function(elm) {
        elm
            .on('mouseover', function() {
                $(this).children('img').css({ 'transform': 'scale(2.0)' });
            })
            .on('mouseout', function() {
                $(this).children('img').css({ 'transform': 'scale(1)' });
            })
            .on('mousemove', function(e) {
                $(this).children('img').css({ 'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 + '%' });
            })
    }

    $('.anhsp').each(function() {
        $(this)
            .append('<div class="anhsp"></div>')
            .children('img').css({ 'background-image': 'url(' + $(this).data('image') + ')' });
        zoom($(this));
    })
    wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animate__animated', // default
        offset: 0, // default
        mobile: true, // default
        live: true // default
    })
    wow.init();
})