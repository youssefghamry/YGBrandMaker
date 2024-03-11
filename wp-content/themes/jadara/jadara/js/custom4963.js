//wow


 jQuery(document).ready(function($) {
    wow = new WOW({ mobile:false})
      wow.init();


//nav fixed menu

$("#menu-open-icon").click(function () {
    $(this).toggleClass("active");
    $(".navbar-section").toggleClass("open").find("nav").css("transition", " all .5s cubic-bezier(0.075, 0.82, 0.165, 1)");

});


$("#open-icon").click(function () {
    $(".navbar-section").addClass("res-open");
    $("body,html").addClass("body-menu");

});

$("#close-icon,.resonsive-project-begin .button-container").click(function () {
    $(".navbar-section").removeClass("res-open");
    $("body,html").removeClass("body-menu");
});


//nav scroll
$(window).scroll(function () {
    var scroll = $(window).scrollTop();
    var headheight = 200;
    //>=, not <=
    if (scroll >= headheight) {
        //clearHeader, not clearheader - caps H
        $(".navbar-section,.fixed-icons").addClass("active");

    } else {
        $(".navbar-section").removeClass("active open").find("nav").css("transition", " none");
        $("#menu-open-icon,.fixed-icons").removeClass("active");

    }
});


$(function () {
    var $winf = $(window); // or $box parent container
    var $boxf = $("nav,#menu-open-icon,#open-icon,.modal");
    $winf.on("click.Bst", function (event) {
        if (
            $boxf.has(event.target).length === 0 && //checks if descendants of $box was clicked
            !$boxf.is(event.target) //checks if the $box itself was clicked
        ) {
            $(".navbar-section").removeClass("open res-open");
            $("#menu-open-icon").removeClass("active");
            $("body,html").removeClass("body-menu");



        }
    });
});








//img src change
$(".converted-img").each(function (i, elem) {
    var img_conv = $(elem);
    img_conv.parent(".full-width-img").css({
        backgroundImage: "url(" + img_conv.attr("src") + ")"
    });
});


$(".website-mokeup .vc_single_image-wrapper img").each(function (i, elem) {
    var img_conv = $(elem);
    img_conv.parent(".vc_single_image-wrapper").css({
        'background-image': "url(" + img_conv.attr("src") + ")"
    });
  
});


//message
  $(".direct-message a").attr("href", "javascript:void(Tawk_API.toggle())");

//up btn 
$(function () {

    var btn = $('#up-btn');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show').removeClass("animated slideOutDown").addClass("animated slideInUp");
        } else {
            btn.removeClass('show').removeClass("animated slideInUp").addClass("animated slideOutDown");;
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: 0
        }, 'slow');
    });
});




//snake
$(function () {
    $(".snake").snakeify({
        speed: 300
    });
});


//footer lists

$(".footer-links-grid ul li a").on({
    mouseenter: function () {
        $(this).parent().siblings().addClass("active");
    },
    mouseleave: function () {
        $(this).parent().siblings().removeClass("active");
    }
});





$(".tabs-owl").owlCarousel({
    items: 1,
    loop: true,
    margin: 35,
    rtl: true,
    nav: false,
    dots: true,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            dots: false,

        },
        576: {
            items: 2,
            margin: 0,
            dots: false,


        },
        768: {
            items: 1,
            stagePadding: 200,

        },

        1200: {
            items: 2,
            stagePadding: 100,

        },

        1500: {
            items: 3,
            stagePadding: 100,

        },
        1700: {
            items: 4,
            stagePadding: 100,

        }
    }

});



$('#center-owl').owlCarousel({
    items: 3,
    loop: true,
    rtl: true,
    nav: true,
    dots: false,
    autoplay: true,
    margin: 10,
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 1,
        },
        768: {
            items: 2

        },
        1200: {
            items: 3,
            center: true,
            margin: 0,


        }
    }

});



//project-moadal
$(".open-project-modal").click(function (e) {
    e.preventDefault();
    $("body,html").addClass("modal-opens");
    $(".project-modal").addClass("active");
});

$(".open-call").click(function (e) {
    e.preventDefault();
    $("#call-modal").modal("show");
});

$(".button-container.pop-project-form").click(function (e) {
    e.preventDefault();
    setTimeout(function () {
        $("body,html").addClass("modal-opens");
        $(".project-modal").addClass("active");
    }, 300);

});

$(".project-modal .close").click(function () {
    $("body,html").removeClass("modal-opens");
    $(".project-modal").removeClass("active");

});



$('.begin-project-checkboxes input[type=radio]').click(function () {
    if ($('.begin-project-checkboxes input[type=radio]').is(':checked')) {
        $(this).closest(".custom-col").find(".begin-form-btn").parent().addClass("active")
    }
});

$('.begin-project-checkboxes input[type=checkbox]').click(function () {
    if ($('.begin-project-checkboxes input[type=checkbox]').is(':checked')) {
        $(this).closest(".custom-col").find(".begin-form-btn").parent().addClass("active")
    }
});

$(document).on("click", ".mybtn.begin-form-btn", function () {
    $(this).closest(".custom-col").next().find(".begin-project-col").addClass("active")
    $(this).closest(".custom-col").addClass("checked");


});






$(document).on("click", ".mybtn.begin-form-btn2", function () {
    var x = $("#name-pro").val();
    var y = $("#des-pro").val();

    if (y == "") {
        $("#des-pro").closest(".required-input").find(".invalid-feedback2").addClass("active");
    } else {
        $("#des-pro").closest(".required-input").find(".invalid-feedback2").removeClass("active")
    }

    if (x == "") {
        $("#name-pro").closest(".required-input").find(".invalid-feedback2").addClass("active");
    } else {
        $("#name-pro").closest(".required-input").find(".invalid-feedback2").removeClass("active")
    }
    
    if ((x == "") || (y == "")) {

    } else {
        $(this).closest(".custom-col").addClass("checked");
        $(this).closest(".custom-col").next().find(".begin-project-col").addClass("active");

    }
});

$(document).on("keyup", ".required-input .form-control", function () {
    $(this).next(".invalid-feedback2").hide();
});










//file
$("#check-file").change(function (e) {
    var fileName2 = e.target.files[0].name;
    $("#file-name").text(fileName2.replace('C:\fakepath', ''));
});



  $(window).scroll(function() {
    if ($(document).scrollTop() > 300) {
      $(".click-show-icons-fixed-new").addClass("active");
    } else {
      $(".click-show-icons-fixed-new").removeClass("active");
    }
  });

$(".click-show-icons-fixed-new").click(function(){
    $(".show-icons-fixed-new").fadeToggle();
    $(".click-show-icons-fixed-new").toggleClass("active1");

})

 });





 
