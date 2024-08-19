//Bai 1: Print numbers from 1 to 10 
var htmlBai1 = document.querySelector('#bai1');
var bai1='';
for(var i=1;i<=10; i++){
    bai1+=`<span>${i} </span>`
}
htmlBai1.innerHTML+=bai1;
//Bai 2: Print the odd numbers less than 100
var htmlBai2 = document.querySelector('#bai2');
var bai2='';
for(var i=1;i<=100; i+=2) {
    bai2+=`<span>${i} </span>`;
}
htmlBai2.innerHTML+=bai2;

//Bai 3: Print the multiplication table with 7
var htmlBai3 = document.querySelector('#bai3');
var bai3='';
for(var i=1;i<=10; i+=1) {
    var k1=7*i;
    bai3+=`<p>7x${i} =${k1} </p>`;
}
htmlBai3.innerHTML+=bai3;
