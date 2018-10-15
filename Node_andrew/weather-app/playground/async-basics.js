console.log(`starting app`);

setTimeout(() => {
    console.log(`inside of Callback`);
}, 2000);

setTimeout(() => {
    console.log(`callback`);
}, 0);

console.log(`finishing app`);