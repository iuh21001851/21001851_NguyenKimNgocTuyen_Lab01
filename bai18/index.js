//Bai 18: Print the first 100 prime numbers
var htmlBai = document.querySelector('#bai');
var prime='';
var size = 100000;
var isPrime = new Array(size).fill(true);

isPrime[0] = false;
isPrime[1] = false;

// Implement the Sieve of Eratosthenes
for (var p = 2; p * p < size; p++) {
    if (isPrime[p]) {
        for (let multiple = p * p; multiple < size; multiple += p) {
            isPrime[multiple] = false;
        }
    }
}
var i=0; j=2;
while(i<100){
    if(isPrime[j]) {
        i++;
        prime+=`prime[${i}]=${j}<br></br>`;
    }
    j++;
}
htmlBai.innerHTML+=prime;
