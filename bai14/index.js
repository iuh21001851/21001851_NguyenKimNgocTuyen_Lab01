//Bai 14: Print the first 10 Fibonacci numbers without recursion 
var htmlBai = document.querySelector('#bai');
var fibo=`f1=0<br>f2=1`;
var fn=0, f1=1, f0=0;
for(var i=3;i<=10; i+=1) {
    fn=f1+f0;
    f0=f1;
    f1=fn;
    fibo+=`<br>f${i}=${fn}`;
}
htmlBai.innerHTML+=fibo;
