import {useState} from "react";
import boxes from '../boxes'
import Box from './Box'


export default function Practice(){
    
    const [boxesArr, setBoxesArr] = useState(boxes)
    
    function toggle(id){
      setBoxesArr(prev => {
        return prev.map(box => {
            return box.id === id ? {...box, on : !box.on} : box
        })
      })
    }
        
        const boxesArray = boxesArr.map(box => (
            <Box 
                key={box.id} 
                id ={box.id}
                isOn={box.on} 
                toggle={toggle}/>
        ))
        
        return (
            <main>
                <h1>Boxes will go here</h1>
                {boxesArray}
            </main>
        )
        //     setSquares(prevSquares => {
            //         const newSquares = []
    //         for(let i = 0; i < prevSquares.length; i++) {
    //             const currentSquare = prevSquares[i]
    //             if(currentSquare.id === id) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on
    //                 }
    //                 newSquares.push(updatedSquare)
    //             } else {
    //                 newSquares.push(currentSquare)
    //             }
    //         }
    //         return newSquares
    //     })
    // }
        
    //     setBoxesArr(prev => {
    //         const newBoxes = []
    //         for(let i = 0; i < prev.length; i++){
    //         const currentBox = prev[i]
    //         if(currentBox.id === id) {
    //             const updatedBoxes = {
    //                 ...currentBox,
    //                 on : !currentBox.on
    //             }
    //             newBoxes.push(updatedBoxes)
    //         }else {
    //             newBoxes.push(currentBox)
    //         }
    //     }
    //     return newBoxes
    //     })
    // }


    // return (
    //     <header>
    //         <p>Current user: {props.user}</p>
    //     </header>
    // )

    
    // const [contact, setContact] = useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false
    // })

    // function toggleFavorite() {
    //     setContact(prev => {
    //         return{ ...prev, isFavorite : !prev.isFavorite }
    //     })
        
    // }


    
    // return (
    //     <main>
    //         <article className="card">
    //             <img src="./images/user.png" className="card--image" />
    //             <div className="card--info">
    //                 <Star isFilled={contact.isFavorite} handleClick ={toggleFavorite}/>
    //                 <h2 className="card--name">
    //                     {contact.firstName} {contact.lastName}
    //                 </h2>
    //                 <p className="card--contact">{contact.phone}</p>
    //                 <p className="card--contact">{contact.email}</p>
    //             </div>
                
    //         </article>
    //     </main>
    
    // )


    // const [count, setCount] = useState(0)

    // function handleAdd(){
    //     setCount(prevCount =>{
    //         return prevCount + 1
    //     })
    // }
    // function handleSubtract(){
    //     setCount(prevCount => {
    //         return prevCount - 1
    //     })
    // }



    // return(
    //     <div>
    //         <button onClick={handleAdd}>+</button>
    //         <Count number = {count}/>
    //         <button onClick={handleSubtract}>-</button>
    //     </div>
    // )


    // const [contact, setContact] = useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false
    // })
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */
    // let starIcon = contact.isFavorite ? '/vite.svg' : '/images/Troll Face.png'

    // let starIcon = contact.isFavorite ? '/vite.svg' : '/images/Troll Face.png'


    // const [things, setThings] = useState(['Thing 1',' Thing 2',' Thing 3'])

    // const thingsArray = things.map(thing =>{
    //     return <p key={thing}>{thing}</p>
    // })

    // function addItem(){
    //     setThings(prev => {
    //         return [...prev, ` Thing ${prev.length + 1}`]
    //     })
    // }
    
    // return(
    //     <div>
    //         <button onClick={addItem}>Add Item</button>
    //         {thingsArray}
    //     </div>
    // )
    

    // const [isGoingOut, setIsGoingOut] = useState(true)
    // function changeMind(){
    //     setIsGoingOut(prevState => !prevState)}
        
    // return (
    //     <div className="state">

    //         <h1 className="state--title">Do I feel like going out tonight?</h1>
    //         <div onClick={changeMind}className="state--value">
    //             <h1>{isGoingOut ? 'Yes' : 'No'}</h1>
    //         </div>
    //     </div>
    // )

    
    // let timeOfDay

    // const date = new Date()
    // const hours = date.getHours()

    // if(hours >= 4 && hours < 12){
    //     timeOfDay = 'morning'
    // }else if(hours >= 12 && hours < 17){
    //     timeOfDay = 'afternoon'
    // }else if( hours >= 17 && hours < 20){
    //     timeOfDay = 'evening'
    // }else{
    //     timeOfDay = 'night'
    // }
    // return (
    //     <div>
    //         <h4>Good {timeOfDay } {props.name}</h4>
    //     </div>
    // )
    // const [things, setThings] = useState(['apples', 'oranges', 'pear', 'mango', 'watermelon'])

    // const arrayP = things.map((item)=>{
    //     return <p  key={item}> {item}</p> 
    // })
    // function addItem(){
    //     const newItemText = `Fruit ${things.length + 1}`
    //     setThings(prevState => [...prevState, newItemText])
    //     // thingsArray.push(newItemText)
    //     // or without adding push
    //     // const newItemText = `Thing ${thingsArray.length ++}`
    //     // console.log(newItemText)
    // }

    // return(
        
    //     <div className="black">

    //         <button onClick={addItem}>Click</button>
    //         {arrayP}
    //     </div>
    // )
}

