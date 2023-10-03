// const judul = document.getElementById('judul');
// judul.innerHTML = '<i>Rheva Giant Zahrotus Syita</i>'

// const section_A = document.querySelector('section#a');
// section_A.innerHTML = 'Hello Rhepiww !!!';

// const sectionA = document.querySelector('section#a');
// sectionA.innerHTML = '<div><p>Paragraf baru</p></div>'

// const judul = document.getElementsByTagName('h1')[0];

// judul.setAttribute('name', 'Rheva Giant Zahrotus Syita'); 

// const a = document.querySelector('section#a a');

// const p2 = document.querySelector('.p2');

// const li2 = document.getElementsByTagName('li') [1];

// li2.setAttribute('name', 'Rhepiw');

// const p1 = document.querySelector('.p1');






//MODUL 3

const pBAru = document.createElement('p');
const teksPBAru = document.createTextNode('Paragraf Baru');
pBAru.appendChild(teksPBAru); //'Paragraf Baru' masuk kedalam element p

const sectionA = document.getElementById('a');
sectionA.appendChild(pBAru); //menyimpan pBaru di akhir section A


// //insert before
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);

const ul = document.querySelector('section#b ul');
const li2 = document.querySelector('section#b ul li:nth-child(2)');

// // atau menggunakan
// // const li2 = ul.querySelector('li:nth-child(2)');
// // untuk lebih ringkas

ul.insertBefore(liBaru, li2);


//remove
// const section_A = document.getElementById('a');
// const link = document.getElementsByTagName('a') [0];
// section_A.removeChild(link);


// //replace
const section_B = document.getElementById('b');
const p4 = section_B.querySelector('p');

const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru!!!');

h2Baru.appendChild(teksH2Baru);

section_B.replaceChild(h2Baru, p4); //yang baru dulu lalu yang mau diganti

pBAru.style.backgroundColor = 'lightblue';
liBaru.style.backgroundColor = 'lightblue';
h2Baru.style.backgroundColor = 'lightblue';


//event handler
// const p3 = document.getElementsByClassName('p3');
// p3.onclick = function(){
//     p3.style.backgroundColor = 'lightgreen';
// }




