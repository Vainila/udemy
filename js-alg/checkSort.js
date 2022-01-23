function checkSort(fn) {
   function createArr(length, maxNumber) {
      let arr = [];
      for (let i = 0; i < length; i++) {
         arr.push(Math.floor(Math.random() * maxNumber));
      }
      return arr;
   }

   function checkOrder(arr1, arr2) {
      if (arr1.length !== arr2.length) return false;
      for (let i = 0; i < arr1.length; i++) {
         if (arr1[i] != arr2[i]) {
            console.log(`false because of ${arr1[i]} and ${arr2[i]}`);
            return false;
         }
      }
      return true;
   }

   let arrays = [
      createArr(5, 50),
      createArr(5, 50),
      createArr(5, 50),
      createArr(5, 50),
      createArr(5, 50)
      
      
      
     
   ];
   for (arr of arrays) {
       let sortedArr = arr.sort((a, b) => {return a - b;});
       let sortedArr2 = mergeSort(arr);
       
       console.log(checkOrder(sortedArr, sortedArr2));       
   }
}


function merge(array1, array2) {
   let result = [];
   let [index1, index2] = [0, 0];
   while (index1 < array1.length && index2 < array2.length) {
      if (array1[index1] < array2[index2]) {
         result.push(array1[index1]);
         index1++;
      }
      if (array2[index2] < array1[index1]) {
         result.push(array2[index2]);
         index2++;
      }
   }
   if (index1 == array1.length && index2 != array2.length) {
      result = result.concat(array2.slice(index2));
   } else {
      result = result.concat(array1.slice(index1));
   }
   //console.log(result);
   return result;
}
function mergeSort(array) {
   if (array.length <= 1) return array;
   let mid = Math.floor(array.length / 2);
   let left = mergeSort(array.slice(0, mid));
   let right = mergeSort(array.slice(mid));
   return merge(left, right);
}



checkSort(mergeSort);
