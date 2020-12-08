var y = require('express');
var route = y.Router();

route.use(y.static(`${__dirname}/public`));
route.get('/nike', (req, res) => {
    res.sendFile(`${__dirname}/kood.html`);
})

route.get('/adidas', function (req, res) {
    res.sendFile(`${__dirname}/Adidas.html`);
})

module.exports = route;