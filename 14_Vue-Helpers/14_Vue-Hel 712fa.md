# 14_Vue-Helpers

# Navigasi pada Vue

## Apa itu Navigasi?

Navigasi adalah kegiatan berpindah halaman satu ke halaman lain

## Cara Vue Melakukan Navigasi

Halaman tersebut harus ada (exist), untuk mengakses halaman dapat mengetikkan pada address bar atau dengan mengklik tombol yang telah diberi link untuk halaman tujuan

## 

# Layout Template Vue

Layout sendiri adalah susunan tata letak, Layout Template adalah kopmponen yang menyusun tata letak dasar untuk masing-masing halaman

Layout Template juga dapat digunakan untuk menyesuaikan tampilan device pada mobile atau desktop

## Cara Kerja Layout Template

Layout Template itu kayak komponen biasa **yang membedakan** adalah **Layout Template dapat meneruskan konten ke anak komponennya**

## Direktori Layout

dibikin sendiri itu biar mudah dimaintenance

## Membuat dan Menggunakan Layout

### Langkah pertama

membuat komponen layoutnya,
membuat 1 file defaultLayout.vue 

# Penyimpanan Global

sebuah metode untuk menyimpan variabel yang dapat diakses dengan mudah di seluruh aplikasi

### perbedaan state komponen, props dan store

- State komponen
tersimpan dan valid di satu komponen saja
- props
tersimpan dan valid di induk dan anak komponen
- store
tersimpan dan valid di seluruh bagian mana pun di aplikasi

## Penyimpanan dengan Vuex

Vuex itu pola manajemen penyimpanan ATAU STORE berbentuk library untuk VueJS

### NOTE!!

**mutations** hanya untuk mengubah nilai **tanpa** ada pengolahan logika di dalamnya, kalo **ada pengolahan logika**  di dalamnya maka memakai **actions**

# Penyimpanan Global Permanen

gunanya untuk menyimpan data secara permanen, jadi waktu direfresh ga ilang datanya