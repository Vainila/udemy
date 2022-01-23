function getDigit(number, index) {
   let numStr = "" + number;
   return +(numStr[numStr.length - 1 - index]) || 0;
}

function digitCount(num) {
   return ("" + Math.abs(num)).length;
}

function maxDigits(nums) {
   return Math.max(
      ...nums.map((value) => {
         return digitCount(value);
      })
   );
}

function radixSort(nums){
   let max = maxDigits(nums);
   
   for(let k = 0; k< max; k++){
      let tempArr = Array.from({length : 10}, ()=>[]);     
      for(let i = 0; i< nums.length; i++){
         
         tempArr[getDigit(nums[i], k)].push(nums[i]);
      }
      nums = [].concat(...tempArr);
      console.log(nums);
   }
    return nums
}

(radixSort([1, 2, 12, 3534, 21, 312, 577, 3891]));
