import {useState, useEffect} from "react";
// import memesData from '../memeData.jsx'

export default function Meme(){
    
    const [meme, setMeme] = useState({
        topText : '',
        bottomText : '',
        randomImage : 'http://i.imgflip.com/1bij.jpg'
    })

    
    const [allMemeImages, setAllMemeImages] = useState([])

    useEffect( () => {
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data => setAllMemeImages(data.data.memes))
    }, [])
    
    
    function getRandomMeme(e){
        e.preventDefault()
        const memesArray = allMemeImages
        const randomMeme = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomMeme].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage : url
        }))
    }
    
    function handleChange(e){
        const {name, value} = e.target
        setMeme(prev => {
            return {
                ...prev,
                [name] : value
            }
        })
        console.log(e.target.value)
    }
    
    return(
      
        <main>
            <div className="form">
                
                    <input 
                    type="text" 
                    placeholder="shut up"
                    name= 'topText'
                    value={meme.topText}
                    onChange={handleChange}
                    />

                    <input 
                    type="text" 
                    placeholder=" and take my money"
                    name='bottomText'
                    value={meme.bottomText}
                    onChange={handleChange} 
                    />
                
                <button className="btn" onClick={getRandomMeme}>
                  Get a new meme image 🖼
                </button>
            </div>
            
                <div className="meme">
                    <img src={meme.randomImage} alt="random image" className="meme-img"/>
                    <h2 className="meme-text top">{meme.topText}</h2>
                    <h2 className="meme-text bottom">{meme.bottomText}</h2>
                </div>
            
        </main>
    )
}