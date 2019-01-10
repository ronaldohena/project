import React from 'react';

 const Condit = () =>{

   //const value = true;

   const returnValue =() =>{
     ///
     return true;
   }

   const showIt =() =>{
     return (
      <div>
        {returnValue() ?
           <div>
             Hello it's true.
           </div>
           :
           <div>

           </div>
         }
      </div>
     )
   }

   return (
     <div>
        {showIt()}
     </div>
   )
 }

 export default Condit;
