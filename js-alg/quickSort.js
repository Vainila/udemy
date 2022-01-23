function swap(array,i, j){
   [array[i],array[j]]= [array[j],array[i]];   
}


function pivot(array, startIndex = 0, endIndex = array.length+1){
   let pivot = array[startIndex];
   let swapIndex = startIndex;

   for(let i = startIndex + 1; i < array.length; i++){
      if(pivot > array[i]){
         swapIndex++;
         swap(array, swapIndex, i ); 
      }
   }
   swap(array, startIndex , swapIndex);
   console.log(array);
   return swapIndex;

}

function quickSort(array, left = 0, right = array.length -1){
   if(left < right){

      let pivotInd = pivot(array, left, right);  //3
      //left
      quickSort(array, left, pivotInd-1);
      quickSort(array, pivotInd+1, right);
   }
   return array;

}



console.log(
   quickSort([4,8,2,1,5,7,6,3])
);
//3