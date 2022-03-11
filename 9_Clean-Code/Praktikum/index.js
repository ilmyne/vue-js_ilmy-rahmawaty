//Problem 1
class user {
    var id;
    var username;
    //cukup 1 aja yang dideklarasikan
    //kalo pake id ya id saja, username ya username saja    
    var password;
}

class userservice{
    user[] users = [];
    
    user[] getallusers() {
    //getallusers apa bedanya dengan users?
        return this.users;
    }

    user getuserbyid(userid) {
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

class Kendaraan {
    constructor() {
      this.roda = 0;
      this.kecepatan = 0;
    }
  }
  
  class Mobil extends Kendaraan {
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