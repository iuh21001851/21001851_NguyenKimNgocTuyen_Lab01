function tip(tip){
    return tip>=50 &&tip<=300 ?tip*0.15: tip*0.2;
}

var bill=[275.40, 430];
for(var i=0;i<2; i++){
    var sum = bill[i]+tip(bill[i]);
    console.log(`The bill was ${bill[i]}, the bill was ${tip(bill[i])}, anh the total value ${sum} `)
}