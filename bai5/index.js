//Bai 5: Calculate the sum of numbers from 1 to 10 
var htmlBai5 = document.querySelector('#bai5');
var bai5='';
var tong=0;
for(var i=1;i<=10; i+=1) {
    tong+=i;
}
bai5+=`Tong tu 1 den 10 la ${tong}`;
htmlBai5.innerHTML+=bai5;
