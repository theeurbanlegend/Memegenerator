import React from "react"


function MemeInput(){
    const [Meme,setMeme]=React.useState(
        {
            topText:"",
            bottomText:"",
            randomImage:"https://i.imgflip.com/25w3.jpg"
        }
    )
    const [allMemes, setallMemes]=React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then(res =>res.json())
        .then(meme => setallMemes(meme.data.memes))
    },[])
    
    const [random,setRandom]=React.useState(0)
    function Randomnumber(){
        return setRandom(Math.floor(Math.random()*allMemes.length))
    }
    
    
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
        const url = allMemes[random].url
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
                <div className="Meme-photo">
                    <img src={Meme.randomImage} alt="sample meme" /> 
                    <h2 className="meme--text top">{Meme.topText}</h2>
                    <h2 className="meme--text bottom">{Meme.bottomText}</h2>
                </div>  
                
            </div>
        )
}
export default MemeInput
