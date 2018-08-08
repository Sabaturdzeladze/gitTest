let PubSub = (function() {
    let events = {};
    return {
        subscribe(event, callback){
            if ( !events[event] ){
                events[event] = {
                    queue: []
                }
            }
            let index = events[event].queue.push(callback) - 1;

            return (function () {
                return {
                    remove(){
                        delete events[event].queue[index]
                    }
                }
            })(event, index)
        },
        publish(event, detail){
            if ( !events[event] || !events[event].queue.length ) return;

            let callbacks = events[event].queue;
             
            for (let i = 0, ln = callbacks.length; i < ln; i++){
                if ( typeof callbacks[i] === 'function') callbacks[i](detail || {});
            }
        }
    }
})()

let sub_1 = PubSub.subscribe('/onAdd', (data) => {
    console.log('sub_1', data);
})

let sub_2 = PubSub.subscribe('/onAdd', (data) => {
    console.log('sub_2', data);
})

PubSub.subscribe('/onremove', (data) => {
    console.log(data);
})

PubSub.publish('/onAdd', {name: `PubSub Pattern Example`})