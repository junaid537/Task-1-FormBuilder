import React,{useState} from 'react'
import { useDrag } from 'react-dnd'
import { TextFieldSettingsModal } from './TextFieldSettingsModal';
export function Element({id,label,color,type,setEmailState}) {
    //const [settings,setSettings]=useState(false);
    const [textFieldSettings,settextFieldSettings]=useState(false);
    const [show,setShow]=useState(true);
    const [isDragging,drag]=useDrag(()=>({
        type:"text",
        item:{id:id},
        collect:(monitor)=>({
            isDragging:!!monitor.isDragging()
        })
    }))
    const handleTextFieldSettings=()=>{
        console.log("email setting is clicked")
        settextFieldSettings(()=>!textFieldSettings);
    }
  return (
    <>
    {show &&
    <div className='element' id="draggable" draggable="true" style={{ border:isDragging?"5px solid green":"0px", backgroundColor: color }} ref={drag} >
        <label htmlFor={label}>{label}</label><button onClick={()=>{setShow(false);settextFieldSettings(false)}}>delete</button><button onClick={()=>{if(id===4)handleTextFieldSettings()}}>settings</button>
        {id>3?<input type={type} key={id} placeholder={label} name={label} style={{width:"220px"}} onChange={(e)=>{setEmailState(e.target.value);}}/>:(id===1 && <div><button key={id} className="submit">Submit</button></div> )||(id===2 && <button></button>) }
    </div>
    }
    {textFieldSettings && <TextFieldSettingsModal />}
    </>
    
  )
}

