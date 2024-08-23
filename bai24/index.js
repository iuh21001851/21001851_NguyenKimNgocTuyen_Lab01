//Bai 24: Create a function that will merge two arrays and return the result as a new array
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#ketqua');

function merge(arr1, arr2){
    return arr1.concat(arr2);
}
btn.onclick=function(){
    var mang1 = document.querySelector('input[name="mang1"]').value.split(';');
    var mang2 = document.querySelector('input[name="mang2"]').value.split(';');
    
    console.log(typeof merge(mang1, mang2))
   document.querySelector('input[name="kq"]').value=merge(mang1, mang2).join(';');
}


