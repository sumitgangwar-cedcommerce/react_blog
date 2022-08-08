import React from 'react'
import "./Yourpost.css"

export default function Yourpost(props) {
    
   
  return (
    <div id="yourpostmaindiv">
        {props.userblog.map((e)=>{
            if(e.email == props.currentloginemail){
                
               return <div id="repetitivedivhome"> 
               
               <h1 id="h2">{e.title}<input type="button" value="Edit" className="edit" id={e.blogid} onClick={()=>props.editfun(e.blogid)}/><input type="button" value="Delete" className="delete" id={e.blogid} onClick={()=>props.deletefun(e.blogid)}/><span id="span1">Published at: {e.date}</span></h1>
              
               <div id="userblogimagedivinhome"><img src={e.image} id="userblogimageid"/></div>
               <div id="userblogcontentinhome"><p id="pcontent">{e.content}</p></div>
               </div>
            }
        })}

    </div>
  )
}
