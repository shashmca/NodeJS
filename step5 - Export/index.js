

var stocksCtrl = require('./stocks.ctrl');

stocksCtrl.getStocks(function(err, stocks) {
    console.log('Stocks are ', stocks.length);
    console.log(stocks);
});
