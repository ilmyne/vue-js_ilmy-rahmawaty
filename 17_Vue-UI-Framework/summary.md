# 17_Vue-UI-Framework

# Pengenalan Rangka Kerja UI

UI Framework membantu front end dev untuk membuat aplikasi agar terlihat rapih dan lebih profesional termasuk dalam tombol, ikon dan fungsionalitas yang bisa dipakai secara instan

## Cara Kerja

Framework menyediakan komponen siap pakai lalu diimpor komponen apa saja yang dibutuhkan di aplikasi

# Vuetify

Library yang menyediakan komponen yang akan kita gunakan dalam mendesain UI walaupun kita bukan seorang desainer

## Cara Kerja

Vuetify menyediakan komponen yang siap pakai, contoh tombol :

```jsx
<v-btn
	color="primary"
	elevation="2">
</v-btn>
```

## Dokumentasi Komponen Vuetify

dokumentasi vuetify dapat diakses di [https://vuetifyjs.com/en/](https://vuetifyjs.com/en/)

## Menerapkan Vuetify

dengan npm add vuetify

kemudian menambahkan font dengan script berikut

```html
<link href = 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons' rel="stylesheet"/>
    <link href="https://cdn.jsdeliver.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" rel="stylesheet"/>
```

# Manajemen Warna Tema

pengaturan set warna yang dapat diterapkan terhadap tampilan aplikasi

## Cara Kerja

Vuetify menyimpan default themes yang bisa diatur secara manual

Komponen Vuetify menggunakan warna “primary” sebagai warna dominan

# Gelap Terang

Fitur dark/light theme pengalihan dari tema terang ke gelap and vice versa

## Cara Kerja

selain light theme, Vuetify juga memiliki dark theme

# Reaktivitas dengan Kerangka Kerja UI

penyesuaian ukuran layar pada lebar tampilan device (desktop or mobile)

## Cara Kerja

Lebar layar dibagi menjadi beberapa golongan yang dibagi berdasarkan ukuran golongan tersebut

- Extra Small (xs, small to large phone, <600px)
- Small (sm, small to medium tablet, 600px><960px)
- Medium (md, large tablet to laptop, 960px><1264px)
- Large (lg, desktop, 1264px><1904px)
- Extra Large (xl, 4k adn ultra wide, >1904px)

# Extra

Tabel memiliki fitur tambahan untuk pagination, filter and sort

## Validasi Input

komponen input memiliki props untuk validasi yang cukup canggih, menerima array of functions

# TASKS

Dari pernyataan di bawah ini, manakah yang SALAH tentang UI Framework?
Semuua benar

Dari pernyataan berikut, manakah yang benar mengenai Vuetify?
Adalah sebuah rangka kerja tampilan pengguna (UI) untuk aplikasi Vue

Bagaimana cara kita mengakses variabel `success` pada warna tema Vuetify berikut?
this.$vuetify.theme.themes.light.success

Break Point dari viewport yang tergolong "Extra Small" memiliki range lebar layar yang?
>600px

Bagaimanakah reaktivitas pada Vuetify biasa diterapkan?
Kombinasi <v-layout> dengan <v-flex>