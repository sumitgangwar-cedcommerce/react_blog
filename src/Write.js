import React from 'react'
import "./write.css" 
import { useState } from 'react'

export default function Write(props) {
    const[title,setTitle]=useState()
    const[image,setImage]= useState()
    const[content,setContent]=useState()
  
    
    const titlefun=(event)=>{
        setTitle(event.target.value)
    }
    const selectimage=(event)=>{
       const i = URL.createObjectURL(event.target.files[0])
    //    console.log(event.target.files)
       setImage(i)
    }
    const contentfun=(event)=>{ 
        setContent(event.target.value)
      
    }
  return (
    <div id="writemaindiv">
        
        <p id="p1">Title: <input type="text" autoFocus value={title} onChange={titlefun}/><span style={{color:"red"}}>{props.blogtitlemessage}</span></p>
        <p id="p2"><i class="fa-solid fa-image iconwrite"></i> <input type="file" onChange={selectimage}/></p>
        <textarea cols={60} rows={20} onChange={contentfun}></textarea><br/><span style={{color:"red"}}>{props.blogcontentmessage}</span><br/>
        <button id="publishbtn" onClick={()=>props.publishfun(title,image,content)}>Publish</button>
    </div>
  )
}
