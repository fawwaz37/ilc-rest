const express = require('express');
const app = express();

const data = [ 
    { no: 1, nama: 'Nama Satu', email: 'abc@gmai.com' },
    { no: 2, nama: 'Nama Dua', email: 'efg@gmail.com' } ]

/* Menampilkan Seluruh Data */
app.get('/', (req, res) => {
    res.send(data);
});

/* Menampilkan Satu data */
app.get('/:no', (req, res) => {
    const { no } = req.params;
    const find = data.find(x => x.no == no);
    if (find !== undefined) {
        res.send(find);
    } else {
        res.send('Data Tidak Ditemukan');
    }
})

app.listen(8000, () => {
    console.log(`App berjalan di http://localhost:8000`);
});
