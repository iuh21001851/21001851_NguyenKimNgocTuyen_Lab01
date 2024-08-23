//Bai 13: Find the maximum number in an array of numbers
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#tim');
function fibo(n){
    if(n==1) return 0;
    else if(n==2) return 1;
    else return fibo(n-1)+fibo(n-2);
}
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="soN"]').value;
    
    
   document.querySelector('input[name="kq"]').value=fibo(htmlInput)
}


