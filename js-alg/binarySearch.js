function findNumber(array, number){
   let left = 0;
   let right = array.length-1;
   let middle = calcMiddle(left, right);
   while(array[middle] !==number){
      if(number < array[middle]){
         right = middle -1;
      }else{
         left = middle+1;
      }
      middle = calcMiddle(left, right);
      
      console.log(left, middle, right);
      if(middle == (array.length - 1) && array[middle] != number){
         return -1;
      }
   }
   return middle;
}
function calcMiddle (left, right){
   return Math.floor((left + right)/2);
}

console.log(findNumber([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18], 22))
// findNumber([0,1,2,3,4,5,6,7,8,9,10], 2)
// findNumber([0,1,2,3,4,5,6,7,8,9,10], 10)
// findNumber([0,1,2,3,4,5,6,7,8,9,10], 19)