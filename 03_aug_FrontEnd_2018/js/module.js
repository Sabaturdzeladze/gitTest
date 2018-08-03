// (function(x, y){
//     'use strict';
//     console.log(x,y);
// })(1, 3)


let myModule = ( function(){
    //myModule code...
    let _privateVar = 'Hello World from Module';
    let publicProperty = 'this is a public property';

    function _privateMethod(){
        console.log(_privateVar)
    }
    function publicMethod(){
        _privateMethod();
    }
    return {
        publicMethod,
        publicProperty,
    }
}() )

myModule.publicMethod()

