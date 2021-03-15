module.exports = function check(str, bracketsConfig) {
     
  let indexOpen = str.indexOf(bracketsConfig[0]);
  let indexClose = str.indexOf(bracketsConfig[1]);
  
  let stringLength = str.length;

  if (indexOpen < indexClose) {
        str = str.substring(0, indexOpen) + str.substring(indexOpen+1) + str.substring(0, indexClose) + str.substring(indexClose+1);
  };
  
   if (str.length === 0) return true 
   else return false; 
  
     
  
  /* let j = 0;

    if (str[0] === bracketsConfig[1]) return false
    else {
        for (i = 0; i < str.length; i++) {
            if (str[i] === bracketsConfig[0]) {j++};
            if (str[i] === bracketsConfig[1]) {j--};

        }; if (j === 0) return true else return false;

      };*/


}
