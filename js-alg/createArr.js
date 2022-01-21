function createArr(length, maxNumber){
   let arr = [];
   for(let i = 0; i < length; i++){
      arr.push(Math.floor(Math.random()*maxNumber));
   }
   return arr;
}
