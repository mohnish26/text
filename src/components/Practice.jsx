import React, { useState } from 'react';

export default function Example(props) {
  
  function clickOn(){
    console.log('click')
    let newText = text.toUpperCase()
    useText(newText)
  }
  function clickOff(){
    console.log('click off')
    let newText1 = text.toLowerCase()
    useText(newText1)
  }
  function onChange(e){
    useText(e.target.value)
  }

  const [text,useText] = useState("Enter text here")
  
  return (
    <div>
      <div className="mb-3">
        <h1>{props.heading}</h1>
        <textarea className ="form-control" value={text}onChange={onChange} id="mybox" rows="8" aria-label="With textarea"></textarea>
      </div>
  
      <div class="btn-group" role="group" aria-label="Basic example">
       <button type="button" onClick={clickOn} class="btn btn-secondary">Upper Case</button>
       <button type="button" onClick={clickOff}class="btn btn-secondary">Lower Case</button>
      </div>
      <div>
        <h3> <b>{text.split(' ').length}</b> Words, <b>{text.length}</b> Characters  and {0.008*text.split(' ').length} Minutes Read </h3>
      </div>
      <br/>
      <div>
        <h3>Preview </h3> 
        <p>{text}</p>
      </div>
  
    </div>
  );
}
