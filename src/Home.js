import React from 'react'
import "./Home.css"

export default function Home(props) {
 
  return (
    <div id="homemaindiv">
      
      { props.userblog.length ==0 ? <img style={{width:'100%', height:'89vh'}} src='https://i.pinimg.com/originals/d3/46/4a/d3464a4351fdf340ccb6bb37c281381a.gif' /> :
        props.userblog.map((e)=>{
        
        return <div id="repetitivedivhome"> 
                   <h1 id="h1">{e.loginuser}<span id="icons"><i class="fa-brands fa-instagram iconhome"></i><i class="fa-brands fa-twitter iconhome"></i><i class="fa-brands fa-facebook"></i></span></h1>
                   <h1 id="h2">{e.title}<span id="span1">Published at: {e.date}</span></h1>
                   <div id="userblogimagedivinhome"><img src={e.image} id="userblogimageid"/></div>
                   <div id="userblogcontentinhome"><p id="pcontent">{e.content}</p></div>
                   </div>

      })}
    </div>
  )
}
