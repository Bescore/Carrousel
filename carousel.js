var btn_right = document.querySelector( "#btn_right" );
var btn_left = document.querySelector( "#btn_left" );
var init = document.querySelector( ".init" )
var all_img = document.querySelectorAll( ".img_gif" )




var val = 0
var count = 0



$( btn_right ).click( function () {
    val -= 200
    init.style.transform = "translate(" + val + "px)"
    count += 1
    if ( count == all_img.length ) {
        val += 200 * all_img.length
        init.style.transform = "translate(" + val + "px)"
        count = 0
    }
} )


