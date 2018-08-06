self.addEventListener('message', function(event){
    self.postMessage(`Sank you. You said: ${event.data}`);
    self.close();
},false)