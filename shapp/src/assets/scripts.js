import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery';

// jQuery('[data-fancybox]').fancybox();
// window.onload = function () {
//     jQuery('.loading').fadeOut(500);
// }
// AOS.init();
jQuery('.mb_menu_btn').click(function () {
    jQuery('.nav.nav-pills').css({
        'width': '100%'
    });
});
jQuery('.close_mb_menu').click(function () {
    jQuery('.nav.nav-pills').css({
        'width': '0%'
    });
});

window.addEventListener("scroll", function () {
    // console.log(document.documentElement.scrollTop);
    if (document.documentElement.scrollTop >= 50) {
        jQuery('header').css({
            //                 'background': '#06223e'
            'background': '#020a2c'
        });
    } else {
        jQuery('header').css({
            'background': ''
        });
    }
});


var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("accordion_open");
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            jQuery(panel).slideUp(100);
        } else {
            jQuery(panel).slideDown(100);
        }
    });
}

jQuery(function () {
    jQuery("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            jQuery('html, body').animate({
                scrollTop: jQuery(hash).offset().top - 90
            }, 800, function () {
                //window.location.hash = hash;
            });
        }
    });
});
jQuery('.single-product').on('click', '.variations_form button[type="submit"].disabled', function (e) {
    e.preventDefault();
    return false;
})
var a = 0;
jQuery(window).scroll(function () {
    var oTop = jQuery('.info_analytic_sec').offset().top - window.innerHeight;
    //         console.log(oTop);
    if (a == 0 && jQuery(window).scrollTop() > oTop) {
        jQuery('.info_analytic_sec h2 span').each(function () {
            //                 console.log("got it");
            var $this = jQuery(this),
                countTo = $this.attr('data-count');
            jQuery({
                countNum: $this.text()
            }).animate({
                countNum: countTo
            }, {
                duration: 2000,
                easing: 'swing',
                step: function () {
                    $this.text(Math.floor(this.countNum));
                },
                complete: function () {
                    $this.text(this.countNum);
                    //                         console.log('finished');
                }

            });
        },);
        a = 1;
    }

});