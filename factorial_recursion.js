function FirstFactorial(num) { 
/*
     if( num ==0 || num==1 ){
       
         return 1;
     
     }
     
     else{
       return(FirstFactorial(num-1) * num );
     }

*/
 
  if (num < 0) return NaN;
  return (num > 1) ? FirstFactorial(num - 1) * num : 1; 
         
}
   
   
   
   
// keep this function call here 
// to see how to enter arguments in JavaScript scroll down
FirstFactorial(readline());
