var fs = require('fs');
var shop = require('./shopping');
var t = require('express');
var b = t();
b.use(t.static(`${__dirname}/public`))
b.get('/', (req, res) => {
    res.sendFile(`${__dirname}/home.html`);
})
b.post('/', (req, res) => {
    res.send("hello World");
})
b.use('/shop', shop);
b.get('/l', function (req, res) {
    res.sendFile(`${__dirname}/test.html`);
})
b.get('/mytext', function (req, res) {
    res.sendFile(`${__dirname}/text.html`)
})
b.listen(5000);