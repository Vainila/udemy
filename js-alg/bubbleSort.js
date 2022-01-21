function createArr(length, maxNumber){
   let arr = [];
   for(let i = 0; i < length; i++){
      arr.push(Math.floor(Math.random()*maxNumber));
   }
   return arr;
}

function bubbleSort(array){
   let noSwaps = true;

   for(let i = 0; i < array.length; i++){
      for(let j = 0; j< array.length; j++){
         if(array[j]>array[j+1]){
            [array[j],array[j+1]] = [array[j+1], array[j]];
            noSwaps = false;
         }
      }
      if(noSwaps) break;
   }

   return array; 
}

let arr1 = createArr(50, 100);
let arr2 = createArr(50, 100);
let arr3 = createArr(50, 100);
let arr4 = createArr(50, 100);
let arr5 = createArr(50, 100);
console.log(bubbleSort(arr1))
console.log(bubbleSort(arr2))
console.log(bubbleSort(arr3))
console.log(bubbleSort(arr4))
console.log(bubbleSort(arr5))
