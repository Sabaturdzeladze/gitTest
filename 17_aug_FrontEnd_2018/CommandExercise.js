class Styling {
    constructor (obj){
        this._size = obj.size;
        this._color = obj.color;
        this._border = obj.border;
    }

    size(){
        let textArea = document.querySelector('div')

        textArea.style.fontSize = this._size;
        textArea.style.color = this._color;
        textArea.style.border = this._border;

        console.log('rame');
    }
}

class Command { 
    constructor(obj){
        this._obj = obj;
        this._backCommands = [];
        this._nextCommands = [];
        this._fontSizes = [];
        this._colors = [];
        this._borders = [];
    }

    execute(command){
        debugger
        this._backCommands.push(command);
        this._fontSizes.push(this._obj.size)
        this._colors.push(this._obj.color)
        this._borders.push(this._obj.border)
        return this._obj[command]();
    }

    back(){
        if(this._fontSizes.length > 0){
            let textArea = document.querySelector('div')
            debugger
            if (this._fontSizes.length > 1){
                this._obj[this._backCommands[this._backCommands.length - 1]]
                let lastCommand = this._backCommands.pop()
                this._nextCommands.push(lastCommand);
                textArea.style.fontSize = this._fontSizes.pop();
                textArea.style.color = this._colors.pop();
                textArea.style.border = this._borders.pop();
                return this._obj[this._backCommands[this._backCommands.length - 1]]()
            }else{
            // this._nextCommands.push()

                textArea.style.fontSize = '1em';
                textArea.style.color = 'black';
                textArea.style.border = '';
            }
        }
    }

    next(){
        // debugger
        if(this._nextCommands.length > 0){
            // if (this._nextCommands.length > 1){
                let lastCommand = this._nextCommands.pop()
                this._backCommands.push(lastCommand);
                return this._obj[this._nextCommands[this._nextCommands.length - 1]]()
            // }
        }
    }


}

let style, cmd;

document.querySelector('#add').addEventListener('click', function(e){
    let sizeInput = document.querySelector('#fontSize').value
    let colorInput = document.querySelector('#color').value
    let borderInput = document.querySelector('#border').value
    
    let obj = {
        size: sizeInput,
        color: colorInput,
        border: borderInput
    }

    style = new Styling(obj);

    cmd = new Command(style);

    cmd.execute('size');
})

document.querySelector('#back').addEventListener('click', function(){
    cmd.back()
})
document.querySelector('#next').addEventListener('click', function(){
    cmd.next()
})

// document.querySelector('#back')