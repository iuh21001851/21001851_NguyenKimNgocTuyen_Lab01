Dolphins=[
    [44, 123, 71],
    [85,54, 41]
]
Koalas=[
    [65, 54, 49],
    [23,34, 27]
]
function tb(arr){
    var sum=0;
    for(var a of arr){
        sum+=a;
    }
    return sum/arr.length;
}
function calcAverage(avgDolhins,avgKoalas){
    if(avgDolhins >= avgKoalas*2) console.log(`Dolhins win (${avgDolhins} vs. ${avgKoalas})`);
    else if(avgKoalas >= avgDolhins*2) console.log(`Koalas win (${avgKoalas} vs. ${avgKoalas})`);
    else console.log(`khong doi nao thang ca`);
}
for(var i=0;i<2;i++){
    calcAverage(tb(Dolphins[i]), tb(Koalas[i]));
}