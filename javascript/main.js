
// CONTACT FORM ===========================================

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

// SMOOTH SCROLLING ========================================
$(document).ready(function(){
  $(document).on('click', 'a[href^="#"]', function (event) {
      event.preventDefault();

      $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top
      }, 1000);
  });
});






// NAV BAR ===============================================

var elIcon, elNavBar, elClose
document.addEventListener("DOMContentLoaded", function(){
  elIcon = document.querySelector(".NavBarIcon");
  elNavBar = document.querySelector(".NavBar");
  elClose = document.querySelector(".CloseNav");
  elIcon.addEventListener("click", function(){
    elNavBar.style.display = "flex";
    elNavBar.style.transitionDuration = "1s";
    elIcon.style.display = "none";
    elClose.style.display = "block";
  });
  elClose.addEventListener("click", function(){
    elNavBar.style.display = "none";
    elClose.style.display = "none";
    elIcon.style.display = "block";

  });
});
