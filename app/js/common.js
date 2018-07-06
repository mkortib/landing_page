$(function() {

	// $(".s1-bottom .info-item").equalHeights();


		setTimeout(function() {
			var preloader = document.getElementById('page-preloader');
			if(!preloader.classList.contains('done')) {
				preloader.classList.add('done');
			}
		}, 1000);

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
	});

	$(".main-foot .toggle-mnu").click(function() {
  	$("html, body").animate({ scrollTop: 999999 }, "slow");
  	return false;
	});
	$(".arrow-bottom").click(function() {
  	$("html, body").animate({ scrollTop: $("header").height() + 120}, "slow");
  	return false;
	});

		$(".top").click(function() {
  	$("html, body").animate({ scrollTop: 0}, "slow");
  	return false;
	})

	$(".section-head h2, .section-head p").animated("fadeInRight");
	$(".info-item-wrap").animated("zoomIn");
	$(".slider-wrap").animated("rollIn");
	$(".section_8 .forms").animated("fadeInRight");
	$(".section_8 .section-head .p").removeClass("fadeInRight").animated("fadeIn");

	$(".section_2").waypoint(function() {
		$(".s2-items-wrap").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 150*index);
		});	
	},
	{offset: "35%"}
	);

		$(".section_8").waypoint(function() {
		$(".s8-item").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("on");
			}, 150*index);
		})	
	},
	{offset: "35%"}
	);

	$(".info-item").equalHeights();
	// $(".cards .card").equalHeights();

	$(".section_4").waypoint(function() {
		$(".section_4 .card").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("card-on").removeClass("card-off");
			}, 150*index);
		});	
	},
	{offset: "35%"}
	);

		$(".section_6").waypoint(function() {
		$(".section_6 .team").each(function(index) {
			var ths = $(this);
			setInterval(function() {
				ths.addClass("team-on").removeClass("team-off");
			}, 150*index);
		});	
	},
	{offset: "35%"}
	);




$('.main-mnu a[href^="#"]').click( function(){
    var scroll_el = $(this).attr('href');
    if ($(scroll_el).length != 0) {
        $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500);
    }
    return false;
});
	// $(".about-company").click(function() {
	// 	$("html, body").animate({ scrollTop: 4700 }, "slow");	
	// });
	// $(".mark").click(function() {
	// 	$("html, body").animate({ scrollTop: 900 }, "slow");	
	// });
	// $(".deal").click(function() {
	// 	$("html, body").animate({ scrollTop: 2250 }, "slow");	
	// });
	// $(".acountant-services").click(function() {
	// 	$("html, body").animate({ scrollTop: 3350 }, "slow");	
	// });
	// $(".location").click(function() {
	// 	$("html, body").animate({ scrollTop: 6350 }, "slow");	
	// });

	 $(".slider").owlCarousel({
	 	loop: true,
	 	items: 1,
	 	itemClass: "slide-wrap",
	 	autoplay: true,
	 	autoplaySpeed: 600
	 });
	 var owl = $('.slider');
	 $('.next').on('click', function () {
      owl.trigger('next.owl.carousel', [500]);
  });
  $('.prev').on('click', function () {
      owl.trigger('prev.owl.carousel', [500]);
  });

	var waypointsvg = new Waypoint({

		element: $(".section_5"),
		handler: function(dir) {
			
			if (dir === "down") {

				$(".section_5 .tc-item").each(function(index) {
					var ths = $(this);
					setTimeout(function() {
						var myAnimation = new DrawFillSVG({
							elementId: "tc-svg-" + index
						});
						ths.children(".tc-content").addClass("tc-content-on");
					}, 500*index);
				});

			};
			this.destroy();
		},
		offset: '35%'
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$(".buttons").click(function() {
		$("#callback h4").html($(this).text())
		$("#callback input[type=hidden]").val($(this).text())
	}).magnificPopup({
  	type:'inline',
  	mainClass: 'mfp-forms'
	});

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$(".forms").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});
