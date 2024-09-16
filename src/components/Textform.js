import React, {useState} from 'react'

export default function Textform(props) {

    const handleUpclick = () =>{
        console.log("this is working");
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('converted to uppercase','success');
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('converted to lowercase','success');
    }
    const handleclearClick = () =>{
        let newText = "";
        setText(newText);
    }
    const handleReverse = () =>{
        let newText = text.split(" ").reverse().join(" ");
        setText(newText);
    }
    const speak = () => {
        let msg = new SpeechSynthesisUtterance(text);
        /* msg.text = text; */
        window.speechSynthesis.speak(msg);
      }
    const removeSpaces = () =>{
        let newText =text.split(/[ ]+/).join(" ");
        setText(newText);
    }




    const handleOnChange = (event) =>{
        console.log(event.target.className);
        setText(event.target.value);
    }
    const [text , setText] = useState('');

    
  return (
         
    <>
        
        <div className="mb-3" style={{color : props.mode === 'dark'? 'white': 'black'}}>
        <h1>{props.heading}</h1> 
        <textarea class="form-control" value={text} onChange={handleOnChange} style={{backgroundColor : props.mode ==='dark'? 'grey': 'white',
            color : props.mode === 'dark'? 'white': 'black'
        }} id="mybox" rows="8" ></textarea>
        <button className="btn btn-primary my-2 mx-1" onClick={handleUpclick}>ChangeToUpper</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleLowClick}>ChangeToLower</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleclearClick}>Clear text</button>
        <button className="btn btn-primary my-2 mx-1" onClick={handleReverse}>Reverse text</button>
        <button  className="btn btn-warning my-2 mx-2" type="submit" onClick={speak}>Speak</button>
        <button className="btn btn-primary my-2 mx-1" onClick={removeSpaces}>Remove Extra Spaces </button>
        
        </div>

        <div className="container my-2" style={{color : props.mode === 'dark'? 'white': 'black'}}>
            <h1>Enter Text Summary</h1>
            <p>{text.split(' ').length}words and {text.length} characters</p>
            <p>{0.008*text.split(' ').length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter something in the textfrom above to preview it here'}</p>
        </div>

    </>
  )
}
