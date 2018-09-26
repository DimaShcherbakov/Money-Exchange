// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var result = {};
    if (currency<0 ){
        return result;
    }
    if(currency >= 10000){
      result["error"]="You are rich, my friend! We don't have so much coins for exchange";
    }else{
     if(currency >= 50 || currency < 50 || currency%50 === 0 ){
      result["H"] = Math.floor(currency/50); 
      currency = currency%50;
      if(currency >= 25 && currency < 50){
        result["Q"] = Math.floor(currency/25); 
        currency = currency%25;
        }
      if(currency >=10 && currency < 25){
        result["D"] = Math.floor(currency/10);
        currency = currency%10;
        }
      if(currency >= 5 && currency <10){
        result["N"] = Math.floor(currency/5);
        currency = currency%5;}
      if(currency >=1 && currency < 5){
        result["P"] = Math.floor(currency/1); 
        }
      }
    }
    if(result["H"] === 0){
        delete result["H"]
    }
    for (var key in result){
        console.log(key +":"+ result[key]);
    }
    return result;
}
