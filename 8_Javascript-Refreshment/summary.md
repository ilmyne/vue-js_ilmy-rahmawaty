# 7_Javascript-Refreshment

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

# TASK

1. manakah yang bukan pembuatan variable dalam javascript ?
print (karena js menggunakan console.log();
2. Manakah yang bukan merupakan primitive data type di javascript ?
int (primitives/tipe data dalam js ada number, string, boolean, undefined, null, symbol, biginteger)
3. Manakah yang dapat dilakukan destructuring dalam javascript
Array dan Object
4. Manakah yang bukan merupakan method dalam javascript ?
Interface
5. Manakah yang bukan merupakan control flow di dalam javascript?
Yes Not