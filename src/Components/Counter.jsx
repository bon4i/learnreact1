import React, {useState} from 'react';

const Counter = function() {

   const [count, setCount] = useState(0)

   function incriment() {
      setCount(count + 1);
     }
    
     function dicriment() {
      setCount(count - 1);
     }
   return (
      <div>
         <h1>{count}</h1>
      <button onClick={incriment}>Incriment</button>
      <button onClick={dicriment}>Dicriment</button>

      </div>
   );
};

export default Counter;