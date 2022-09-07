import { useState } from "react"
import React  from 'react'

const emoji ={
    "😄": "Smiling",
  "😆": "Satisfied",
  "😊": "Happy Face",
  "😅": "Smiling face with tears",
  "🤣": "Rolling on the floor laughing",
  "😂": "Lauging with tears",
  "🙃": "Upside down face",
  "😉": "Winking face",
  "😇": "Smiling face with halo",
  "😎": "Smiling face with sunglasses",
   "🤩":"Star Struck",
  "🤓": "Nerdy face" 
}
const emojiInArray=Object.keys(emoji);
console.log(emojiInArray);
const EmojiInterpreter = () => {
    const[emojiN,emojiSet]=useState('')

    const inputChangeHadler =(e)=>{
        // input processing
    const targetValue =e.target.value;
     const match=emoji[targetValue];
    if(match===undefined){
        emojiSet("this is not  is data base")
    }else{
       emojiSet(match); 
    }
}
    
    const bringName=(list)=>{
        // onclick processing
        // const emojiName=emoji[list];
      emojiSet(emoji[list])
    }
  return (
    <div className='container  text-center my-5 '>
        <h3>Enter your emoji</h3>
        <input type="text" className='w-50  py-2 px-3 mb-3' onChange={inputChangeHadler} placeholder=' Example -> 😄' />
        <p className="mt-2">{emojiN}</p>
       <br />
       <div className="border d-flex m-auto p-2 boder-1 bg-white ">
       {emojiInArray.map((list)=>(
        
            <li className="d-inline h3 mx-2 lg" type="none" key={list} onClick={()=>bringName(list)} >{list}</li>
       ))}
    
       </div>
       </div>
  )
}

export default EmojiInterpreter;