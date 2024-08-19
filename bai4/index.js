//Bai 4: Print the multiplication table with 7
var htmlBai4 = document.querySelector('#bai4');
var bai4='';
for(var i=1;i<=10; i+=1) {
    bai4+=`<li>`;
    for(var s=1;s<=10;s++){
        var kq= i*s;
        bai4+=`<p>${i}x${s} = ${kq}</p>`
    }
    bai4+=`</li>`
}
htmlBai4.innerHTML+=bai4;
