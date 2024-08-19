//Bai 11: Calculate the average of the numbers in an array of numbers
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#tinh');
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="mang"]').value.split(';').map(Number)
    var tong=0;
    var lenght =htmlInput.length;
    htmlInput.forEach(element => {
        tong+=element;
    });
    document.querySelector('input[name="kq"]').value=tong/lenght;
}


