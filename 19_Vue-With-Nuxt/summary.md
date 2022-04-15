# 19_Vue-With-Nuxt

# Apa itu Nuxt?

framework yang dibuild menggunakan Vue yang membuat pengembangan web menjadi sederhana dan ampuh

## How to use Nuxt?

dengan mengetikkan di terminal command prompt di dalam editor (bukan di cmd luar editor)

npx create-nuxt-app ./ - -overwrite-dir (minus minus, tanpa spasi)

untuk run program gunakan npm run dev dan hasilnya akan seperti berikut

![Untitled](19_Vue-Wit%204f30c/Untitled.png)

# Struktur dan Direktori Nuxt

dengan menggunakan nuxt, beberapa folder telah dibuat secara otomatis, termasuk untuk routing , sehingga memudahkan frontend dev untuk mengembangkan web, ada beberapa folder yang berubah (hilang dan bertambah) :

_ src

_views

_public

-router

+pages

+static
+layouts

## Pages

pada pages, router secara otomatis membaca file yang berformat .vue yang menjadi halaman

## Layouts

folder khusus untuk membuat properti layout di komponen halaman

## Static

semua file yang disertakan akan secara otomatis dicerna nuxt

# Nuxt SSG & SSR

## SSG

Static Site Generation sesuai digunakan web yang memiliki halaman dinamis

cara kerja SSG, file html sudah siap diload di folder dist

## SSR

Server Site Rendering sesuai web yang memuat secara real time (e-commerce)

cara kerja SSR, file html baru dihasilkan ketika data baru diterima

# SEO Meta

Search Engine Optimization berguna meningkatkan kualitas dan kuantitas webtrafic di search engine seperti google, jadi si SEO ini membantu webnya untuk muncul pertama kali di urutan teratas ketika user menggugling

## Sedangkan,...

SEO Meta adalah tag tak terlihat di dalam head yang memberikan data tentang halaman ke search engine dan user

# PWA

Progressive Web Apps, memudahkan instalasi di berbagai perangkat dengan basis single code

## Cara Kerja PWA

- Web App Manifest
- Service Workers
- Icon
- Disajikan melalui https