//Bai 6:Calculate 10! 
var htmlBai6 = document.querySelector('#bai6');
var bai6='';
var tong=1;
for(var i=1;i<=10; i+=1) {
    tong*=i;
}
bai6+=`giai thua tu 1 den 10 la ${tong}`;
htmlBai6.innerHTML+=bai6;
