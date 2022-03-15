# 10_Frontend-Fundamental

# HTML

**HTML (Hypertext Markup Language)** adalah sebuah standar yang digunakan secara luas untuk menampilkan halaman web

# HTML BUKAN BAHASA PEMROGRAMAN

## Kegunaan HTML

- Membuat struktur dari halaman website
- Mengatur tampilan dan isi dari halaman web
- Membuat tabel dengan tag HTML table
- Membuat form HTML
- Membuat gambar dengan canvas
- Mempublikasikan halaman website secara online

## Framework HTML

bisa bermacam-macam, seperti notepad, sublime, atom, vscode dan lain-lain. namun sangat disarankan menggunakan vscode karena support dengan berbagai extension

## Fungsi TAG HTML

dengan menekan ! kemudian button tab, langsung mendeklarasikan beberapa tag HTML
contoh :

<!DOCTYPE *html*>

<html *lang*="en">

<head>

<meta *charset*="UTF-8">

<meta *http-equiv*="X-UA-Compatible" *content*="IE=edge">

<meta *name*="viewport" *content*="width=device-width, initial-scale=1.0">

<title>Document</title>

</head>

<body>

</body>

### Tag Heading & Paragraph HTML

Heading mulai dari 1 s/d 6

<h1>Heading Satu</h1> dst

![Untitled](10_Fronten%2049676/Untitled.png)

### Tag Link HTML

Membuka Tab Baru
<a *href*="form.html"*target*="_blank">Form Sign up</a>

Tetap di page yang sama
<a *href*="form.html">Form Sign up</a>

### Tag Image HTML

**NOTE : HARUS BERADA DI FOLDER YANG SAMA**
<img src=”logo-alterra.png”/>

### List HTML

**Ordered List <ol></ol>**

![Untitled](10_Fronten%2049676/Untitled%201.png)

<ol *type*="1">

<li>Mengunjungi Website <a *href*="index.html">My MyBook</a></li>

<li>Mendaftar di <a *href*="form.html"*target*="_blank">Form Sign up</a></li>

<li>Selesai!</li>

</ol>

**Unordered List <ul></ul>**

![Untitled](10_Fronten%2049676/Untitled%202.png)

<ul>
<li>Social Media yang Nyaman dan Mudah</li>
<li>Fitur yang canggih dan menggunakan teknologi terkini</li>
<li>Dibuat oleh calon developer full-stack masa depan</li>
</ul>

# CSS

**Cascading Style Sheet** (CSS) adalah bajunya HTML, dapat mengkreasikan tampilan HTML di CSS. Disimpan dalam format file.css

Banyak hal yang bisa dilakukan menggunakan CSS, antara lain mengatur warna teks, jenis font, baris antar paragraf, ukuran kolom, dan jenis background **yang dipakai.

Penggunaan CSS seperti gambar berikut :

![Untitled](10_Fronten%2049676/Untitled%203.png)

dan Tampilan di halaman HTML nya seperti berikut

![Untitled](10_Fronten%2049676/Untitled%204.png)

Menggunakan CSS menjadikan pembuatan website khususnya Front End menjadi lebih ringkas, selain itu ada beberapa kelebihan menggunakan CSS yaitu :

- Halaman lebih cepat dimuat
- Proses *maintenance* lebih mudah
- Style lebih beragam daripada HTML (karena formatnya adalah CSS)
- Kompatibel dengan berbagai device

## Macam CSS di dalam HTML

- **Inline CSS**
    
    penempatannya langsung di dalam file HTML (tidak perlu membuat file.css)
    contoh :
    <img *src*="sample-logo.png" *width*="250" *height*="50" *alt*="">
    
- External CSS
    
    nah yang ini baru membuat file.css
    lebih tertata rapi, jadi tidak nyampur dengan HTML
    contoh : (sudah membuat file.css)
    
    ![Untitled](10_Fronten%2049676/Untitled%205.png)
    
- Internal CSS
    
    Penggunaan Internal CSS sama saja seperti Inline CSS, tapi Internal CSS itu dideklarasikan di bagian atas (pada header) source code HTML, masih dalam 1 file di file.html namun tidak nyampur dengan HTML
    

# Javascript

adalah bahasa pemrograman tingkat tinggi (High Level), Scripting Untyped dan interpreted. istilahnya JS ini mendekati ke bahasa manusia gitu, jadi mudah dipahami, ga seribet bahasa yg lainnya, lebih simpel, bukan rasis tapi emg gituu
**Contoh Penerapan JS** digunakan di chrome, internet explorer, mozilla, opera, bootstrap, vue js, react js dll

## Pengertian Var, Let & Const

penggunaan Var, Let & Const ada 3 yaitu pada :

- Declaration
- Scoping
- Hoisting

### Declaration

proses pembuatan variabel untuk menyimpan data
contoh penerapannya .... (buka ppt Alta ya Ilmy, belajar lagi)

### Scoping

menentukan letak variabel, fungsi dan objek dan dapat diakses dimana saja pada kode. *Scope* dikendalikan oleh lokasi deklarasi variabel
**Global**
bisa diakses dimana saja karena letaknya memang di luar
**Function**
hanya bisa diakses di dalam function, diluar itu gabisa
**Block**
sama kayak **Function** tapi versi percabangan (if-else)

### Hoisting

membuat beberapa jenis variabel atau fungsi dapat diakses/digunakan dalam koe sebelum dideklarasikan

## Values & References

terdapat 2 yaitu primitives dan object

### Primitives

meneruskan nilai (elemen pemrosesan terkecil dan sederhana dalam bahasa pemrograman)
contoh : number, string, boolean, undefined, null, symbol, biginteger

### Objects

unit yang menyimpan properti dan fungsi (method)
contoh : objects, array, function, date, set, map, weak set, weak map

**aturan sederhana untuk meneruskan nilai adalah bahwa semua nilai primitif dalam JS diteruskan oleh nilai**

## Destructing

mengcopy n ilai dari array ke variabel yang berbeda
destructing ada 2 yaitu array dan objet
di dalam destructing juga ada istilah spread

### Spread

digunakan ketika semua elemen dari object/array dimasukkan ke list

## Method

fungsi yang terkait dengan object, membuat program sesimpel, sesederhana mungkin

macam-macam method :

- Concat
- Map
- Foreach
- Slice
- Filter
- Reduce

### Concat

menggabungkan dua atau lebih array dan mengembalikan salinan array yang digabungkan

### Map

membuat array baru dengan hasil memanggil fungsi untuk setiap elemen array

### Foreach

memanggil fungsi untuk setiap elemen array

### Slice

memilih bagian dari array dan mengembalikan array baru (kayak membagi gitu, tapi nnti ada beberapa elemen yang hilang karena kena slice)
ps: kalo bingung bisa buka materi di web alta, ok ilmy

### Filter

membuat array baru dengan setiap elemen dalam array yang lulus seleksi

### Reduce

melakukan operasi pada setiap elemen array menjadi nilai tunggal

## Control Flow

sebelum ke control flow, ini kita ada **normal flow**. apa itu normal flow?

### Normal Flow

pengeksekusian dari vertikal/horizontal dan dilakukan berurutan
sounds kaku right?

nah, gimana kalo kita pengen pengeksekusiannya sak karepe programmer e? kita pake **Control Flow**

### Control Flow

mengatur alus eksekusi sesuai keinginan

contohnya :

### Iterasi/looping

for, while, do while

### Percabangan

if, else, switch, block, try...catch, break, continue, throw

## Function

memiliki properti dan method maka bisa dibilang function dalam JS adalah object

digunakan untuk melakukan serangkaian komputasi/prosedur yang dapat digunakan berulang kali

## Async-Await

macamnya :

- Synchronous
- Asynchronous
- Callback
- Promise
- Asynchronous function
- Await

### Synchronous

mengeksekusi setiap perintah satu persatu sesuai urutan kode

### Asynchronous

hasil eksekusi yang tidak urut namun berdasarkan waktu proses

### Callback

fungsi yang dikirimkan sebagai parameter pada fungsi lain
fungsi yang dieksekusi setelah fungsi lain selesai dirunning

### Promise

objek yang merepresentasikan keberhasilan/kegagalan pada event asynchronous yg mendatang

### Asynchronous function

fungsi yang bekerja secara asynchronous yang menghasilkan promise sebagai return value, namun penulisan code menggunakan penulisan synchronous

### Await

sebuah keyword pada async function, bertujuan menghentikan eksekuasi sambil menunggu promise selesai

## Classes

adalah prototype dari object yang akan dibuat

## DOM

# TASKS

Apa kegunaan dari baris perintah berikut?
$ npm install

Menambahkan sebuah dev dependensi ke dalam package.json dan mengunduhnya ke dalam node_modules

Apa kegunaan dari baris perintah berikut?
$ git remote add <remote-name> <link-https-git>

Menghubungkan repository yang ada di local dengan yang ada di cloud

Dari pernyataan-pernyataan di bawah ini, manakah yang menurut kamu benar tentang persamaan HTML, CSS dan Javascript dengan anatomi tubuh manusia?

HTML sebagai kerangka/tulang, CSS sebagai pakaian/kulit dan Javascript sebagai Otak

Dari pernyataan-pernyataan di bawah ini, apa yang menjadi perbedaan antara tag <div> dan <span> yang paling benar?

<div> memiliki tipe block-level sedangkan <span> memiliki tipe inline-level

Di antara penggunaan CSS berikut, manakah yang TIDAK dapat dilakukan?

Menggunakan file lain berekstensi .style yang diimport dengan tag <link>