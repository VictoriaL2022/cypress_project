// var countSheep = function (num){
//     let str = "_";
//     if (num == 0){
//      str = "*"; 
//     }else {
//     for (let i = 1; i <= num; i++){
//       str += i + " sheep...";
//     } 
//   }
//   return str;
// }
//   console.log(countSheep(0));

     let n = 4;   
     function abc(n){
    let str = "";
     for (let i = 1; i <= n - 1; i++){                        
      for (let j = 1; j <= i - 1; j++){ 
        str += "*";    
    }   
    str += "I\n" 
    }
    for (let i = 1; i <= n -1; i++){
        str += "*";
    }
        str += "I" 
        return str;
    }

 console.log(abc(4));
 console.log("c");


    // I
    //  I
    //   I
   
 