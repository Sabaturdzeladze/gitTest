let mainModule = (function(){
    let people = ['Person 1', 'Person 2'];

    function getSavedPeople() {
        const peopleJSON = localStorage.getItem('persons');
        if (peopleJSON !== null) {
            return JSON.parse(peopleJSON);
        }
        else {
            return [];
        }
    }
    people = getSavedPeople();
    // DOM caching
    let $element    = $('#peopleModule');
    let $button     = $element.find('button');
    let $input      = $element.find('input');
    let $ul         = $element.find('ul');

    // event bindings
    $button.on('click', addPerson);
    $ul.delegate('i.del', 'click', removePerson);

    _updateDOM();

    function template(items){
        return items.map(item => {
            return `<li><span>${item}</span><i class='del'>X</i></li>`
        }).join('');
    }

    function addPerson(newVal){
        let name = (typeof newVal === 'string') ? newVal : $input.val();
        
        people.push(name);
        localStorage.setItem('persons', JSON.stringify(people))
        _updateDOM();
        $input.val('');
    }

    function removePerson(event){
        let index;
        if (typeof event === 'number'){
            if (event == 0){
                return ;
            }else{
                index = event - 1;
            }
        }else {
            let $remove = $(event.target).closest('li');
            index = $ul.find('li').index($remove);
        }
        people.splice(index, 1);
        localStorage.setItem('persons', JSON.stringify(people))
        _updateDOM();
    }

    function _updateDOM(){
        $ul.html( template(people) );
    }

    return {
        addPerson: addPerson,
        removePerson: removePerson,
    } 
})(); // IIFE

let newProp = 'newProp';
let obj = {
    'hello world'(){
        console.log('wow..')
    }
}