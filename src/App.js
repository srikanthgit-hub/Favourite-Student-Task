
import { BrowserRouter, Route, Routes,Link } from 'react-router-dom';
import Students from './Slist';
import Favstudent from './Flist';
import "./index.css"
import { useState } from 'react';

function App() {
  const [studentarr,setstudent]=useState([{id:1,name:"Sri",disabled: false},{id:2,name:"Adam",disabled: false},{id:3,name:"Riya",disabled: false},{id:4,name:"Monica",disabled: false},{id:5,name:"Srika",disabled: false}])
    
    const [favarr,setfavstudent]=useState([])
  return (
    <div>
    <BrowserRouter>
    <nav className='bg-green-500 m-2 p-4 text-xl flex gap-6 underline'>
      <Link to={"/"}>LIST OF STUDENTS</Link>
      {"    "}
      <Link to={"/about"}>FAVOURITE STUDENTS</Link>
    </nav>
    <Routes>
    <Route path='/' element={<Students studentarr={studentarr} favarr={favarr} setfavstudent={setfavstudent} setstudent={setstudent}/>}></Route>
   <Route path='/about' element={<Favstudent  studentarr={studentarr} favarr={favarr} setfavstudent={setfavstudent} setstudent={setstudent}/>}></Route>
   </Routes>
   </BrowserRouter>
    </div>
  )}
    


export default App;