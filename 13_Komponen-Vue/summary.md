# 13_Komponen-Vue

# Module Export & Import

# Komponen dapat digunakan kembali

# Paradigma fungsi pembantu

sebuah fungsi perkakas/pembantu yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda

(+) Lebih efektif

(+) Lebih efisien

(+) Menghindari miskom dengan anggota setim kerja

contoh :

![Untitled](13_Kompone%201db89/Untitled.png)

# Instance Lifecycle Hooks

## 3 Lifecycle Utama

### Created

Berlangsung setelah instance terbentuk dan sebelum DOM dirender
contoh : menambahkan SEO Meta, memasang event listener scroll

### Mounted

Berlangsung setelah DOM dirender
contoh : handling loader

### Destroyed

Berlangsung sebelum instance dihancurkan
contoh : mencopot event listener scroll

# TASKS

Bagaimanakah perbedaan yang paling tepat antara import yang digunakan oleh Module (ESM) dan Regular Script(CJS)?
CJS mengimpor semua isi yang diekspor sedangkan ESM yang dibutuhkan saja

Mana yang merupakan penamaan yang tepat untuk jenis penggunaan import berikut?
import with rename multiple exports

![Untitled](13_Kompone%201db89/Untitled%201.png)

Sebuah Komponen File Tunggal Vue yang bertujuan untuk dapat digunakan lebih dari satu kali di tempat yang berbeda adalah definisi dari Reuseable Vue Components. Di antara keuntungan berikut, mana yang BUKAN merupakan keuntungan dari Reuseable Vue Components?
Membuat basis kode kita lebih susah dipahami

Di antara pernyataan berikut, manakah yang merupakan definisi dari "props" pada sebuah Komponen Vue yang paling benar?
Sebuah fasilitas pada komponen Vue yang berfungsi untuk meneruskan data berupa variabel dari induk (parent) ke anakan (child)

Di antara pernyataan berikut, manakah yang merupakan tujuan penggunaan Vue Lifecycle hooks yang paling tepat?
Ketika kita ingin menjalankan sebuah algoritma atau fungsi pada waktu tertentu di bagian proses daur hidup Vue