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
