
Dolphins=[
    [96, 108, 89],
    [97,112, 101],
    [97, 112, 101]
]
Koalas=[
    [88, 91, 110],
    [109,95, 123],
    [109, 95, 106]
]

function lest100point(arr){
    return arr.some(function(a, index){
        return a>=100;
    })
}
function tb(arr){
    var sum=0;
    for(var a of arr){
        sum+=a;
    }
    return sum/arr.length;
}

function part1bai3(a, b){
    for(var i=0;i<3; i++){
        if(!lest100point(a[i]) && !lest100point(b[i])) {
            console.log('ca 2 doi deu thua');
        } else if(lest100point(a[i])){
            if(tb(a[i])>tb(b[i])) console.log('Dolphins thang');
            else if(lest100point(b[i])){
                if(tb(a[i])<tb(b[i])) console.log('Koalas thang');
                else console.log('2 doi hoa');
            }
            else console.log('Dolphins thang');
        }else if(!lest100point(a[i])){
            console.log('Koalas thang')
        }
    }
}
part1bai3(Dolphins, Koalas);