const ProdukModel = require('../models/produk.model');


exports.all = (request, response) => {
  ProdukModel.all()
    .then(data => {
      response.status(200).send(data);
    })
    .catch(error => {
      response.status(400).send(error);
    });
};

exports.get = (request, response) => {
  ProdukModel.get(request.params.id)
    .then(data => {
      response.status(200).send(data);
    })
    .catch(error => {
      response.status(400).send(error);
    });
};

exports.create = (request, response) => {
  if ( !request.body ) {
    response.status(400).send({
      error: 'Data kosong'
    });
    return;
  }

  const produk = ProdukModel.Produk(request.body);

  ProdukModel.create(produk)
    .then(data => {
      response.status(201).send(data);
    })
    .catch(error => {
      response.status(400).send(error);
    });
};

exports.update = (request, response) => {
  if ( !request.body ) {
    response.status(400).send({ error: 'Data kosong' });
  }

  const produk = ProdukModel.Produk(request.body);

  ProdukModel.update(request.params.id, produk)
    .then(data => {
      response.status(200).send(data);
    })
    .catch(error => {
      response.status(400).send(error);
    });
};

exports.destroy = (request, response) => {
  ProdukModel.destroy(request.params.id)
    .then(data => {
      response.status(200).send(data);
    })
    .catch(error => {
      response.status(400).send(error);
    });
};