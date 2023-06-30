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
    function handleOnChange(event){
        const {name,value}=event.target 
            setMeme(prevmeme=>{
                return{
                    ...prevmeme,
                    [name]:value,
                }
            })
        }
    function GenerateMemeImage(){
        const url = allMemeImages.data.memes[random].url
            Randomnumber()
            setMeme(prevmeme=>{
                return{
                    ...prevmeme,
                    randomImage:url,
                }
            })
        }

        return(
            <div className="Meme-body">
                <div className="Meme-input">
                    <input 
                        name='topText'
                        value={Meme.topText}
                        onChange={handleOnChange}
                        placeholder="Add meme text top"
                    />
                    <input 
                        name='bottomText'
                        value={Meme.bottomText} 
                        onChange={handleOnChange}
                        placeholder="Add meme text bottom"
                    />
                    <button onClick={GenerateMemeImage} type="button">Get a new meme image🖼️</button>
                </div>
                <div>
                    <img src={Meme.randomImage} alt="sample meme" className="Meme-photo"/> 
                    <h2 className="meme--text top">{Meme.topText}</h2>
                    <h2 className="meme--text bottom">{Meme.bottomText}</h2>
                </div>  
                
            </div>
        )
}
export default MemeInput
