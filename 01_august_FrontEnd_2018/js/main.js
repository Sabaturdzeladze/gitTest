$(document).ready( function() {
    // $('div').each( function(index, element) {
    //     console.log($(this));
    //     console.log($(this).css("background-color"));
        
    // } )

    // $("img").attr({
    //     "title": "front End",
    //     "style": "border: 2px dotted black"
    // })

    // $('img').each( function(index, element) {
    //     console.log($(this).attr("style"));
    // } )

    // append() / appendTo()
    // prepend() / prependTo()
    // wrap()
    // remove()

    // $(".class-5").append("<span>class-5 Content</span>")
    // $("div").append(` <strong>Multiple Append</strong>`)
    // $("<span>class-5 Content</span>").appendTo((".class-1"))

    // $(".class-3").prepend(`<strong>Prepend</strong> `)

    // $('#header').wrap(`<header class="header__block" />`);

    // $('.class-2').remove();

    $('div').css({
        'color': 'white',
        'font-size': '30px',
        'font-weight': 'bold',
    });

    $('div, h1').addClass("newClass");
    let header1 = $('h1')
    if( header1.hasClass("newClass") ){
        // console.log("h1 has class named newClass");
        header1.removeClass("newClass");
    }  

    // jQuery events
    /* 
        click()
        blur()
        focus()
        mousemove()
        keydown()

        https://api.jquery.com/category/events/
    */

    // $('#header').click( (e) => {
    //     console.log(e);
    //     $('#small__header').click();
    // } )

    // $('#small__header').click( e => {
    //     console.log('this event was clicked');
    // } )

    // $('div').on('click mouseenter mouseleave', function() {
    //     console.log('div was clicked');
    //     $(this).toggleClass('entered');
    //     // $('#header').off('click');
    // })

    // $('div').on({
    //     mouseenter: function(){
    //         $(this).addClass('entered');
    //     },
    //     mouseleave: function (){
    //         $(this).removeClass('entered')
    //     }
    // })

    // $('div').hover(function(){
    //     $(this).addClass('entered');
    // },
    // function (){
    //     $(this).removeClass('entered')
    // })

    let storage = localStorage;

    $('#saveBtn').click( function(){
        let name = $('#name').val();
        let old = storage.getItem('userName')
        storage.setItem('userName', `${old} ${name}`)
        console.log(storage.key(0));
        console.log(storage.rema);
    } )
} );