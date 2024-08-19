//Bai 3: Print the multiplication table with 7
var htmlBai3 = document.querySelector('#bai3');
var bai3='';
for(var i=1;i<=10; i+=1) {
    var k1=7*i;
    bai3+=`<p>7x${i} =${k1} </p>`;
}
htmlBai3.innerHTML+=bai3;
