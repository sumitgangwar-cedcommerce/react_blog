import React from 'react'
import "./Register.css"
import  { useState } from 'react';

export default function Register(props) {
  const[userregistration,setUserregistration]=useState({
    name:"",
    mail:"",
    mobile:"",
    password:""
  });
  const register=(event)=>{
    // var name = event.target.name
    // var value = event.target.value
    setUserregistration({...userregistration, [event.target.name]:event.target.value})
 }
  return (
    <div id="registermaindiv">
        <div id="registerfirstdiv">
            <h3 id="h3">Hello friend!</h3>
            <h5 id="h5">{props.message}</h5>
            <div id="registeruserdiv"><i style={{color:'white'}} class="fa fa-user iconregistered" aria-hidden="true" ></i><input type="text" name="name" onChange={register} value={userregistration.name} autoFocus/></div>
            <div id="registeremaildiv"><i class="fa fa-envelope iconregistered" aria-hidden="true" ></i><input type="text" name="mail" onChange={register} value={userregistration.mail} /></div>
            <div id="registerphonediv"><i style={{color:'white'}} class="fa fa-phone iconregistered" aria-hidden="true"></i><input type="text" name="mobile" onChange={register} value={userregistration.mobile} /></div>
            <div id="registerpassworddiv"><i class="fa fa-key iconregistered" aria-hidden="true"></i><input type="password" name="password" onChange={register} value={userregistration.password}/></div>
            <button id="registeredbutton" onClick={()=>props.save(userregistration)}>Click <i class="fa fa-long-arrow-right" aria-hidden="true"></i></button>
        </div>
        <div id="registerseconddiv">
            <img src="https://thumbs.dreamstime.com/b/man-paying-credit-card-online-purchase-vertical-photo-unrecognizable-his-made-laptop-computer-concept-226512820.jpg" alt="" id="registeredpageimage"/>
        </div>
       
    </div>
  )
}
