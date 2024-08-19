//Bai 9: Create a function that will convert from Fahrenheit to Celsius 
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


