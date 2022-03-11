# 9-Clean-Code

Clean Code adalah kode yang mudah **dibaca, dipahami dan diubah** oleh programmer.

# “The only valid measurement of code quality:
WTF’s/minute”

## Kegunaan Clean Code

- Work Collaboration
- Feature Development
- Faster Development

## Karakteristik Clean Code

- Mudah dipahami
- Mudah dieja dan dicari
- Singkat namun mendeskripsikan konteks
- Konsisten (ga ita itu)
- Hindari penambahan konteks yang tidak perlu
- Komentar (di beberapa feature aja, jangan di setiap baris kode, haha)
- Function yang berjalan dengan baik (pendeklarasian function dan elemen di dalamnya)
- Menggunakan konversi
(ada format style guide dalam menulis code, referensi airbnb dan Google)
- Formatting
    - Lebar baris code 80-120 karakter
    - Satu class 300-500 baris
    - Baris code yang berhubungan saling berdekatan
    - Dekatkan fungsi dengan pemanggilnya
    - Deklarasi fungsi dengan pemanggilnya
    - Deklarasi variabel berdekatan dengan penggunaannya
    - Perhatikan indentasi
    - Menggunakan *prettier* atau *formatter*

# Clean Code Principle

# KISS (Keep It So Simple)

Hindari membuat fungsi yang dibuat untuk melakukan banyak hal, 1 fungsi untuk 1 perintah

# DRY (Don’t Repeat Yourself)

Duplikasi code terjadi karena sering copy paste. Untuk menghindari duplikasi code buatlah fungsi yang dapat digunakan secara berulang-ulang, jadi fungsinya bisa dipanggil anytime anywhere ketika dibutuhkan

# Refactoring

Merekonstruksi susunan code, dipecah berdasarkan function atau class, mendeteksi kode yang kemungkinan terduplikasi, merename ngefixkan code