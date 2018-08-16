function Observer(){
    this.sourceInput = document.querySelector('input')
    this.create = document.querySelector('button')
    this.sourceData = [];
    this.listeners = [];
}

Observer.prototype.init = function(){
    this.listeners = document.querySelectorAll('div')
    this.sourceData.length = this.listeners.length
}

Observer.prototype.update = function(index, func){
    for (let i = 0; i < this.sourceData.length; i++){
        if( this.sourceData[i] ){
            console.log(this.sourceData[i]);
            this.listeners[i].innerHTML = this.sourceData[i]
        }
    }

    if (func){
        let currentElement = this.listeners[index];
        func(currentElement)
    }
}

Observer.prototype.add = function(index, func){
    this.sourceData[index] = this.sourceInput.value;
    this.update(index, func);
}

Observer.prototype.new = function(){
    let div = document.createElement('div')
    document.body.appendChild(div)
    this.init()

    Array.from(this.listeners).push(div)
    Array.from(this.sourceData).push(div);
    this.add(this.sourceData.length - 1);
}

const observer = new Observer();
observer.init();

observer.sourceInput.addEventListener('keyup', () => {
    for(let i = 0; i < observer.listeners.length; i++){
        observer.add(i);
    }
})

observer.create.addEventListener('click', () => {
    observer.new()
})
