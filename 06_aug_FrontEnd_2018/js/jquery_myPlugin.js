// BAD
/* $.fn.myPlugin = function (){
    // code...
    console.log("myPlugin");
    
} */


// Normal 
/* ( function($){
    $.fn.myPlugin = function (){
        // code...
        console.log("myPlugin 2");
    }
} )(jQuery)
 */

 // Good
// ( function($){
//     $.extend($.fn, {
//         myPlugin (){
//             // code...
//             console.log("myPlugin 1");
//         },
//         myPlugin2 (){
//             // code...
//             console.log("myPlugin 2");
//         },
//     });
// } )(jQuery);

( function($){
    $.fn.styleElement = function (options){

        let config = $.extend( {
            text: 'styleElement Default Text',
            color: 'red',
            fontStyle: null,
            fontSize: '2.5em',
            backgroundColor: 'violet',
            padding: '7px',

        }, options )

        return this.each( function(){
            $(this).text(config.text);
            if (config.color){
                $(this).css('color', config.color)
            }
            if (config.fontSize){
                $(this).css('font-size', config.fontSize)
            }
            if (config.fontStyle){
                $(this).css('fontStyle', config.fontStyle)
            }
            if (config.backgroundColor){
                $(this).css('backgroundColor', config.backgroundColor)
            }
            if (config.padding){
                $(this).css('padding', config.padding)
            }

        })
    }
} )(jQuery)