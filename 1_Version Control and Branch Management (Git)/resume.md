# 1_Version Control and Branch Management

# Introduction and Installation

## VCS (Version Control System)

memperbarui versi dari sebuah project

### Single User

tidak ada lokal, penggunaan pribadi

### Centralized

sudah terpusat, ada yang menjadi server dan lainnya lokal.

(+) dapat langsung mengupdate dari server

(-) ketika server down, yang lokal tidak bisa mengedit, harus menunggu sampai servernya stabil

(-) tidak bisa mengedit dari lokal, hanya dapat mengedit dari server

### Distributed

mencakup sebelumnya yaitu single user dan centralized

ketika server down, lokal dapat mengedit

# GIT

Salah satu Version Control System yang populer digunakan oleh programmer di seluruh dunia.

Dengan GIT dapat berkolaborasi secara langsung.

Pemanfaatan GIT dalam github adalah terdistribusi

Lokal harus mengsinkronisasi ke server agar jika nanti server mengalami down, komputer lokal dapat mengedit tanpa kendala

## GIT REPOSITORY

- folders and files
- history

Pemanfaatan VCS salah satunya menggunakan Github

## GITHUB

history perubahan dalam github = COMMIT
## GIT INIT, CLONE, CONFIG

untuk “download” repo menggunakan clone
contoh : git clone (copas link repository yg akan diclone)

## SAVING CHANGES

untuk menyimpan area kerja, harus di*add* dahulu
contoh : git add .

selanjutnya file perlu di*wrap* menggunakan commit
contoh : git commit -m “keterangan ketika commit”

terakhir diperlukan push untuk dapat ditampilkan di repository
contoh : git push origin

## INSPECTING REPOSITORY

menampilkan revisi lama
contoh : git log - -oneline (minus, minus, gapake spasi)

nah nanti muncul history revisi beserta kode uniknya.
untuk mengakses menggunakan git checkout kode
contoh : git checkout ajwy1788

untuk kembali ke branch main, git checkout main

## BRANCH

### menampilkan list branch

git branch - -list

### membuat branch baru

git branch (nama branch baru)

### menghapus branch

git branch -D (nama branch)

### melihat remote branch

git branch -a

## MERGING

### menambahkan fitur baru

git checkout -b new-feature main

### ngedit feature

git add (file)

trus dilanjut commit
git commit -m “START FEATURE”

ditutup dengan
git add (file)
git commit -m “FINISH FEATURE”

### merge feature baru

git checkout master
git merge new-feature
git branch -d new-feature

## PULL REQUEST

bisa langsung di githubnya, tapi perlu dicek apakah ada conflict atau tida

jika ada conflict maka harus diselesaikan dahulu agar dapat diacc pull req nya

biasanya kalo ada conflict dikarenakan ada 2 source/fungsi yang mirip, jadi harus milih salah satu
# TASK

1. Apa itu Versioning
mengatur versi dari source code program
dapat meminimalisir adanya kerancuan data mana yang paling terupdate
2. Git dapat memantau perubahan file pada
semua perubahan yang terjadi pada file tersebut
3. Commit dalam Git merupakan
catatan setiap perubahan
4. Git dapat diinstal dalam
apple, windows, linux
komapatibel dengan berbagai versi OS
5. step sebelum staging area adalah
working directory
untuk menyimpan area kerja, harus di*add* dahulu
contoh : git add .
selanjutnya file perlu di*wrap* menggunakan commit
contoh : git commit -m “keterangan ketika commit”
terakhir diperlukan push untuk dapat ditampilkan di repository
contoh : git push origin
