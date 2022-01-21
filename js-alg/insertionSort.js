function createArr(length, maxNumber = 10){
   let arr = [];
   for(let i = 0; i < length; i++){
      arr.push(Math.floor(Math.random()*maxNumber));
   }
   return arr;
}





function insertionSort(array){
   console.log(array);
   console.log("---------");
   for(var i = 1; i < array.length; i++){
      var currVal = array[i];
      for (var j = i - 1; j >= 0 && array[j] > currVal; j--){
         array[j+1] = array[j];
      }
      array[j+1] = currVal;
      
      console.log(array)
   }
   return array;
}













let arr1 = createArr(5)
console.log(insertionSort(arr1))





