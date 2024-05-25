import { useState } from "react"
function Favstudent(props){
  const studentarr=props.studentarr
  const setstudent=props.setstudent
const favarr=props.favarr
const setfavstudent=props.setfavstudent
function handledelete(id,name){
//console.log(id)
//console.log(favarr)
const temparr=favarr.filter(function(item){
  if(item.id==id){
    return false
  }
  else{
    return true
  }
})
setfavstudent(temparr)
console.log(temparr)

  const newitems= [...studentarr]
  newitems.forEach(function(item)
{
  if(item.name==name){
    item.disabled=false
  }
  setstudent(newitems)
})  

}
    return(<div>{
      favarr.map(function(item,index){
          return <div className="flex justify-between w-80 text-xl m-2 ">{index+1}.{item.name}
          <button className="bg-yellow-600 text-black p-1 my-1 border rounded-lg" onClick={()=>handledelete(item.id,item.name)}>Remove</button></div>
      })
      }

    </div>)
  }
  export default Favstudent