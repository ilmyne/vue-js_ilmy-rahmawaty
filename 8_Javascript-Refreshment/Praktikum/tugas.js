var a = 5;
let b = "kampus merdeka";
const nama = "Budi";
let terdaftar = true;
//2a. yang awalnya "false" menjadi true
//(karena menggunakan IF maka terdaftar harus bernilai true untuk tampil)
let lengkap_arr = [a, b, nama, terdaftar];
//1a. ambil index ke-2 dalam array di baris 5 dan tampilkan dalam console
console.log(lengkap_arr[2]); //outputnya = Budi

function perkenalan(){
    let asal ="indonesia";
    return console.log(
        "perkenalkan nama saya " +
        nama +
        " nomor urut " +
        a +
        " sekarang sedang mengikuti " +
        b +
        "berasal dari " +
        asal
    );
}

if (terdaftar === true){
    console.log(nama + " terdaftar sebagai kegiatan kampus merdeka");
}//2a. pada baris ke-4 harus bernilai true

a = b;
//nama = b;

//console.log("asal diakses = " +asal);
console.log("array = " +nama);
console.log("a adalah = " +a);
console.log("b adalah = " +b);
perkenalan(); //1c.
//1d. adalah tampilan di atas

//2a. baris 21,22, 23 pada soal tidak dapat tampil karena
// nilai variabel terdaftar = "false"
//untuk bisa tampil, maka nilai variabel harus diganti menjadi true

//2b. karena pada baris 25 pada soal telah dinyatakan bahawa a = b
//jadi tidak bisa dinyatakan kembali oleh nama = b;

//2c. tidak bisa dan tidak ada hubungannya, karena baris 26 dan baris 28 pada soal itu berbeda
//baris 26 menyatakan nama = b; sedangkan pada baris 28 memanggil variabel asal
//variabel asal tidak terdefinisikan sebelumnya
//kecuali jika sudah terdefinisi sebelumnya seperti const asal = "INDONESIA"
//nah pada function perkenalan pun sudah dideklarasikan namun hanya berlaku di dalam block tsb, tidak bisa dipanggil/digunakan di luar block

//3.
const foo = ['Budi', 'Sita', 'Ayu'];
['Budi', 'Sita', 'Ayu'] = ['a', 'b', 'c'];
console.log(foo);
//const foo = ['Budi', 'Sita', 'Ayu'];
//const goo = [a, b, c];

//const [a, b, c] = foo;
//console.log(0);
//console.log(1);
//console.log(2);

//const goo = ['a', 'b', 'c'];
//const ['Budi', 'Sita', 'Ayu'] = goo;
//console.log('Budi');


//let 'Budi', 'Sita', 'Ayu';
//['Budi', 'Sita', 'Ayu'] = ['a', 'b', 'c'];
//console.log('Budi');

//4
let bdays = ['10/17', '05/19', '20-19'];
console.log(bdays);

//5
let value = [1,2,3,4,5,6];
const map1 = value.map(x => x*2);
console.log(map1);

//6
let arr = [1.5, 2.56, 5.1, 12.33];
const map2 = arr.map(x => Math.round(arr));
console.log(map2);