
exports.stocks = function(req, res) {
  res.render('partials/stocks',
      {
        layout: false,
        stocks: ['msft','gm','appl','goog','f','fb']
      }
  );
}
