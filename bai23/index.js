//Bai 23: Reverse a string
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#ketqua');
function reverse(a){
    return a.split('').reverse().join('');
}
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="chuoi"]').value
    
    
   document.querySelector('input[name="kq"]').value=reverse(htmlInput);
}


