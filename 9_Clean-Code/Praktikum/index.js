//Problem 1
class user {
    var id;
    var username;
    //cukup 1 aja yang dideklarasikan
    //kalo pake id ya id saja, username ya username saja    
    var password;
}

class userservice{//seharusnya userService, karena nama class
    user[] users = [];
    
    user[] getallusers() {
    //seharusnya getAllUser
    //getallusers apa bedanya dengan users?
        return this.users;
    }

    user getuserbyid(userid) {
    //getuserbyid diganti menjadi getUserID
    //parameter userid diganti menjadi id
        return this.users.filter(userid);
    }//pada line di atas seharusnya userid diganti menjadi id
}

//Problem 2
class kendaraan {
    var totalroda = 0;
    var kecepatanperjam = 0;
}

class mobil extends kendaraan {
    void berjalan(){
        tambahkecepatan(10);
    }

    tambahkecepatan(var kecepatanbaru){
        kecepatanperjam = kecepatanperjam + kecepatanbaru;
    }
}

void main(){
    mobilcepat = new mobil();
    mobilcepat.berjalan();
    mobilcepat.berjalan();
    mobilcepat.berjalan();

    mobillamban = new mobil();
    mobillamban.berjalan();
}

//Penyelesaian Problem 2
class kendaraan {
//elemen class diwrap di contructor, sehingga ada nilainya yaitu mulai 0
//dan agar nantinya mudah ketika class kendaraan dipanggil
    constructor() {
      this.roda = 0;
      this.kecepatan = 0;
    }
  }
  
  class mobil extends kendaraan {
    berjalan() {
      this.tambahKecepatan(10);
    }
  
    tambahKecepatan(kecepatanBaru) {
      this.kecepatan = this.kecepatan + kecepatanBaru;
    }
  }
  
  // void main(){
  // const mobil = new Mobil();
  // mobil.berjalan();
  // mobil.berjalan();
  // }
  
  // console.log(mobil.kecepatan);
  
  function main() {
    const mobil = new Mobil();
    mobil.berjalan();
    mobil.berjalan();
    mobil.berjalan();
  
    console.log("TEST");
    console.log(mobil.kecepatan);
  }
  
  main();