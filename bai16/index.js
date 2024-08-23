//Bai 16:  Create a function that will return a Boolean specifying if a number is prime
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#kiemtra');
function prime(n){
    if(n<2) return false;
    else if(n%2==0 && n!=2) return false;
    else {
        for(var i=2;i<=Math.sqrt(n); i+=2){
            if(n%i==0) return false;
        }
    }
    return true;
}
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="so"]').value;
    
    
   document.querySelector('input[name="kq"]').value=prime(htmlInput)
}


