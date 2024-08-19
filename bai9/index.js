//Bai 9: Create a function that will convert from Fahrenheit to Celsius 
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#chuyen');
btn.onclick=function(){
    var htmlInputDoC = document.querySelector('input[name="DoF"]').value
    var dof= (htmlInputDoC-32)/1.8;
    document.querySelector('input[name="DoC"]').value=dof;
}


