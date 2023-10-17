const angkaRandom = Math.floor(Math.random() * 10) + 1;
let kesempatan = 3;  

alert('Kamu harus menebak angka 1-10');

while (kesempatan > 0) {
  alert('Kesempatan menebak: ' + kesempatan);
  
  const tebakan = parseInt(prompt('Berapa angka tebakanmu?'));

  if (tebakan === angkaRandom) {
    alert('Selamat! Anda menang! Angka yang benar adalah ' + angkaRandom + '.');
    break;
  } else if (tebakan < angkaRandom) {
    alert('Angka terlalu rendah.');
  } else {
    alert('Angka terlalu tinggi.');
  }

  kesempatan--;
}

if (kesempatan === 0) {
  alert('Kesempatan Anda habis. Angka yang benar adalah ' + angkaRandom + '.');
}