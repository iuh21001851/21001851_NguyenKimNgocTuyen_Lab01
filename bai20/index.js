//Bai 20: Rotate an array to the left 1 position 
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#ketqua');
function rotateLeft(arr){
    if(arr.length===0) return arr;
    var s= arr[0];
    for(i=0;i<arr.length-1; i+=1) arr[i]=arr[i+1];
    arr[arr.length-1]=s;
    return arr;
}
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="mang"]').value.split(';').map(Number)
    
    
   document.querySelector('input[name="kq"]').value=rotateLeft(htmlInput).join(';');
}


