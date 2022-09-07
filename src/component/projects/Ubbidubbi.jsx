import React, { useState } from 'react'

const Ubbidubbi = () => {
    const[textarea,settextarea]=useState('')
    const[output , setOutput]=useState('')

const onChangeHandler =(e)=>{
    console.log(textarea);
    console.log(e.target.value)
     fetch(`https://api.funtranslations.com/translate/ubbi-dubbi.json?text=${textarea}`)
     
     .then(response=>response.json())
     .then(json=>{
        // if(json.error){
        //     settextarea(json.error.message)
        // }else{
        // }
        var translatedText=json.contents.translated;
        setOutput(translatedText)
    })
    .catch(err=>{
        setOutput(err.message)
    })
}
 return (<>
  <div className='container text-center my-5'>
    <h3 className='mb-4'>Translate English into Ubbi-dubbi Language</h3>
       <textarea type="text" className='px-3 pt-3' id="" onChange={(e)=>settextarea(e.target.value)} placeholder='Write you text'  cols="40" rows="8"></textarea>
       <button onClick={onChangeHandler}>translate</button>
       <div className="output border h4 border-1 bg-light py-3 px-2 mt-4 "><label htmlFor="">Output : </label>{output}</div>
       </div>
    </>)
}

export default Ubbidubbi;