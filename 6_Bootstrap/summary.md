# 6_Bootstrap

Bootstrap adalah suatu framework yang dapat digunakan ketika membuat website
misal ingin membuat Navbar, jika membuat secara manual akan memakan waktu lama dan belum nanti errornya.
Bootstrap menyediakan *template* Navbar juga icon dan lainnya yang diperlukan untuk membuat website.
Alamat website Bootstrap >> [https://getbootstrap.com/](https://getbootstrap.com/)
Contoh (membuat Navbar dengan dopdrown link) :

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
```

nah nanti hasilnya akan seperti ini

![Home Features Pricing Dropdown Link adalah content](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8dfd6f2-c3aa-4dda-8424-7cee45759034/Untitled.png)

Home Features Pricing Dropdown Link adalah content

jika ingin menjadikan content berada di sebelah kanan, maka dapat menggunakan Flex dan Justify
contoh :
`<div class="d-flex justify-content-end">...</div>`
hasilnya content akan berada di sebelah kanan (end), kalo kiri menggunakan start