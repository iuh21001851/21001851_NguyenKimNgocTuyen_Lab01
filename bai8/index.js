//Bai 8: Create a function that will convert from Celsius to Fahrenheit 
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#chuyen');
btn.onclick=function(){
    var htmlInputDoC = document.querySelector('input[name="DoC"]').value
    var dof= htmlInputDoC*9/5+32;
    document.querySelector('input[name="DoF"]').value=dof;
}


