function createArr(length, maxNumber = 50){
   let arr = [];
   for(let i = 0; i < length; i++){
      arr.push(Math.floor(Math.random()*maxNumber));
   }
   return arr;
}





function selectionSort(array){
   let swaps = [];
   for(i = 0; i < array.length; i++){
      var lowest = i;
      for (let j = i + 1; j < array.length; j++){
        if(array[j] < array[lowest]){
           lowest = j;
        }
      }
      // if(true){
      if(i!=lowest){
         [array[i], array[lowest]] = [array[lowest], array[i]];
         swaps.push("swap");

      }

   }
   console.log(swaps.length)
   return array;
}













let arr1 = createArr(10)
console.log(selectionSort(arr1))
let arr2 = createArr(20) 
let arr3 = createArr(30)
let arr4 = createArr(40)
// console.log(selectionSort(arr2))
// console.log(selectionSort(arr3))
// console.log(selectionSort(arr4))




