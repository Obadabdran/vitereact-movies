import Buttgen from "./Buttgen"
import { useGetGenMovieApiQuery,useGetGenSerieApiQuery } from "../services/popularApi"
import { useEffect, useState } from "react"
const Container = (props) => {

    const [genmov,setGenmov]=useState([])
   // const [genser,setGenser]=useState([])


  const {data:data1,error:error1,isLoading:isLoading1}=useGetGenMovieApiQuery()
 // const {data:data2,error:error2,isLoading:isLoading2}=useGetGenSerieApiQuery()

  useEffect(()=>{
    {!isLoading1?setGenmov(data1.genres):null}
    //{!isLoading2?setGenser(data2.genres):null}
    
  },[data1])


   
console.log(genmov)
  return (
    <div className="flex flex-row">
<div className=" w-1/6 max-h-full bg-slate-800 flex flex-col pt-10 text-white text-sm md:text-lg space-y-1  ">
       {genmov.map((g)=>{
        return <Buttgen id={g.id} name={g.name}/>
       })}
   </div>

<div className=" w-4/6 py-2">{props.children}</div>

<div className=" w-1/6 max-h-max bg-slate-800">j</div>
    </div>
    
  )
}

export default Container