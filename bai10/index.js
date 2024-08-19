//Bai 9: Calculate the sum of numbers in an array of numbers
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#tinh');
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="mang"]').value.split(';').map(Number)
    var tong=0;
    htmlInput.forEach(element => {
        tong+=element;
    });
    document.querySelector('input[name="kq"]').value=tong;
}


