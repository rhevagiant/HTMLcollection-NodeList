class kendaraan {
    constructor(model, merk, harga){
        this.model = model;
        this.merk = merk;
        this.harga = harga;
    }

    maju(){
        return `mesin ${this.merk} ${this.model} berjalan maju`;
    }

    berhenti(){
        return `mesin ${this.merk} ${this.model} berhenti`;
    }
};

class siswa {
    constructor(nama, kelas, absen) {
        this.nama = nama;
        this.kelas = kelas;
        this.absen = absen;
    }

    belajar() {
        return `siswa bernama ${this.nama} kelas ${this.kelas} sedang belajar`;
    }

    piket() {
        return `siswa bernama ${this.nama} kelas ${this.kelas} sedang piket kelas`;
    }
}

    let mobil = new kendaraan("Supra", "toyota", 20000000);
    let motor = new kendaraan("CBR", "Honda", 35000000);

    let siswa1 = new siswa("Rheva", "XI PPLG", 24);
    let siswa2 = new siswa("Hida", "XI PPLG 2", 29);


    console.log(mobil.maju());
    console.log(motor.berhenti());

    console.log(siswa1.belajar());
    console.log(siswa2.piket());


