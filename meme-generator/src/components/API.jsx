import { useState, useEffect } from "react";   

export default function Api(){
   const[starWarsData, setStarWarsData] = useState({});
   const[count, setCount] = useState(1);

   function handleClick(){
    setCount(count + 1)
   }
   
   useEffect( function(){
           fetch('https://swapi.dev/api/people/' + count)
                .then(res => res.json())
                .then(data => setStarWarsData(data))

        console.log('Effect function ran')
    }, [count])

   return(
    <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
        <h2>The count is {count}</h2>
        <button onClick={handleClick}>Get Next Character</button>
    </div>
   )
}