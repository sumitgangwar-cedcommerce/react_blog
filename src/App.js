import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.js"
import './App.css';
import Home from "./Home.js"
import Login from "./Login.js"
import Yourpost from "./Yourpost.js"
import Edit from "./Edit"
import Register from "./Register.js";
import Write from "./Write"
import { useNavigate } from 'react-router-dom'
import { useState } from "react"

function App() {
  var navigate = useNavigate();
  const [user, setUser] = useState([]);
  const [message, setMessage] = useState()
  const[editflag,setEditflag]=useState(0)
  const [flag, setFlag] = useState(0)
  const [loginuser, setLoginuser] = useState()
  const [loginactive, setLoginactive] = useState(0)
  const [message1, setMessage1] = useState()
  const [blogtitlemessage, setBlogtitlemessage] = useState()
  const [blogcontentmessage, setBlogcontentmessage] = useState()
  const [currentloginemail,setCurrentloginemail]=useState()
  const[editblog,setEditblog]=useState([])



  const [userblog, setUserblog] = useState([])

  const save = (registeredarray) => {
    if (registeredarray.mail == "" || registeredarray.mobile == "" || registeredarray.password == "" || registeredarray.name == "") {
      setMessage("Please fill your all the fields")
      setFlag(1)
    }
    if (registeredarray.name != "" && registeredarray.mail != "" && registeredarray.mobile != "" && registeredarray.password != "") {
      setUser([...user, { id: registeredarray.mail, password: registeredarray.password, name: registeredarray.name }])
      navigate('/login');
    }

  }

  const yourpostfun=()=>{
    navigate("/yourpost")
  }

  const publishfun = (title, image, content) => {
    var a = Math.random().toString(36).substr(2, 9);
    if (title == null && content == null) {
      setBlogtitlemessage("You forget to enter the title")
      setBlogcontentmessage("You forget to enter the content")

    }
    if (title == null && content != null) {
      setBlogtitlemessage("You forget to enter the title")
      setBlogcontentmessage("")
    }
    if (content == null && title != null) {
      setBlogcontentmessage("You forget to enter the content")
      setBlogtitlemessage("")
    }
    if (title != null && content != null) {
      const d = new Date();
      let hour = d.getDate();
      let minute = d.getMonth();
      let second = d.getFullYear();
      setBlogcontentmessage("")
      setBlogtitlemessage("")
      setUserblog([...userblog, { blogid:a,title: title, image: image, content: content, date: hour + ":" + minute + ":" + second, loginuser: loginuser,email:currentloginemail }])
      navigate('/');
    }


  }

  const editfun=(id)=>{ 
    userblog.map((e)=>{
      if(id==e.blogid){
        setEditflag(1)
        setEditblog([...editblog,{id:e.blogid,title:e.title,image:e.image,content:e.content}])
        navigate("/edit")
      }

    })

  }
  const deletefun=(id)=>{
    userblog.map((e,index)=>{
      if(id==e.blogid){
        userblog.splice(index,1);
        setUserblog([...userblog])
        
      }
      
    })

  }
  const logoutfun = () => {
    setLoginactive(0)
    setLoginuser("")
  }

  const updatefun=(id,title,image,content)=>{
    var obj={}
    userblog.map((e,index)=>{
      if(id==e.blogid){
        userblog[index].title=title;
        userblog[index].image=image;
        userblog[index].content=content;
       setUserblog([...userblog])
      //  console.log(userblog)
      navigate("/")
        
      }
    })
  
  }

  const logincheck = (userlogin) => {
    setMessage1("")
    
    if (userlogin.email === "" && userlogin.password === "") {
      setMessage1("Please fill all the fields")
      
    }


    console.log(user)
    user.length==0 ? setMessage1("Please Register") : user.map((e) => {
      
      if (userlogin.email == e.id && userlogin.password == e.password) {
        setLoginuser( e.name)
        setLoginactive(1)
        navigate('/');
        setCurrentloginemail(e.id)
      }
      if (userlogin.email != e.id || userlogin.password == e.password) {
        setMessage1("Mobile number does not match")
      }
      if (userlogin.email == e.id || userlogin.password != e.password) {
        setMessage1("Password does not match")
      }
      if (userlogin.email != e.id && userlogin.password != e.password) {
        setMessage1("No data found")
      }
    })

  }

  return (
    <div className="App">
      <Navbar loginactive={loginactive} loginuser={loginuser} logoutfun={logoutfun} yourpostfun={yourpostfun} setMessage1={setMessage1}/>
      <Routes>
        <Route path="/" element={<Home userblog={userblog} />} />
        <Route path="/yourpost" element={<Yourpost currentloginemail={currentloginemail} userblog={userblog} editfun={editfun} deletefun={deletefun} editblog={editblog}/>} />
        <Route path="/login" element={<Login logincheck={logincheck} message1={message1} />} />
        <Route path="/register" element={<Register save={save} message={message} />} />
        <Route path="/edit" element={<Edit  editblog={editblog} editflag={editflag} updatefun={updatefun}/>} />
        <Route path="/write" element={<Write publishfun={publishfun} blogtitlemessage={blogtitlemessage} blogcontentmessage={blogcontentmessage} />} />
      </Routes>

    </div>
  );
}

export default App;
