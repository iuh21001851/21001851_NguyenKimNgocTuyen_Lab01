//Bai 12: Create a function that receives an array of numbers as argument 
//and returns an array containing only the positive numbers
var htmlBai = document.querySelector('#bai');
var btn = document.querySelector('#loc');
btn.onclick=function(){
    var htmlInput = document.querySelector('input[name="mang"]').value.split(';').map(Number)
    
    function locMangDuong(array){
        var duong=[];
        array.forEach(element => {
            if (element>0) duong.push(element)
        });
        return duong;
    }
    var mangduong= locMangDuong(htmlInput);
    if (mangduong.length===0) document.querySelector('input[name="kq"]').value='mang khong co phan tu duong';
    else document.querySelector('input[name="kq"]').value=mangduong.join(';');
}


