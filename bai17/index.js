//Bai 17:  Calculate the sum of digits of a positive integer number
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#ketqua');
function tongChuSo(n){
    if(n===0) return 0;
    return parseInt(n%10)+tongChuSo(parseInt(n/10));
}
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="so"]').value;
    
    
   document.querySelector('input[name="kq"]').value=tongChuSo(htmlInput)
}


