import React from "react"
import MemeData from "./Memes-content"

function MemeInput(){
    const [Meme,setMeme]=React.useState(
        {
            topText:"",
            bottomText:"",
            randomImage:"https://i.imgflip.com/25w3.jpg"
        }
    )
    const [random,setRandom]=React.useState(0)
    function Randomnumber(){
        return setRandom(Math.floor(Math.random()*allMemeImages.data.memes.length))
    }
    
    const [allMemeImages, setAllMemeImages]=React.useState(MemeData)
    function GenerateMeme(){
        Randomnumber()
        setMeme(prevmeme=>{
            const url = allMemeImages.data.memes[random].url
            return{
                ...prevmeme,
                randomImage:url
            }
        })
    }

    return(
        <div className="Meme-body">
            <div className="Meme-input">
                <input id='meme' name='meme' placeholder="Add meme text top"/>
                <input id='meme' name='meme' placeholder="Add meme text bottom"/>
            </div>
            <button onClick={GenerateMeme} type="button">Get a new meme image🖼️</button>
             <img src={Meme.randomImage} alt="sample meme" className="Meme-photo"/>   
            
        </div>
    )
}
export default MemeInput
