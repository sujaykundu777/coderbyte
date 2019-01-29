function FirstFactorial(num) { 
   var fact;
   
   fact=1;
   
   for(var i=1; i<=num; i++){
       fact=fact*i;
   }

  // code goes here  
  return fact; 
         
}
   
// keep this function call here 
FirstFactorial(readline());                            

