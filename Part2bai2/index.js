
const calcTip = (bill) => {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;
  };
  

  console.log(calcTip(100)); 
  
  
  const bills = [125, 555, 44];
  
  const tips = [];
  for(let i=0;i<bills.length;i++){
    tips.push(calcTip(bills[i]));
  }
  
  console.log(tips); 
  

  const total = [];
  for(let i=0;i<bills.length;i++){
    total.push(bills[i]+tips[i]);
  }
  console.log(total);
  