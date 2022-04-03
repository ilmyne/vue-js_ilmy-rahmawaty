# 16_Vue-Quality-Control

# Debugging

proses menghilangkan/mengidentifikasi kesalahan/error/bug di software komputer

## Cara kerja Debugging

- Identifikasi kesalahan/error
- Identifikasi solusi

## Tools untuk identifikasi error

- Devtools
- Consoles
- Log

digunakan dengan mengklik F12 atau inspect element (klik kanan pilih inspect)

atau juga bisa dengan menggunakan npm run serve pada terminal (cdm vscode)

## Tips Identifikasi Kesalahan

>Tenang dan Fokus (no panic panic team)

>Rasional dan kontekstual

>Perhatian pada detail untuk clue sekecil apapun (kali aja ada error di typo atau kurang simbol ; )

>Tidak tergesa-gesa untuk bertanya

## Sumber Identifikasi Solusi

>Diri sendiri (belajar dari error yang dialami sebelum-sebelumnya, alangkah lebih baiknya jika mengalami sebuah error dicatat/dinoted pada notion, intinya dicatat, just in case jika suatu saat nanti mengalami error yang sama atau teman mengalami error yang sama, kita bisa membantu)

>Rekan kerja (peer, senior, leader atau mentor)

>Google (bisa dari github, stackoverflow, tutorial di yt dengan catatan harus smart cari keyword untuk solusi dari error yang dialami)

>Komunitas (forum di facebook, discord, telegram atau media sosial lainnya, karena error yang kita alami pasti pernah dialami oleh orang lain)

# Unit Testing

proses verifikasi bahwa kode kita benar-benar berjalan seperti yang kita harapkan

## Cara Kerja

dengan menguji beberapa potongan kode yang ada di program secara individual dalam bentuk **Test Assertion**, dalam tes ini kode mengembalikan nilai true kecuali ada kesalahan/error/perilaku yang tidak diharapkan dari program kita, jadi nilainya hanya **TRUE/FALSE**

## Tools Unit Testing

pada Vue penggunaan Unit Testing ada 2 pilihan yaitu **Jest** dan **Mocha**

## Kenapa Harus Unit Testing

>Meningkatkan rasa pecaya diri (biar yakin dengan kodingan program sendiri, ngga was was, pun jika ada kesalahan/error ya gapapa, biar tau kesalahannya dimana)

>Meningkatkan standar kode

>Mencegah kesalahan sebelum benar-benar terjadi (namanya juga unit testing pasti ketahuan ada errornya, mending disolve sekarang errornya daripada nanti ke depan makin bertumpuk errornya)

>Memberi batasan dan kriteria yang jelas jika melakukan refactor

# Jest

Jest adalah salah satu tools yang dapat digunakan untuk Unit Testing berbasis Javascript

# Matriks Ukur Kinerja

Tolak ukur penting yang menginformasikan seberapa baik kinerja aplikasi kita

## Cara Kerjanya

dengan menggunakan tools yang memeriksa beberapa rangkain yang nantinya akan menghasilkan laporan terperinci dan skor tentang seberapa baik kinerja halaman

## Tools

Menggunakan Lighthouse untuk menentukan skor pada kinerja aplikasi web

## Menggunakan Lighthouse

buka aplikasi web pada google chrome lalu buka devtools pada tab Lighthouse kemudian “Generate Report” lalu akan muncul laporan kinerja aplikasi web

# Mengoptimalkan Kinerja

proses mengoptimalkan kinerja aplikasi web berdasarkan informasi skor matriks ukur

## Core Web Vitals

penilaian google chrome dengan page experience

## 3 Indikator Core Web Details

- LCP
lama Loading / kecepatan memuat halaman website
- FID
Interactivity, response si web nya ketika kita request/action
- CLS
Visual Stability, stabilitas layout pada website

# TASKS

Berikut yang merupakan pengertian dari Debugging dalam ranah aplikasi yang benar adalah?

Proses mengidentifikasi dan menghilangkan kesalahan dari perangkat lunak komputer

Berikut yang merupakan pengertian dari Unit Testing dalam ranah aplikasi yang benar adalah
Proses verifikasi bahwa kode kita benar-benar berperilaku seperti yang diharapkan dan validasi bahwa kode kita tetap benar sepanjang masa aplikasi

Perkakas yang biasa membantu menentukan skor pada matriks ukur kinerja aplikasi web yang paling tepat adalah?
Lighthouse

Tools identifikasi error?
Semua benar (devtools, consoles, log)

Keuntungan menjalankan Unit Testing?
tidak ada jawaban yang salah, semua benar (meningkatkan rasa percaya diri, meningkatkan standar kode, mencegah kesalahan sebelum production)