var heightMark=[1.96, 1.88];
var weightMark=[78, 95];
var heightJoin=[1.95, 1.76];
var weightJoin=[92, 85];
function BMI (height, weight){
    return weight/(height**2);
}

for(var i=0;i<2;i++){
    if(BMI(heightMark[i], weightMark[i])> BMI(heightJoin[i], weightJoin[i]))
        console.log(`Chi so BMI cua Mark (${BMI(heightMark[i], weightMark[i])}) cao hon Join (${BMI(heightJoin[i], weightJoin[i])})`);
    else if(BMI(heightMark[i], weightMark[i])< BMI(heightJoin[i], weightJoin[i])){
        console.log(`Chi so BMI cua Mark (${BMI(heightMark[i], weightMark[i])}) nho hon Join (${BMI(heightJoin[i], weightJoin[i])})`);
    } else {
        console.log(`Chi so BMI cua Mark (${BMI(heightMark[i], weightMark[i])}) bang Join (${BMI(heightJoin[i], weightJoin[i])})`);
    }
}