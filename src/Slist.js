import { useState } from "react"

function Students(props){
    const studentarr=props.studentarr
    const setstudent=props.setstudent
const favarr=props.favarr
const setfavstudent=props.setfavstudent
   // const [studentarr,setstudent]=useState([{id:1,name:"Bharath"},{id:2,name:"Kumar"},{id:3,name:"Ramya"},{id:4,name:"Monica"},{id:5,name:"Shruthi"}])
    
   // const [favarr,setfavstudent]=useState([])
   // const [newactivity,setnewactivity]=useState()
    function addstudent(addname,index){
    const fav1=[...favarr]
        setfavstudent([...fav1,{id:fav1.length+1,name:addname}])
         console.log(fav1)
console.log(addname)
const newitems= [...studentarr]
newitems[index].disabled = true;
setstudent(newitems)
    }
    return(<div>{
        studentarr.map(function(item,index){
            return <div className="flex justify-between w-80 text-xl m-2 ">{index+1}.{item.name}
            <button className="bg-black text-white p-1 my-1 border rounded-lg" onClick={()=>addstudent(item.name,index)}  disabled={item.disabled} style={{ backgroundColor: item.disabled ? 'grey' : 'black' }}>Add to favourites</button></div>
        })
        }</div>)
  }
  export default Students