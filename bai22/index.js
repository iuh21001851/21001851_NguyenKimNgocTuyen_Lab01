//Bai 22: Reverse an array
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#ketqua');
function reverse(arr){
    if(arr.length===0) return arr;
    var left=0, right=arr.length-1;
    while(left<=right){
        var tmp=arr[left];
        arr[left]=arr[right];
        arr[right]=tmp;
        left++; right--;
    }
    return arr;
}
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="mang"]').value.split(';').map(Number)
    
    
   document.querySelector('input[name="kq"]').value=reverse(htmlInput).join(';');
}


