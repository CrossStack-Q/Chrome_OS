// (function($) { // Begin jQuery
//     $(function() { // DOM ready
//         // If a link has a dropdown, add sub menu toggle.
//         $('nav ul li a:not(:only-child)').click(function(e) {
//             $(this).siblings('.nav-dropdown').toggle();
//             // Close one dropdown when selecting another
//             $('.nav-dropdown').not($(this).siblings()).hide();
//             e.stopPropagation();
//         });
//         // Clicking away from dropdown will remove the dropdown class
//         $('html').click(function() {
//             $('.nav-dropdown').hide();
//         });
//         // Toggle open and close nav styles on click
//         $('#nav-toggle').click(function() {
//             $('nav ul').slideToggle();
//         });
//         // Hamburger to X toggle
//         $('#nav-toggle').on('click', function() {
//             this.classList.toggle('active');
//         });
//     }); // end DOM ready
// })(jQuery); // end jQuery


// you know the size for your image
imageWidth = 1919;
imageHeight = 761;
imageProportion = imageHeight / imageWidth;

function resizeJumbo() {
    $("#hungry").css({ height: $(window).width() * imageProportion });
}

$(window).on("resize", function() {
    resizeJumbo();
});

$(document).ready(function() {
    resizeJumbo();
});


$("#gallery").bind('ended', function() {
    this.currentTime;
    this.play();
});


function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}