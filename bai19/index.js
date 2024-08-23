//Bai 19: Create a function that will return in an array the first “p” prime numbers greater than “n” 
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#ketqua');
var prime=[];
var size = 100000;
var isPrime = new Array(size).fill(true);

isPrime[0] = false;
isPrime[1] = false;

for (var p = 2; p * p < size; p++) {
    if (isPrime[p]) {
        for (let multiple = p * p; multiple < size; multiple += p) {
            isPrime[multiple] = false;
        }
    }
}

btn.onclick=function(){
    var soP = document.querySelector('input[name="soP"]').value;
    var soN = document.querySelector('input[name="soN"]').value;
    var i=0; j=parseInt(soN)+1;
    while(i<soP){
        if(isPrime[j]) {
            i++;
            prime.push(parseInt(j))
        }
        j++;
    }
    console.log(prime);
    
   document.querySelector('input[name="kq"]').value=prime.join(';');
}


