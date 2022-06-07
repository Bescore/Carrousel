var btn_right = document.querySelector( "#btn_right" );
var btn_left = document.querySelector( "#btn_left" );
var init=document.querySelector(".init")

var initialisation = 6;




for (let index = 0; index < initialisation; index++) {
    $( btn_right ).click( function () {
        init.style.transform="translate(-200px)"
    } )
     
}
