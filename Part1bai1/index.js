var heightMark=[1.96, 1.88];
var weightMark=[78, 95];
var heightJoin=[1.95, 1.76];
var weightJoin=[92, 85];
function BMI (weight, height){
    return weight/(height**2);
}

for(var i=0;i<2;i++){
    var markHigherBMI=false;
    if(BMI(heightMark[i], weightMark[i])> BMI(heightJoin[i], weightJoin[i])) markHigherBMI=true;
    console.log(`Chi so BMI cua Mark hon Join la: ${markHigherBMI}`);
}