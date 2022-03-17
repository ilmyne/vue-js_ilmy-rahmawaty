# 11_Vue-Fundamental

# Pengenalan Vue

Vue adalah framework JS untuk mengembangkan tampilan website lebih interaktid dan dinamis

## Kelebihan Vue

(+) Mudah membuat aplikasi frontend dan website

(+) Mudah dipelajari dan menyenangkan

(+) Dokumentasi yang lengkap dan rapi

(+) Ramping dan cepat

Vue banyak digunakan oleh start up besar

## Cara Kerja Vue

- Vue CDN
Dapat langsung digunaan di file HTML dengan menambahkan script
<script *src*="https://unpkg.com/vue"></script>
- Vue CLI
Menggunakan perkakas standar dari ekosistem Vue untuk memudahkan setup/pembuatan aplikasi Vue

# Vue Setup dan Resources

aplikasi yang digunakan adalah VSCode dan Browser (Chrome)

Membuat file index.html terlebih dahulu

# Dasar-dasar Vue

## Vue Instance

Setiap aplikasi Vue dimulai dengan membuat instance Vue baru dengan fungsi Vue, seperti code berikut :
var vm = new Vue ({  ..... })
atau .....
const app = Vue.**createApp**({

## Vue Data Binding

Vue.JS menggunakan sintaks template HTML yang memungkinkan mengikat DOM dirender ke Vue

- di dalam konten
contoh :
<span> Message: {{ msg }} </span>
- Di atribut elemen
<div v-bind: id=”dynamicID”></div>
- Elemen HTML
<p>Menggunakan v-html directive: <span v-html=”rawHTML”></span></p>

## Vue Reactivity

Vue instance memiliki propertu bernama data, jika alue dari data ada yang berubah maka value yang ditampilkan pada interface akan berubah otomatis tanpa harus dimuat ulang

# Vue Directive

Directive diawali v- berfungsi untuk menjalankan satu perintah atau ekspresi javascript di dalam atribut

## Macam Vue Directive

- v-bind
one way data binding
- v-model
two way data binding
- v-if, v-else dan v-else-if
rendering secara kondisional
- v-on
memanggil fungsi
- v-for
perulangan

## Shorthand Vue Directive

v-bind dan v-on dapat disingkat

## v-bind

tanpa singkatan
<a v-bind:href=”url”>...</a>

dengan singkatan
<a :href=”url”>...</a>

## v-on

tanpa singkatan
<a v-on:click=”doSomething”>...</a>

dengan singkatan
<a @click=”doSomething”>...</a>

# Events dan Method

## Events

menggunakan directive v-on

## Methods

methods adalah fungsi yang dapat diakses secara langsung pada VM atau menggunakannya dalam ekspresi direktif. semua metode akan memiliki konteks “this” secara otomatis terikat ke instance Vue

# Computed Properties dan Watchers

## Computed Properties

digunakan untuk logika yang kompleks

## Watchers

Memantau sebuah variabel dan melakukan tindakan tertentu ketika nilai berubah

# Component

komponen adalah vue instance yang dapat digunakan kembali dengan nama yang didefinisikan. 

# INGAT

## Vue Instance

Setiap aplikasi Vue dimulai dengan membuat instance Vue baru dengan fungsi Vue, seperti code berikut :
var vm = new Vue ({  ..... })
atau .....
const app = Vue.**createApp**({

# TASKS

Apa itu yang dimaksud dengan penggunaan Vue melalui CDN?
Vue dapat digunakan langsung di file HTML dengan menambahkan <script> yang mengimpor pustaka Vue

Apa perbedaan yang paling tepat dari direktif v-bind dan v-model?
Direktif v-model untuk memberitahu Vue kalau kita ingin melakukan two way data binding sedangkan v-bind untuk one way data binding

Di antara beberapa sintaks berikut, manakah yang merupakan sintaks yang benar untuk penggunaan Vue data binding di dalam konten?
menggunakan kurung kurawa { }
<span>Message {{ msg }}</span>

Manakah yang merupakan definisi dari `this` pada Vue Instance yang paling benar?
Adalah sebuah konteks nilai yang memiliki nilai yang sama dan mengekspose seluruh variabel data, computed properties, plugins dan fungsi methods yang telah didefinisikan di dalam Vue Instance

Fitur khusus yang memungkinkan kita untuk memantau sebuah variabel dan melakukan tindakan tertentu ketika nilai tersebut berubah adalah definisi dari?
Vue Watcher