# 12_Vue-CLI

# Vue CLI

Vue-CLI adalah perkakas standar dari ekosistem Vue yang berjalan di atas Webpack, digunakan untuk memudahkan setup / pembuatan aplikasi Vue baru. Disebut “memudahkan” karena dengan memanfaatkan Vue-CLI, kita tidak perlu direpotkan lagi dengan berbagai persoalan terkait file dependencies.

# Webpack

Webpack adalah sebuah module bundler, digunakan untuk menggabungkan seluruh modul project aplikasi berupa file Javascript, HTML, CSS, gambar dan lain-lain menjadi satu file (tipe yang sama).

# Struktur Aplikasi Vue-CLI

![Untitled](12_Vue-CLI%2098f5d/Untitled.png)

- Folder `node_modules/`Berisi semua package / modul node yang di-install dan digunakan dalam project.
- File **index.html**File yang pertama kali diakses oleh web browser.
- Folder `src/`Tempat menulis kode Vue.
- Folder `src/assets/`Berisi file-file asset static seperti gambar, klip video dan lain-lain. File di dalam folder ini tidak ikut diproses oleh Webpack.
- Folder `components/`Tempat komponen Vue.
- File **App.vue**Komponen top-level / paling utama dari aplikasi.
- File **main.js**File js yang dimuat pertama kali setelah index.html diakses.
- File **babel.config.js**Javascript compiler yang akan mengkonversi kode Javascript terkini ke versi sebelumnya agar dapat diterjemahkan oleh browser lawas. Tujuannya, agar user tidak harus selalu menggunakan browser dengan versi terbaru untuk menggunakan aplikasi web yang kita buat.
- File **package.json**Berisi semua dependencies yang digunakan oleh project / aplikasi Vue. Menambah atau membuang modul / package dapat dilakukan dengan mengedit file ini.