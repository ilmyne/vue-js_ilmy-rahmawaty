# 23_Understanding-GraphQL-Query

# Introduction Database

Database adalah sekumpulan data yang terorganisir

# Relationship Database

- One to One
Mahasiswa hanya memiliki 1 NIM, dan NIM tersebut hanya dapat dimiliki oleh 1 mahasiswa (ga duplicate)
- One to Many
1 Prodi bisa diambil banyak mahasiswa
- Many to Many
1 dosen dapat mengajar banyak mahasiswa dan 1 mahasiswa dapat diajar oleh banyak dosen

# ERD

Entity Relationship Diagram digunakan untuk mendeskripsikan hubungan antar entitas, apakah itu one to one, one to many atau many to many

# SQL Statement

1. DDL
Data Definition Language
2. DML
Data Manipulation Language
untuk memanipulasi data di tabel
3. DCL
Data Control Language

## Tipe Data MySQL

- Num
- Huruf
- Date

## Statement Operation

1. Insert
digunakan untuk menginputkan data
2. Select
digunakan untuk menampilkan semua data
3. Update
mengupdate data
4. Delete
menghapus data

## DML Statement

1. LIKE/BETWEEN
memberikan kategori yang ingin ditampilkan
2. AND/OR
memberikan kategori yang ingin ditampilkan dengan syarat memenuhi DAN ..... ATAU
3. ORDER BY
mengurutkan data, bisa ascending maupun descending
4. LIMIT
memberikan batasan data yang akan ditampilkan

## JOIN

sebuah klausa untuk menggabungkan dua atau lebih data pada tabel

1. Inner
menampilkan irisan dari 2 tabel tersebut
2. Left
menampilkan hanya yang memenuhi syarat baris kiri/left join saja
3. Right
menampilkan hanya yang memenuhi syarat baris kanan/right join saja

## UNION

penggabungan 2 tabel dengan syarat jumlah field yang dipanggil berjumlah sama

## Agregasi

data yang dipanggil memenuhi syarat yang membentuk nilai ringkasan tunggal

1. Min
menampilkan data yang memenuhi syarat minimal
2. Max
menampilkan data yang memenuhi syarat maksimal
3. Sum
menjumlahkan nilai yang terdapat di data tsb
4. Avg
menampilkan rata-rata nilai dari data
5. Count
menghitung banyaknya nilai yang muncul dalam frekuensi di data
(menghitung banyaknya record)
6. Having
untuk menyeleksi data berdasarkan kriteria tertentu