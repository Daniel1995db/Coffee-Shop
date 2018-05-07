
// CONTACT FORM
var elForm, elButton, elMessage, elFieldset;

document.addEventListener("DOMContentLoaded", function(){
  elForm = document.querySelector(".ContactForm");
  elButton = document.querySelector(".SubmitButton");
  elMessage = document. querySelector(".ContactFormMessage");
  elFieldset = document.querySelectorAll("fieldset");
  elForm.addEventListener("submit", function(e){
    // console.log(e);
    // console.log(elFielset)
    e.preventDefault();
    elButton.style.display = "none";
    var i;
    for (i = 0; i < elFieldset.length; i++) {
    elFieldset[i].style.display = "none";
    };
    // console.log(elMessage);
    elMessage.style.fontSize = "2em";
    elMessage.style.top = "35%";
    elMessage.innerHTML = "Thanks for contacting us.<br> We'll reply shortly!";
  });
});

// SMOOTH SCROLLING
// $('a[href*=#]:not([href=#])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'')
//         || location.hostname == this.hostname) {
//
//         var target = $(this.hash);
//         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//            if (target.length) {
//              $('html,body').animate({
//                  scrollTop: target.offset().top
//             }, 1000);
//             return false;
//         }
//     }
// });
$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
});
