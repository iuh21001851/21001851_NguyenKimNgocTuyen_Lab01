//Bai 25: Create a function that will receive two arrays of numbers as arguments and return an array
// composed of all the numbers that are either in the first array or second array but not in both 

var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#ketqua');

function buMang(arr1, arr2) {
    function findUnique(source, compare) {
        return source.filter(item => !compare.includes(item));
    }
    const buMang1 = findUnique(arr1, arr2);
    const buMang2 = findUnique(arr2, arr1);
    return buMang1.concat(buMang2);
}
btn.onclick=function(){
    var mang1 = document.querySelector('input[name="mang1"]').value.split(';');
    var mang2 = document.querySelector('input[name="mang2"]').value.split(';');
   document.querySelector('input[name="kq"]').value=buMang(mang1, mang2).join(';');
}


