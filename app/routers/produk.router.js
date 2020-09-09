module.exports = app => {
  const produk = require('../controllers/produk.controller');

  app.post('/produk', produk.create);
  app.get('/produk', produk.all);
  app.get('/produk/:id', produk.get);
  app.put('/produk/:id', produk.update);
  app.delete('/produk/:id', produk.destroy);
}