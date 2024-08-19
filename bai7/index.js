//Bai 7: Calculate the sum of even numbers greater than 10 and less than 30
var htmlBai7 = document.querySelector('#bai7');
var bai7='';
var tong=0;
for(var i=12;i<=30; i+=2) {
    tong+=i;
}
bai7+=`Tong ca so chan lon hon 10 va nho hon 30 la: ${tong}`;
htmlBai7.innerHTML+=bai7;
