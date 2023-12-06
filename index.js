// ==== Themes ====

const themeBtn = document.getElementById('themeBtn');
const root = document.documentElement;
root.setAttribute('data-theme', 'dark');

themeBtn.addEventListener('click', () => {
  const currentTheme = root.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  root.setAttribute('data-theme', newTheme);
});

$('.dark').click(function(){
	TweenMax.to($('.dark'), 0.2, {x: 10, opacity: 0, scale: 0.3,  display: 'none', ease: Power2.easeInOut});
	TweenMax.fromTo($('.light'), 0.2, {x: -10, opacity: 0, scale: 0.3, display: 'none'},
								 {x: 0, opacity: 1, scale: 1, display: 'block', ease: Power2.easeInOut});
});

$('.light').click(function(){
	TweenMax.to($('.light'), 0.2, {x: 10, opacity: 0, display: 'none', scale: 0.3, ease: Power2.easeInOut});
	TweenMax.fromTo($('.dark'), 0.2, {x: -10, opacity: 0, scale: 0.3, display: 'none'},
								 {x: 0, opacity: 1, display: 'block', scale: 1, ease: Power2.easeInOut});
});

// ===== Open Nav =====
$( ".burger-wrapper" ).click(function() {
	
	// ===== If Nav is not open	
	if($('.leftContainer').css("display") == "none"){
		TweenMax.to(".dim", 0.5, {opacity: 1, display: 'block', ease: Power2.easeInOut});
		TweenMax.fromTo(".leftContainer", 0.5, {xPercent: -100}, 
									{xPercent: 0, display: 'block', ease: Expo.easeOut});
		TweenMax.staggerFrom('.leftContainer li', 0.5, {opacity:0, y: 20, ease: Power2.easeInOut}, 0.1);
		
		$('.logo-text').css({'opacity': '0', 'display': 'none'});
  }
	// ===== If Nav is open	and in Curation page
	else if($('.leftContainer').css("display") == "block" && $('#curator').css("display") == "block"){
 		TweenMax.to(".dim", 0.5, {opacity: 0, display: 'none', ease: Power2.easeInOut});
		TweenMax.to(".leftContainer", 0.5, {xPercent: -100, display:'none', ease: Expo.easeOut});
		// $('.logo-text').css({'opacity': '1', 'display': 'block'});
  }
	
	else {
	  TweenMax.to(".dim", 0.5, {opacity: 0, display: 'none', ease: Power2.easeInOut});
		TweenMax.to(".leftContainer", 0.5, {xPercent: -100, display:'none', ease: Expo.easeOut});
		$('.logo-text').css({'opacity': '1', 'display': 'block'});
	}

});


// ===== Open Player + dim =====

$( ".btn-open-player, .track_info" ).click(function() {
  TweenMax.to(".dim", 0.5, {opacity: 1, display: 'block', ease: Power2.easeInOut});
	TweenMax.fromTo("#player", 0.5, {xPercent: 100}, 
									{xPercent: 0, display: 'block', ease: Expo.easeOut});
	TweenMax.to(".mini-player", 0.5, {x: 50, ease: Expo.easeOut});
});

$('.dim').click(function() {
	TweenMax.to(".dim", 0.5, {opacity: 0, display: 'none', ease: Power2.easeInOut});
	TweenMax.to("#player", 0.5, {xPercent: 100, display: 'none', ease: Expo.easeOut});
	TweenMax.to(".nav", 0.5, {xPercent: -100, display: 'none', ease: Power2.easeInOut})
	TweenMax.to(".mini-player", 0.5, {x: 0, ease: Expo.easeOut});
});

// ===== Mini Player =====

$('.btn-play').click(function(){
	TweenMax.to($('.btn-play'), 0.2, {x: 10, opacity: 0, scale: 0.3,  display: 'none', ease: Power2.easeInOut});
	TweenMax.fromTo($('.btn-pause'), 0.2, {x: -10, opacity: 0, scale: 0.3, display: 'none'},
								 {x: 0, opacity: 1, scale: 1, display: 'block', ease: Power2.easeInOut});
});

$('.btn-pause').click(function(){
	TweenMax.to($('.btn-pause'), 0.2, {x: 10, opacity: 0, display: 'none', scale: 0.3, ease: Power2.easeInOut});
	TweenMax.fromTo($('.btn-play'), 0.2, {x: -10, opacity: 0, scale: 0.3, display: 'none'},
								 {x: 0, opacity: 1, display: 'block', scale: 1, ease: Power2.easeInOut});
});

// ===== Flash Effect =====

$('.track_info').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1");
});

$('.burger-wrapper, .logo-text, .back_btn').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1")
});

$('.btn-open-player').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1")
});

$('.nav a').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1")
});

// ===== Player - List Items =====
$('.list_item').click(function() {
	$('.list_item').removeClass('selected');
	$(this).addClass('selected');
});


// ===== Main Play Button - Hover =====
	
$('.text-wrap .text').hover(function(){
	TweenMax.to($('.main-btn_wrapper'), 0.5, {opacity: 1, display: 'block', position: 'absolute', scale: 1, ease: Elastic.easeOut.config(1, 0.75)}),
	TweenMax.to($('.line'), 0.5, {css: { scaleY: 0.6, transformOrigin: "center center" }, ease: Expo.easeOut})},
								 
	function(){
		TweenMax.to($('.main-btn_wrapper'), 0.5, {opacity: 0, display: 'none', scale: 0, ease: Elastic.easeOut.config(1, 0.75)}),
		TweenMax.to($('.line'), 0.5, {css: { scaleY: 1, transformOrigin: "center center" }, ease: Expo.easeOut})
});


// ===== List  =====
$('.item').hover(function(){
	TweenMax.to($(this), 0.5, {y: -30, ease: Power2.easeInOut}),	
	$(this).children('.thumb').addClass('shadow'),
	$(this).children('.connect_btn').addClass('shadow'),
		
	TweenMax.to($(this).children('.info'), 0.5, {opacity: 1, ease: Power2.easeInOut})
	},
								 
	function(){
		TweenMax.to($(this), 0.5, {y: 0, ease: Power2.easeInOut}),
		$(this).children('.thumb').removeClass('shadow'),
		$(this).children('.connect_btn').removeClass('shadow'),
			
		TweenMax.to($(this).children('.info'), 0.5, {opacity: 0, ease: Power2.easeInOut})
});


// ===== Main Play Button Activate =====

$('.text-wrap .text').click(function(){
	
	var homeToMain = new TimelineMax({});
	
	// Hide
	$('.logo-text').css('display', 'none'),
	homeToMain.to($('.line, .text-wrap'), 0.5, {display: 'none', opacity: 0, y: -20, ease: Power2.easeInOut}, 0),
	
	// Background down
	homeToMain.to($('.wave-container'), 1, {yPercent: 30, ease: Power2.easeInOut}, 0),
		
	// Show
	$('#curator').css('display', 'block'),
	homeToMain.fromTo($('.back_btn'), 0.8, {x: 15},
										{display: 'flex', opacity: 1, x: 0, ease: Power2.easeInOut}, 1),
		
	homeToMain.fromTo($('.curator_title_wrapper'), 0.8, {opacity: 0, x: 30},
										{opacity: 1, x: 0, ease: Power2.easeInOut}, 1),
		
	homeToMain.fromTo($('.curator_list'), 0.8, {opacity: 0, display: 'none', x: 30},
									{opacity: 1, x: 0, display: 'block', ease: Power2.easeInOut}, 1.2)
	
});


// ===== Item Activate =====
$('.item').click(function(){
	var mainToPlaylist = new TimelineMax({});
	
	// Hide
	mainToPlaylist.to($('#curator'), 0.8, {display: 'none', opacity: 0, scale: 1.1, ease: Power2.easeInOut}, 0)
			
	// mainToPlaylist.fromTo($('.curator_list'), 0.5, {opacity: 1, display: 'block', x: 0},
	// 									{opacity: 0, x: 30, display: 'none', ease: Power2.easeInOut}, 0.5),
	
});

// ===== Open Nav =====
$( ".burger-wrapper" ).click(function() {
	
	// ===== If Nav is not open	
	if($('.nav').css("display") == "none"){
		TweenMax.to(".dim", 0.5, {opacity: 1, display: 'block', ease: Power2.easeInOut});
		TweenMax.fromTo(".nav", 0.5, {xPercent: -100}, 
									{xPercent: 0, display: 'block', ease: Expo.easeOut});
		TweenMax.staggerFrom('.nav li', 0.5, {opacity:0, y: 20, ease: Power2.easeInOut}, 0.1);
		
		$('.logo-text').css({'opacity': '0', 'display': 'none'});
  }
	// ===== If Nav is open	and in Curation page
	else if($('.nav').css("display") == "block" && $('#curator').css("display") == "block"){
 		TweenMax.to(".dim", 0.5, {opacity: 0, display: 'none', ease: Power2.easeInOut});
		TweenMax.to(".nav", 0.5, {xPercent: -100, display:'none', ease: Expo.easeOut});
		// $('.logo-text').css({'opacity': '1', 'display': 'block'});
  }
	
	else {
	  TweenMax.to(".dim", 0.5, {opacity: 0, display: 'none', ease: Power2.easeInOut});
		TweenMax.to(".nav", 0.5, {xPercent: -100, display:'none', ease: Expo.easeOut});
		$('.logo-text').css({'opacity': '1', 'display': 'block'});
	}

});


// ===== Open Player + dim =====

$( ".btn-open-player, .track_info" ).click(function() {
  TweenMax.to(".dim", 0.5, {opacity: 1, display: 'block', ease: Power2.easeInOut});
	TweenMax.fromTo("#player", 0.5, {xPercent: 100}, 
									{xPercent: 0, display: 'block', ease: Expo.easeOut});
	TweenMax.to(".mini-player", 0.5, {x: 50, ease: Expo.easeOut});
});

$('.dim').click(function() {
	TweenMax.to(".dim", 0.5, {opacity: 0, display: 'none', ease: Power2.easeInOut});
	TweenMax.to("#player", 0.5, {xPercent: 100, display: 'none', ease: Expo.easeOut});
	TweenMax.to(".nav", 0.5, {xPercent: -100, display: 'none', ease: Power2.easeInOut})
	TweenMax.to(".mini-player", 0.5, {x: 0, ease: Expo.easeOut});
});

// ===== Mini Player =====

$('.btn-play').click(function(){
	TweenMax.to($('.btn-play'), 0.2, {x: 10, opacity: 0, scale: 0.3,  display: 'none', ease: Power2.easeInOut});
	TweenMax.fromTo($('.btn-pause'), 0.2, {x: -10, opacity: 0, scale: 0.3, display: 'none'},
								 {x: 0, opacity: 1, scale: 1, display: 'block', ease: Power2.easeInOut});
});

$('.btn-pause').click(function(){
	TweenMax.to($('.btn-pause'), 0.2, {x: 10, opacity: 0, display: 'none', scale: 0.3, ease: Power2.easeInOut});
	TweenMax.fromTo($('.btn-play'), 0.2, {x: -10, opacity: 0, scale: 0.3, display: 'none'},
								 {x: 0, opacity: 1, display: 'block', scale: 1, ease: Power2.easeInOut});
});

// ===== Flash Effect =====

$('.track_info').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1");
});

$('.burger-wrapper, .logo-text, .back_btn').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1")
});

$('.btn-open-player').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1")
});

$('.nav a').hover(function(){
	
	TweenMax.fromTo($(this), 0.5, {opacity: 0.5, ease: Power2.easeInOut},
								 {opacity: 1})},
	function(){
		$(this).css("opacity", "1")
});

// ===== Player - List Items =====
$('.list_item').click(function() {
	$('.list_item').removeClass('selected');
	$(this).addClass('selected');
});


// ===== Main Play Button - Hover =====
	
$('.text-wrap .text').hover(function(){
	TweenMax.to($('.main-btn_wrapper'), 0.5, {opacity: 1, display: 'block', position: 'absolute', scale: 1, ease: Elastic.easeOut.config(1, 0.75)}),
	TweenMax.to($('.line'), 0.5, {css: { scaleY: 0.6, transformOrigin: "center center" }, ease: Expo.easeOut})},
								 
	function(){
		TweenMax.to($('.main-btn_wrapper'), 0.5, {opacity: 0, display: 'none', scale: 0, ease: Elastic.easeOut.config(1, 0.75)}),
		TweenMax.to($('.line'), 0.5, {css: { scaleY: 1, transformOrigin: "center center" }, ease: Expo.easeOut})
});


// ===== List  =====
$('.item').hover(function(){
	TweenMax.to($(this), 0.5, {y: -30, ease: Power2.easeInOut}),	
	$(this).children('.thumb').addClass('shadow'),
	$(this).children('.connect_btn').addClass('shadow'),
		
	TweenMax.to($(this).children('.info'), 0.5, {opacity: 1, ease: Power2.easeInOut})
	},
								 
	function(){
		TweenMax.to($(this), 0.5, {y: 0, ease: Power2.easeInOut}),
		$(this).children('.thumb').removeClass('shadow'),
		$(this).children('.connect_btn').removeClass('shadow'),
			
		TweenMax.to($(this).children('.info'), 0.5, {opacity: 0, ease: Power2.easeInOut})
});


// ===== Main Play Button Activate =====

$('.text-wrap .text').click(function(){
	
	var homeToMain = new TimelineMax({});
	
	// Hide
	$('.logo-text').css('display', 'none'),
	homeToMain.to($('.line, .text-wrap'), 0.5, {display: 'none', opacity: 0, y: -20, ease: Power2.easeInOut}, 0),
	
	// Background down
	homeToMain.to($('.wave-container'), 1, {yPercent: 30, ease: Power2.easeInOut}, 0),
		
	// Show
	$('#curator').css('display', 'block'),
	homeToMain.fromTo($('.back_btn'), 0.8, {x: 15},
										{display: 'flex', opacity: 1, x: 0, ease: Power2.easeInOut}, 1),
		
	homeToMain.fromTo($('.curator_title_wrapper'), 0.8, {opacity: 0, x: 30},
										{opacity: 1, x: 0, ease: Power2.easeInOut}, 1),
		
	homeToMain.fromTo($('.curator_list'), 0.8, {opacity: 0, display: 'none', x: 30},
									{opacity: 1, x: 0, display: 'block', ease: Power2.easeInOut}, 1.2)
	
});


// ===== Item Activate =====
$('.item').click(function(){
	var mainToPlaylist = new TimelineMax({});
	
	mainToPlaylist.to($('#curator'), 0.8, {display: 'none', opacity: 0, scale: 1.1, ease: Power2.easeInOut}, 0)
			
	// mainToPlaylist.fromTo($('.curator_list'), 0.5, {opacity: 1, display: 'block', x: 0},
	// 									{opacity: 0, x: 30, display: 'none', ease: Power2.easeInOut}, 0.5);
	
});

// ==== Map ==== 

function initMap() {
  // Styles a map in night mode.
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 40.674, lng: -73.945 },
    zoom: 12,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      {
        featureType: "administrative.locality",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "poi.park",
        elementType: "geometry",
        stylers: [{ color: "#263c3f" }],
      },
      {
        featureType: "poi.park",
        elementType: "labels.text.fill",
        stylers: [{ color: "#6b9a76" }],
      },
      {
        featureType: "road",
        elementType: "geometry",
        stylers: [{ color: "#38414e" }],
      },
      {
        featureType: "road",
        elementType: "geometry.stroke",
        stylers: [{ color: "#212a37" }],
      },
      {
        featureType: "road",
        elementType: "labels.text.fill",
        stylers: [{ color: "#9ca5b3" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry",
        stylers: [{ color: "#746855" }],
      },
      {
        featureType: "road.highway",
        elementType: "geometry.stroke",
        stylers: [{ color: "#1f2835" }],
      },
      {
        featureType: "road.highway",
        elementType: "labels.text.fill",
        stylers: [{ color: "#f3d19c" }],
      },
      {
        featureType: "transit",
        elementType: "geometry",
        stylers: [{ color: "#2f3948" }],
      },
      {
        featureType: "transit.station",
        elementType: "labels.text.fill",
        stylers: [{ color: "#d59563" }],
      },
      {
        featureType: "water",
        elementType: "geometry",
        stylers: [{ color: "#17263c" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.fill",
        stylers: [{ color: "#515c6d" }],
      },
      {
        featureType: "water",
        elementType: "labels.text.stroke",
        stylers: [{ color: "#17263c" }],
      },
    ],
  });
}

window.initMap = initMap;

// ==== Items ==== 

function expandItem(item) {
    const items = document.querySelectorAll('.item');
    items.forEach((el) => {
        el.classList.remove('expanded');
        el.querySelector('.blur-content').classList.remove('blur');
		el.querySelector('.titleArt').classList.remove('show');
		el.querySelector('.descriptionArt').classList.remove('show');

		console.log("el1" + items);
    });

    if (item.classList.contains('expanded')) {
        item.classList.remove('expanded');
        item.querySelector('.blur-content').classList.remove('blur');
		item.querySelector('.titleArt').classList.remove('show');
		item.querySelector('.descriptionArt').classList.remove('show');


		console.log("el2" + item);
    } else {
        item.classList.add('expanded');
        item.querySelector('.blur-content').classList.add('blur');
		item.querySelector('.titleArt').classList.add('show');
		item.querySelector('.descriptionArt').classList.add('show');


		console.log("el3" + item);
    }
}

$(function () {
	var galleryThumbs = new Swiper(".gallery-thumbs", {
		centeredSlides: true,
		centeredSlidesBounds: true, 
		direction: "horizontal",
		spaceBetween: 10,
		slidesPerView: 3,
		freeMode: false,
		watchSlidesVisibility: true,
		watchSlidesProgress: true,
		watchOverflow: true,
		breakpoints: {
			480: {
				direction: "vertical",
				slidesPerView: 3
			}
		}
	});
	var galleryTop = new Swiper(".gallery-top", {
		direction: "horizontal",
		spaceBetween: 10,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev"
		},
		a11y: {
			prevSlideMessage: "Previous slide",
			nextSlideMessage: "Next slide",
		},
		keyboard: {
			enabled: true,
		},
		thumbs: {
			swiper: galleryThumbs
		}
	});
	galleryTop.on("slideChangeTransitionStart", function () {
		galleryThumbs.slideTo(galleryTop.activeIndex);
	});
	galleryThumbs.on("transitionStart", function () {
		galleryTop.slideTo(galleryThumbs.activeIndex);
	});

    const descriptionBtn = document.getElementById('descriptionBtn');
    descriptionBtn.addEventListener('click', function() {
        const activeSlide = document.querySelector('.swiper-slide-active');
        if (activeSlide) {
            expandItem(activeSlide);
            
        }
    });
});

/* Cursor */

function lerp(start, end, amount) {
	return (1-amount)*start+amount*end
}

const cursor = document.createElement('div');
cursor.className = 'cursor';

const cursorF = document.createElement('div');
cursorF.className = 'cursor-f';
let cursorX = 0;
let cursorY = 0;
let pageX = 0;
let pageY = 0;
let size = 8;
let sizeF = 36;
let followSpeed = .16;

document.body.appendChild(cursor);
document.body.appendChild(cursorF);


cursor.style.setProperty('--size', size+'px');
cursorF.style.setProperty('--size', sizeF+'px');

window.addEventListener('mousemove', function(e) {
  pageX = e.clientX;
  pageY = e.clientY;
  cursor.style.left = e.clientX-size/2+'px';
  cursor.style.top = e.clientY-size/2+'px';
});

function loop() {
  cursorX = lerp(cursorX, pageX, followSpeed);
  cursorY = lerp(cursorY, pageY, followSpeed);
  cursorF.style.top = cursorY - sizeF/2 + 'px';
  cursorF.style.left = cursorX - sizeF/2 + 'px';
  requestAnimationFrame(loop);
}

loop();


function mousedown(e) {
  gsap.to(cursor, {scale: 4.5});
  gsap.to(cursorF, {scale: .4});

  clicked = true;
  startY = e.clientY || e.touches[0].clientY || e.targetTouches[0].clientY;
}
function mouseup(e) {
  gsap.to(cursor, {scale: 1});
  gsap.to(cursorF, {scale: 1});

  endY = e.clientY || endY;
  if (clicked && startY && Math.abs(startY - endY) >= 40) {
    go(!Math.min(0, startY - endY)?1:-1);
    clicked = false;
    startY = null;
    endY = null;
  }
}
window.addEventListener('mousedown', mousedown, false);
window.addEventListener('touchstart', mousedown, false);
window.addEventListener('touchmove', function(e) {
  if (clicked) {
    endY = e.touches[0].clientY || e.targetTouches[0].clientY;
  }
}, false);
window.addEventListener('touchend', mouseup, false);
window.addEventListener('mouseup', mouseup, false);

// ==== Upload ====

const uploadBtn = document.getElementById('uploadBtn');

uploadBtn.addEventListener('click', () => {
	window.location.href = 'uploadPage.html';
});