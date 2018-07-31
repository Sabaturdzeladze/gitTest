$(document).ready( function(){
    // DOM Loaded
    // alert("Dom");

    // $(selectorExpression)
    // const divElement = $("div, p");
    // console.log(divElement);
    
    // let trElements = $("table tr")
    // console.log(trElements);
    
    let customerDiv = $("#customersDiv");

    // console.log(customerDiv);

    // let wow = $(".wow")
    // console.log(wow);
   
    // const multiClasses = $(".content__box, .wow");
    // console.log(multiClasses);
    
    // const table = $("table[border]");
    // console.log(table);
    
    // const span = $("span:contains('site')")
    // console.log(span);
    
    const oddTr = $(`tr:odd`);
    // console.log(oddTr);
    
    const evenTr = $(`tr:even`);
    // console.log(evenTr);

    evenTr.each( function(index, element) {
        // console.log($(this).html());
        this.title = `current Index: ${index}`;
    } )

    let attrVal = customerDiv.attr('class', `newClass oho`);
    customerDiv.addClass(`newClass--Example`);
    console.log(attrVal);
    
} )
