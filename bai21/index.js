//Bai 21: Rotate an array to the right 1 position 
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#ketqua');
function rotateRight(arr){
    if(arr.length===0) return arr;
    var s= arr[arr.length-1];
    for(i=arr.length-1;i>0; i-=1) arr[i]=arr[i-1];
    arr[0]=s;
    return arr;
}
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="mang"]').value.split(';').map(Number)
    
    
   document.querySelector('input[name="kq"]').value=rotateRight(htmlInput).join(';');
}


