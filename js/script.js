/*
    ========================
         jquery codes
    ========================
*/

// dropdown menu for settings
$(".main1").click(function () {
    $(".sub1").slideToggle();
    $(".sub2").slideUp();
    $(".sub3").slideUp();

})

// dropdown menu for currency
$(".main2").click(function () {
    $(".sub2").slideToggle();
    $(".sub1").slideUp();
    $(".sub3").slideUp();

})

// dropdown menu for language
$(".main3").click(function () {
    $(".sub3").slideToggle();
    $(".sub1").slideUp();
    $(".sub2").slideUp();

})

// dropdown menu for navlist
$("#menubars").click(function () {
    $(".nav-list").slideToggle();

})
// dropdown menu for navlist close
$("#close").click(function () {
    $(".nav-list").slideUp();

})
// dropdown menu for quick view show
$(".fa-eye").click(function () {
    $(".quick").show();
})
// dropdown menu for quick view close
$(".fa-close").click(function () {
    $(".quick").hide();
})

// owl carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});

$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        350: {
            items: 2
        },
        600: {
            items: 3
        },
        1000: {
            items: 4
        },
        1170: {
            items: 5
        }
    }
})

// nav scroll
window.onscroll = function () {
    myFunction()
};
var nav = document.getElementById("nav"),
    sticky = nav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        nav.classList.add("sticky");
    } else {
        nav.classList.remove("sticky")
    }
}

// count to plugin 
$(window).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > $(".achivement").outerHeight()) {
        $('.timer').countTo();
    }
})

// shop page left menu
var acc = document.getElementsByClassName("left-menu");
		var i;

		for (i = 0; i < acc.length; i++) {
			acc[i].addEventListener("click", function() {
				this.classList.toggle("active-shop");
				var panel = this.nextElementSibling;
				if (panel.style.maxHeight) {
					panel.style.maxHeight = null
				} else {
					panel.style.maxHeight = panel.scrollHeight + "px";
				}
			})
		}
