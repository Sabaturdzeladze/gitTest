let mainModule = (function(){
    function getSavedInfo() {
        const peopleJSON = sessionStorage.getItem('person');
        if (peopleJSON !== null) {
            return JSON.parse(peopleJSON);
        }
        else {
            return {};
        }
    }

    let person = getSavedInfo();
    let $name = $('#name');
    let $saveButton = $('#save');
    let $age = $('#age')

    let $surname = $('#surname');
    let $showInfo = $('#show-info');

    // render()
    function assign(){
        person.name = $name.val();
        person.surname = $surname.val();
        person.age = $age.val();

        sessionStorage.setItem('person', JSON.stringify(person));
    }
    let inputs = $('input');

    function render (){
        let ps = $('p');
        ps.remove();
        person = JSON.parse(sessionStorage.getItem('person'));
        let pName = document.createElement('p')
        pName.textContent = person.name;
        $('body').append(pName);
        let pSurName = document.createElement('p')
        pSurName.textContent = person.surname;
        $('body').append(pSurName);
        let pAge = document.createElement('p')
        pAge.textContent = person.age;
        $('body').append(pAge);
        inputs.val('');
    }

    $saveButton.on('click', assign);
    $showInfo.on('click', render);
}) ();