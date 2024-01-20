import { useState } from "react";
import { useGetSearchApiQuery } from "../services/popularApi";
import { useNavigate } from "react-router-dom";
import GlobalContext from "../hooks/GlobalContext";
import { useContext } from "react";




const Search = (props) => {
   
  const{multname,setMultname}=useContext(GlobalContext)
    const navigate=useNavigate()
    

 // const {data, error, isLoading} =useGetSearchApiQuery()

 const handlechange=(e)=>{
    setMultname(e.target.value)

 }

 
 console.log(multname)

 const handleenter=(e)=>{
  if(e.key=='Enter'){
    if(props.path=='serie'){
      navigate('resultsearch')
    }
    else{
   navigate('resultsearch')
    }
  }
 }

 
      
  return (
    <div className="flex flex-col items-center md:flex-row md:justify-center mt-6  ">
    <label className=" md:mt-1">Search :</label>
    <input type="text" value={multname} onChange={handlechange} onKeyUp={handleenter} className="border border-slate-500 w-60 md:w-80  px-4 md:ml-2 py-1 rounded-md" />
    </div>
  )
}

export default Search