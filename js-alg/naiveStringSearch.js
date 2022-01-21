function naiveSearch (string, pattern){
   let count = 0;
   for( let i = 0; i < string.length; i++){
      for(let j = 0; j < pattern.length; j++){
         console.log(string[i], pattern[j])
         if(pattern[j] !== string[i+j]){
            console.log("break")
            break;
         }
         if(j=== pattern.length - 1){
            count++;
            console.log("found");
         }
      }
   }
   console.log(count);
   return count;
}


naiveSearch("lorie loled", "lol")