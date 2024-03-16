import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';


// main.js


export default function initializeMainScript() {
console.log('in  main function');

  // Spinner
    var spinner = function () {
      setTimeout(function () {
        var spinnerElement = document.getElementById('spinner');
        if (spinnerElement) {
          spinnerElement.classList.remove('show');
        }
      }, 1);
    };
    spinner(0);
  
    // Fixed Navbar
    var handleNavbarScroll = function () {
      var fixedTop = document.querySelector('.fixed-top');
      if (window.innerWidth < 992) {
        fixedTop.classList.toggle('shadow', window.scrollY > 55);
      } else {
        fixedTop.classList.toggle('shadow', window.scrollY > 55);
        fixedTop.style.top = window.scrollY > 55 ? '-55px' : '0';
      }
    };
  
    // Attach scroll event listener to handle navbar scroll
    window.addEventListener('scroll', handleNavbarScroll);
  
    // Handle Navbar Scroll
var handleNavbarScroll = function () {
    var fixedTop = document.querySelector('.fixed-top');
    if (!fixedTop) return; // Check if the element exists

    if (window.innerWidth < 992) {
        fixedTop.classList.toggle('shadow', window.scrollY > 55);
    } else {
        fixedTop.classList.toggle('shadow', window.scrollY > 55);
        fixedTop.style.top = window.scrollY > 55 ? '-55px' : '0';
    }
};

// Attach scroll event listener to handle navbar scroll
window.addEventListener('scroll', handleNavbarScroll);

// Back to top button
var handleBackToTop = function () {
    var backToTop = document.querySelector('.back-to-top');
    if (!backToTop) return; // Check if the element exists

    backToTop.style.display = window.scrollY > 300 ? 'block' : 'none';
};

// Attach scroll event listener to handle back-to-top button visibility
window.addEventListener('scroll', handleBackToTop);
  
    // Testimonial carousel
    // Testimonial Carousel
var testimonialCarousel = document.querySelector('.testimonial-carousel');

if (testimonialCarousel) {
  var owl = new OwlCarousel(testimonialCarousel, {
    autoplay: true,
    smartSpeed: 2000,
    center: false,
    dots: true,
    loop: true,
    margin: 25,
    nav: true,
    navText: [
      '<i class="bi bi-arrow-left"></i>',
      '<i class="bi bi-arrow-right"></i>'
    ],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 1
      },
      992: {
        items: 2
      },
      1200: {
        items: 2
      }
    }
  });
}

  
    // Vegetable carousel
     // vegetable carousel
     $(".vegetable-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        center: false,
        dots: true,
        loop: true,
        margin: 25,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsiveClass: true,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:1
            },
            768:{
                items:2
            },
            992:{
                items:3
            },
            1200:{
                items:4
            }
        }
    });
  
    
// // Modal Video
// var handleModalVideo = function () {
//     var videoSrc;
//     var playButtons = document.querySelectorAll('.btn-play');

//     if (playButtons) {
//         playButtons.forEach(function (button) {
//             button.addEventListener('click', function () {
//                 videoSrc = button.getAttribute('data-src');
//             });
//         });
//     }

//     var videoModal = document.getElementById('videoModal');
//     videoModal.addEventListener('shown.bs.modal', function () {
//         var videoElement = document.getElementById('video');
//         videoElement.src = videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0";
//     });

//     videoModal.addEventListener('hide.bs.modal', function () {
//         var videoElement = document.getElementById('video');
//         videoElement.src = videoSrc;
//     });
// };

// handleModalVideo();

  
    // Product Quantity
    var handleProductQuantity = function () {
      var quantityButtons = document.querySelectorAll('.quantity button');
  
      quantityButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          var inputField = button.closest('.quantity').querySelector('input');
          var oldValue = parseFloat(inputField.value);
  
          if (button.classList.contains('btn-plus')) {
            var newVal = oldValue + 1;
          } else {
            var newVal = oldValue > 0 ? oldValue - 1 : 0;
          }
  
          inputField.value = newVal;
        });
      });
    };
  
    handleProductQuantity();
  }
  