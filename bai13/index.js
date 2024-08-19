//Bai 13: Find the maximum number in an array of numbers
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#tim');
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="mang"]').value.split(';').map(Number)
    
    
   document.querySelector('input[name="kq"]').value=Math.max.apply(null,htmlInput)
}


