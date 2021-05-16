 // menuburger
 $('.menu_btn').on('click', function(e) {
	e.preventDefault();
	$('.menu').toggleClass('menu_active');
	$('.shapka').toggleClass('shapka_active');
})

// swiper
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

// modal
var modal = document.getElementById('id01');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var modal = document.getElementById('id02');
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// fixedmenu
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() >= 200) {
      $(".header-container").addClass("fix");
    } else {
      $(".header-container").removeClass("fix");
    }
  });
});

// perehotpoyakoru
$(document).ready(function() {
			$("a.menu-link").click(function(){
				$("html, body").animate({
					scrollTop: $($(this).attr("href")).offset().top + "px"
				}, {
					duration: 1000,
					easing: "swing"
				});
				return false;
			});
		});

$(document).ready(function() {
			$("a.footer_img-id").click(function(){
				$("html, body").animate({
					scrollTop: $($(this).attr("href")).offset().top + "px"
				}, {
					duration: 1000,
					easing: "swing"
				});
				return false;
			});
		});

$(document).ready(function() {
			$("a.scroll2").click(function(){
				$("html, body").animate({
					scrollTop: $($(this).attr("href")).offset().top + "px"
				}, {
					duration: 1000,
					easing: "swing"
				});
				return false;
			});
		});