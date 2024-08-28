function printForecast(arr){
  let pr='';
  for(let a in arr){
    pr+=`...${arr[a]}°C in ${parseInt(a)+1} days  `
  }
  console.log(pr);
};

printForecast([17,21,23])
