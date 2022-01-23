//       1) implement a function responsible for merging two sorted arrays
//       2) giwen 2 sorted arrays which are sorted, this helper function should
//          create a new array which is also sorted, and consists of all of the elements
//          in  the two input arrays
//       3) this func should run in O(n+m) time and O(n+m) space
//          and should not modify the parameters passed to it.

// ________________________________________________________________________________________

//       create empty array, take a look at the smallest values in each input array
//       while there are values we haven't looked at...
//             if the value in the first array is smaller than the value in the second array,
//             push the value in the first array into out results
//             and move on to the next value in the first array

//          merge([1,10,50] , [2,14,99,100])
//          [1,10,50] , [2,14,99,100]
//          [1,2]

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
   // console.log(result);
   return result;
}

function mergeSort(array) {
   if (array.length <= 1) return array;
   let mid = Math.floor(array.length / 2);
   let left = mergeSort(array.slice(0, mid));
   let right = mergeSort(array.slice(mid));
 
   return merge(left, right);
}



/////////////////////////////////




 console.log(mergeSort([45,21,2,245,534,24,0]));
 console.log(mergeSort([345,1,412,5,15,61]));
 console.log(mergeSort([345,1,412,5,15,61]));
 console.log(mergeSort([345,1,412,5,15,61]));
