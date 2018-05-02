var elForm, elButton, elMessage, elFielset;

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
