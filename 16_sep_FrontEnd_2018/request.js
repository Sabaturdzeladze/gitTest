const request = require('request')

request('http://techub.ge', (err, response, body) => {
    if (!err && response.statusCode === 200){
        console.log(body);
    } else {
        console.log(err);
    }
})
