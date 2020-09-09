# Express CRUD

Instalasi:

```
npm install
```

Create database in MySQL or MariaDB named `db_express_crud` and then copy and run query to create table named `produk`:

Buat database bernama `db_express_crud` di MySQL atau MariaDB dan buat tabel `produk`:

```sql
CREATE TABLE IF NOT EXISTS `produk` (
  id INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT,
  nama VARCHAR(255) NOT NULL,
  harga INT(11) NOT NULL,
  tersedia BOOLEAN DEFAULT TRUE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
```

Jalankan:

```
node server.js
```

Video Tutorial:

Todo