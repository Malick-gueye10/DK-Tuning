/*******************************************************
    Template Name    : Racer - Car Racing Landing Page Template
*******************************************************/
(function ($) {
	"use strict";
	var wind = $(window);
	var parallaxSlider;
	var parallaxSliderOptions = {
		speed: 1000,
		autoplay: true,
		parallax: true,
		loop: true,
		on: {
			init: function () {
				var swiper = this;
				for (var i = 0; i < swiper.slides.length; i++) {
					$(swiper.slides[i]).find('.bg-img').attr({
						'data-swiper-parallax': 0.75 * swiper.width
					});
				}
			},
			resize: function () {
				this.update();
			}
		},
		pagination: {
			el: '.slider-prlx .parallax-slider .swiper-pagination',
			dynamicBullets: true,
			clickable: true
		},
		navigation: {
			nextEl: '.slider-prlx .parallax-slider .next-ctrl',
			prevEl: '.slider-prlx .parallax-slider .prev-ctrl'
		}
	};
	parallaxSlider = new Swiper('.slider-prlx .parallax-slider', parallaxSliderOptions);
	// Var Background image
	var pageSection = $(".bg-img, section");
	pageSection.each(function (indx) {
		if ($(this).attr("data-background")) {
			$(this).css("background-image", "url(" + $(this).data("background") + ")");
		}
	});
	var nav = $('nav');
	var navHeight = nav.outerHeight();
	$('.navbar-toggler').on('click', function () {
		if (!$('#mainNav').hasClass('navbar-reduce')) {
			$('#mainNav').addClass('navbar-reduce');
		}
	});

	// Navbar Menu Reduce 
	$(window).trigger('scroll');
	$(window).on('scroll', function () {
		var pixels = 50;
		var top = 1200;
		if ($(window).scrollTop() > pixels) {
			$('.navbar-expand-lg').addClass('navbar-reduce');
			$('.navbar-expand-lg').removeClass('navbar-trans');
		} else {
			$('.navbar-expand-lg').addClass('navbar-trans');
			$('.navbar-expand-lg').removeClass('navbar-reduce');
		}
		if ($(window).scrollTop() > top) {
			$('.scrolltop-mf').fadeIn(1000, "easeInOutExpo");
		} else {
			$('.scrolltop-mf').fadeOut(1000, "easeInOutExpo");
		}
	});
	// Back to top button 
	$(function () {
		// Scroll Event
		$(window).on('scroll', function () {
			var scrolled = $(window).scrollTop();
			if (scrolled > 300) $('.back-to-top').addClass('active');
			if (scrolled < 300) $('.back-to-top').removeClass('active');
		});
		// Click Event
		$('.back-to-top').on('click', function () {
			$("html, body").animate({
				scrollTop: "0"
			}, 500);
		});
	});
	//  Star Scrolling nav
	$('a.js-scroll[href*="#"]:not([href="#"])').on("click", function () {
		if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: (target.offset().top - navHeight + 30)
				}, 1000, "easeInOutExpo");
				return false;
			}
		}
	});
	// Closes responsive menu when a scroll trigger link is clicked
	$('.js-scroll').on("click", function () {
		$('.navbar-collapse').collapse('hide');
	});
	// Activate scrollspy to add active class to navbar items on scroll
	$('body').scrollspy({
		target: '#mainNav',
		offset: navHeight
	});
	
	(function () {
		const second = 1000,
			  minute = second * 60,
			  hour = minute * 60,
			  day = hour * 24;
	  
		//I'm adding this section so I don't have to keep updating this pen every year :-)
		//remove this if you don't need it
		let today = new Date(),
			dd = String(today.getDate()).padStart(2, "0"),
			mm = String(today.getMonth() + 1).padStart(2, "0"),
			yyyy = today.getFullYear(),
			nextYear = yyyy + 1,
			dayMonth = "09/30/",
			birthday = dayMonth + yyyy;
		
		today = mm + "/" + dd + "/" + yyyy;
		if (today > birthday) {
		  birthday = dayMonth + nextYear;
		}
		//end
		
		const countDown = new Date(birthday).getTime(),
			x = setInterval(function() {    
	  
			  const now = new Date().getTime(),
					distance = countDown - now;
	  
			  document.getElementById("days").innerText = Math.floor(distance / (day)),
				document.getElementById("hours").innerText = Math.floor((distance % (day)) / (hour)),
				document.getElementById("minutes").innerText = Math.floor((distance % (hour)) / (minute)),
				document.getElementById("seconds").innerText = Math.floor((distance % (minute)) / second);
	  
			  //do something later when date is reached
			  if (distance < 0) {
				document.getElementById("headline").innerText = "It's my birthday!";
				document.getElementById("countdown").style.display = "none";
				document.getElementById("content").style.display = "block";
				clearInterval(x);
			  }
			  //seconds
			}, 0)
		}());
		
	//  Product shop owl
	$('#product-shop-slide').owlCarousel({
		margin: 0,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 1000,
		dots: false,
		autoplayHoverPause: true,
		loop: true,
        responsiveClass:true,
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 2
			},
			1000: {
				items: 4
			}
		}
	});

	// ParticlesJS Config.
particlesJS("particles-js", {
	"particles": {
	  "number": {
		"value": 80,
		"density": {
		  "enable": true,
		  "value_area": 700
		}
	  },
	  "color": {
		"value": "#ffffff"
	  },
	  "shape": {
		"type": "circle",
		"stroke": {
		  "width": 0,
		  "color": "#000000"
		},
		"polygon": {
		  "nb_sides": 5
		},
	  },
	  "opacity": {
		"value": 0.5,
		"random": false,
		"anim": {
		  "enable": false,
		  "speed": 1,
		  "opacity_min": 0.1,
		  "sync": false
		}
	  },
	  "size": {
		"value": 3,
		"random": true,
		"anim": {
		  "enable": false,
		  "speed": 40,
		  "size_min": 0.1,
		  "sync": false
		}
	  },
	  "line_linked": {
		"enable": true,
		"distance": 150,
		"color": "#ffffff",
		"opacity": 0.4,
		"width": 1
	  },
	  "move": {
		"enable": true,
		"speed": 6,
		"direction": "none",
		"random": false,
		"straight": false,
		"out_mode": "out",
		"bounce": false,
		"attract": {
		  "enable": false,
		  "rotateX": 600,
		  "rotateY": 1200
		}
	  }
	},
	"interactivity": {
	  "detect_on": "canvas",
	  "events": {
		"onhover": {
		  "enable": true,
		  "mode": "grab"
		},
		"onclick": {
		  "enable": true,
		  "mode": "push"
		},
		"resize": true
	  },
	  "modes": {
		"grab": {
		  "distance": 140,
		  "line_linked": {
			"opacity": 1
		  }
		},
		"bubble": {
		  "distance": 400,
		  "size": 40,
		  "duration": 2,
		  "opacity": 8,
		  "speed": 3
		},
		"repulse": {
		  "distance": 200,
		  "duration": 0.4
		},
		"push": {
		  "particles_nb": 4
		},
		"remove": {
		  "particles_nb": 2
		}
	  }
	},
	"retina_detect": true
  });
	
	// Testimonials owl
	$('#testimonial-slide').owlCarousel({
		margin: 0,
		autoplay: true,
		autoplayTimeout: 4000,
		nav: false,
		smartSpeed: 800,
		dots: true,
		autoplayHoverPause: true,
		loop: true,
		responsiveClass: true,
		responsive: {
			0: {
				items: 1
			},
			768: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

		// Menu of The Day Tab
		$('.menu-day-tab-list  li > a ').on('click', function (e) {
			e.preventDefault();
			var target = $(this).attr('href');
			$(this).closest('li').siblings('li').removeClass('active');
			$(this).closest('li').addClass('active');
			$(target).addClass('active');
			$(target).siblings('.menu-single-tab-content').removeClass('active');
		});

	// MagnificPopup 
	$('.gallery-container').magnificPopup({
		delegate: '.popimg',
		type: 'image',
		gallery: {
			enabled: true
		}
	});
	// Porfolio isotope and filter
	$(window).on('load', function () {
		var galleryIsotope = $('.gallery-container').isotope({
			itemSelector: '.gallery-grid-item'
		});
		$('#gallery-flters li').on('click', function () {
			$("#gallery-flters li").removeClass('filter-active');
			$(this).addClass('filter-active');
			galleryIsotope.isotope({
				filter: $(this).data('filter')
			});
		});
	});
	// WOW JS
	$(window).on('load', function () {
		if ($(".wow").length) {
			var wow = new WOW({
				boxClass: 'wow', // Animated element css class (default is wow)
				animateClass: 'animated', // Animation css class (default is animated)
				offset: 30, // Distance to the element when triggering the animation (default is 0)
				mobile: false, // Trigger animations on mobile devices (default is true)
				live: true, // Act on asynchronously loaded content (default is true)
			});
			wow.init();
		}
	});
	// Preloader Area
	jQuery(window).on('load', function () {
	  jQuery('.preloader').delay(500).fadeOut('slow');
	});
	
})(jQuery);