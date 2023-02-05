import React, { useState } from "react";
import { Element } from "./Element";
import { Button } from 'antd';
import { useDrop } from "react-dnd";
import { PreviewModal } from "./PreviewModal";
export function DragDrop() {
  const [previewModal,setPreviewModal]=useState(false);
  const [open, setOpen] = useState(false);
  const elememtsList = [
    {
      id: 1,
      placeholder: "submit",
      label: "submit",
      color:"white",
      type:"button"
    },
    {},
    {id:4,placeholder: "type text",label: "Text Field",color:"red",type:"text"},
    {id:5,placeholder: "heading", label: "heading" ,color:"cyan"},
  ];
  const [dropBox,setDropBox]=useState([]);
  const [emailState,setEmailState]=useState("");

  console.log(emailState)
  const [{isOver},drop]=useDrop(()=>({
    accept:"text",
    drop:(item)=>addImageToBoard(item.id),
    collect:(monitor)=>({
        isOver:!!monitor.isOver(),
    })
  }))
  const addImageToBoard=(id)=>{
    console.log(id);
    const formElements=elememtsList.filter((el)=>id===el.id);
    setDropBox((dropBox)=>[...dropBox,formElements[0]]);
  }
  return (
    <>
    <div className="dragdrop">
      <div className="container" style={{border:"1px bold orangered"}} ref={drop}>
        {dropBox.map((element)=>{
            return(
                <Element id={element.id} label={element.label} color={element.color} setEmailState={setEmailState}/>
            )
        })}
      </div>
      <div className="elements">
        {elememtsList.map((element) => {
          return (
            
              <Element id={element.id} label={element.label} color={element.color} />
    
          );
        })}
      </div>
    </div>
    <Button type="primary" style={{marginLeft:"500px",marginTop:"70px"}} onClick={()=>{setPreviewModal(true);setOpen(true);console.log("preview clicked")}}>Preview</Button>
    {previewModal && <PreviewModal setOpen={setOpen} open={open} dropBox={dropBox}/>}
    </>
  );
}
