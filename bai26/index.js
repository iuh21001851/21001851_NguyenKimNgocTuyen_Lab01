//Bai 26: Create a function that will receive two arrays and will return an array 
//with elements that are in the first array but not in the second

var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#ketqua');

function buMang(arr1, arr2) {
    function findUnique(source, compare) {
        return source.filter(item => !compare.includes(item));
    }
    const buMang1 = findUnique(arr1, arr2);
    return buMang1;
}
btn.onclick=function(){
    var mang1 = document.querySelector('input[name="mang1"]').value.split(';');
    var mang2 = document.querySelector('input[name="mang2"]').value.split(';');
   document.querySelector('input[name="kq"]').value=buMang(mang1, mang2).join(';');
}


