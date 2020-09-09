const db = require("../utils/db.js");

exports.Produk = (produk) => {
  return {
    nama: produk.nama,
    harga: produk.harga,
    tersedia: produk.tersedia
  };
};

exports.create = (produk) => {
  return new Promise((resolve, reject) => {
    db.query('INSERT INTO produk SET ?', produk, (err, res) => {
      if ( err ) { reject({error: err}); }

      resolve({
        id: res.insertId,
        ...produk
      });
    });
  });
};

exports.get = (id) => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM produk WHERE id = ?';
    db.query(sql, id, (err, res) => {
      if ( err ) { reject({error: err}); }
      
      if ( res.length ) {
        resolve(res[0]);
      } else {
        reject({error: 'Not Found'})
      }
    });
  });
};

exports.all = () => {
  return new Promise((resolve, reject) => {
    const sql = 'SELECT * FROM produk';
    db.query(sql, (err, res) => {
      if ( err ) { reject({error: err}) }

      resolve(res);
    });
  });
};

exports.update = (id, produk) => {
  return new Promise((resolve, reject) => {
    const sql = `
      UPDATE produk SET 
        nama = ?, 
        harga = ?, 
        tersedia = ? 
      WHERE id = ?
    `;

    const payload = [
      produk.nama, produk.harga,
      produk.tersedia, id
    ];

    db.query(sql, payload, (err, res) => {
      if ( err ) { reject({ error: err }); }

      if ( res.affectedRows == 0 ) {
        reject({ error: 'gagal update, produk tidak ditemukan!' });
      }

      resolve({id: parseInt(id), ...produk});
    });
  });
};


exports.destroy = (id) => {
  return new Promise((resolve, reject) => {
    const sql = `
      DELETE FROM produk 
      WHERE id = ?
    `;

    const payload = [id];

    db.query(sql, payload, (err, res) => {
      if ( err ) { reject({ error: err }); }

      if ( res.affectedRows == 0 ) {
        reject({ error: 'gagal hapus, produk tidak ditemukan!' });
      }

      resolve(null);
    });
  })
}

