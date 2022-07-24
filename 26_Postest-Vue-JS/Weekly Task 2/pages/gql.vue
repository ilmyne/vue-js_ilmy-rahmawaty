<template>
<div>
  <Navbar/>
<Sidebar/>
                    <div class="flex items-center pt-10 mr-12 ml-72">
            <div class="w-full">
              <h1 class="text-4xl text-black mb-2">
                Vue With NUXT
              </h1>
              <h3 class="text-2xl">Deskipsi :</h3>
              <p class="text-black text-xl font-thin mb-7">
Apa itu GraphQL?<br>
GraphQL adalah suatu query language untuk API, dimana kita bisa mendefined skema dari data yang akan kita kirim, juga kita bisa meminimize jumlah data (field). Dengan graphql kita hanya butuh satu endpoint untuk semua request termasuk get,edit,delete. <br>

GraphQL memiliki 3 fitur<br>
- Query = Cara kita untuk mendapatkan data (Get)<br>
- Mutation = Untuk manipulasi data,insert,update, delete data<br>
- Subscription = Untuk mendapatkan data paling update<br>
<b>Task : </b> <br>
Membuat Database di Hasura dengan nama kampus merdeka <br>

Membuat table anggota, keterangan<br>

<img src="table_anggota.png">
<img src="table_keterangan.png">

Query memanggil nama siswa dengan status true<br>

<img src="Query True.png">

Insert menggunakan Mutation<br>

<img src="insert mutation.png">

Update mutation<br>

<img src="update true.png">

              </p>
            </div>
          </div>
</div>
</template>
