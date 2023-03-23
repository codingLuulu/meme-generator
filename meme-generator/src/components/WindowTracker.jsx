import {useState, useEffect} from "react";

export default function WindowTracker(){

    const[show, setShow] = useState(true)

    const[windowWidth, setWindowWidth] = useState({
        width: window.innerWidth,
        height: window.innerHeight})
    
    function handleToggle(){
        setShow(prev =>{
            return !prev
        })
    }
    useEffect(() => {

        function watchWidth(){
            setWindowWidth({
                width:window.innerWidth,
                height: window.innerHeight})
        }
        window.addEventListener('resize', watchWidth
        )

        return function(){
            window.removeEventListener('resize', watchWidth)
        } 
    }, [])

    return(
        <div>
            <br />
            <br />
            
            <button onClick={handleToggle}>Toggle WindowTracker</button>
            {show && <h1>Window width : {windowWidth.width}</h1>}
            {show && <h1>Window height : {windowWidth.height}</h1>}

        </div>
    )
}