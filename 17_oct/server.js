const express = require('express');
const path = require('path')
const cookieParser = require('cookie-parser');
const session = require('express-session');
const multer = require('multer');
const mCache = require('memory-cache');





const app = express();
const PORT = process.env.PORT || 3000;

const multerConfig = multer({
    dest: 'public/uploads'
})

app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());
app.use(session({
    secret: 'super cat',
    name: "demo-site",
    resave: true,
    saveUninitialized: false,
}));

app.set('view engine', 'pug');
app.set('views', './public/views');


// put(key, value, time, timeoutCallback);
// get(key);
mCache.put('super-cache', 'wow', 300, (key, value) => {
    console.log(`Key - ${key}, Value - ${value}`);
})

console.log(`Super Cache - ${mCache.get('super-cache')}`);
setTimeout(() => {
    console.log(`Super Cache - ${mCache.get('super-cache')}`);
}, 500);


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'upload.html'))
})

const cachePage = (duration) => {
    return (req, res, next) => {
        let key = `__cached__${ req.originalUrl || req.url }`;
        let pageBody = mCache.get(key);
        if (pageBody) {
            res.send(pageBody);
        } else {
            res.sendResponse = res.send;
            res.send = (body) => {
                mCache.put(key, body, duration * 1000);
                res.sendResponse(body);
            }
            next();
        }
    }
}
app.get('/cache', cachePage(4), (req, res) => {
    setTimeout(() => {
        const date = new Date();
        let time = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
        res.render('cached', {time});
    }, 3000);
})


//multerConfig is used to upload/ .single is method for single file / image - name
app.post('/', multerConfig.single('image'), (req, res) => {
    const imgUrl = path.join('uploads', req.file.filename) // image is the file name. this image = .single('image')
    const userName = req.body.username;
    res.render('index', {
        imgUrl,
        userName
    });
});


app.listen(PORT, () => {
    console.log(`Server on Port - ${PORT}`);
});