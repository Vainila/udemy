function countUniqueValues(array) {
   let tempObj = {};

   // for (let i = 0; i < array.length; i++) {
   //    if (tempObj[array[i]]==1){
   //       tempObj[array[i]]=" ";

   //    }
   //    else if(!tempObj[array[i]]){
   //       tempObj[array[i]]=1;
   //    }
      
   // }
   
   // // console.log(tempObj)
   // let result = [];
   // for(key in tempObj){
   //    if(tempObj[key] != " ") result.push(key);

   // }
   // console.log(result.length)


   let set = new Set()
   for(let val of array){
      set.add(val);
   }
   console.log(set.size)
   
}

countUniqueValues([1, 1, 1, 1, 1, 1, 1, 1, 2]); //2
countUniqueValues([1, 2, 3, 4, 5, 6, 7, 8, 8, 8, 8, 9, 9, 9]); //9
countUniqueValues([]); //0
countUniqueValues([-2, -1, -1, 0, 1]); //4
