"strict mode"
$(document).ready(function(){
    $("#menu").on("click","a", function (event) {
        event.preventDefault();
        let id  = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({scrollTop: top}, 1500);
    });
});


function FuncImagesV(str) {
    elem = document.getElementById('click_off_V');
    if(str == "on") {
        elem.style.display = "block";
    } else {
        elem.style.display = "";
   }
 };

 function FuncImagesH(str){
    elem = document.getElementById('click_off_H');
    if(str == "on") {
        elem.style.display = "block";
    } else {
        elem.style.display = "";
   }
 };


 function borderSetter(id) {
    elem = document.getElementById(id)
    if (borderSetter.prev_elem !== undefined) {
         borderSetter.prev_elem.style.border = "0px solid red"
    }
    borderSetter.prev_elem = elem
    elem.style.border = "5px solid #F06C64"

 }

 function shuffleImages(id) {
    var ul = document.getElementById('Portfolio_Img');
    for (var i = ul.children.length; i >= 0; i--) {
        ul.appendChild(ul.children[Math.random() * i | 0]);
    }
    tabsToggler(id)
 }

 function tabsToggler(id) {
     elem = document.getElementById(id)
    if (tabsToggler.prev_elem !== undefined){
        tabsToggler.prev_elem.style.border = "1px solid #666d89"
        tabsToggler.prev_elem.style.color = "#767e9e"
    }
    tabsToggler.prev_elem = elem
    elem.style.border = "1px solid #c5c5c5"
    elem.style.color = "white"
 }


 function FormInformation(FormId, NameId, EmailId, SubjectId){
     let name = document.forms[FormId].elements[NameId].value
     let email = document.forms[FormId].elements[EmailId].value
     let subject = document.forms[FormId].elements[SubjectId].value
     alert(`${name}\n${email}\n${subject}`)
    return false;
 }