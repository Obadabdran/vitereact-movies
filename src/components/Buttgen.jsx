import GlobalContext from "../hooks/GlobalContext"
import { useContext } from "react"
import { useNavigate } from "react-router-dom";

const Buttgen = (props) => {
const {genid,setGenid}=useContext(GlobalContext)
const navigate=useNavigate()


  const handlgensearch=(e)=>{
    console.log(e.target.id)
     setGenid(e.target.id)
     navigate('resultsearchgen')
  }
 
  


  return (
    <button className="border  border-black  " onClick={handlgensearch} id={props.id}>{props.name}</button>
  )
}

export default Buttgen