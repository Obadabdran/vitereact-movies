import GlobalContext from "../hooks/GlobalContext"
import { useContext, useEffect, useState,useRef } from "react"
import { useGetDetailsApiQuery ,useGetCreditApiQuery,useGetSimilarApiQuery,useGetVedioApiQuery} from "../services/popularApi"
import { AiOutlinePlayCircle } from "react-icons/ai"
import {BsDownload } from "react-icons/bs"
import {Credits,Similars,Season} from '../components/index'
import ReactPlayer from 'react-player/youtube'


const Details = () => {
    const {id}=useContext(GlobalContext)
    const {type}=useContext(GlobalContext)
    const [details,setDetails]=useState({})
    const [credits,setCredits]=useState({})
    const [similars,setSimilars] = useState({})
    const [vedio,setVedio]=useState({})
    const [vedkey,setVedkey]=useState()
    const y=useRef()
    
    
   
    const {data, error, isLoading} =useGetDetailsApiQuery({id,type})
    const {data:data2, error:error2, isLoading:isLoading2} =useGetCreditApiQuery({id,type})
    const {data:data3, error:error3, isLoading:isLoading3} =useGetSimilarApiQuery({id,type})
    const {data:data4, error:error4, isLoading:isLoading4} =useGetVedioApiQuery({id,type})
    console.log(data)
    console.log(data2)
    console.log(data3)
    console.log(data4)
    console.log(id)
    console.log(type)
    useEffect(()=>{
      {!isLoading&&setDetails(data)}
    },[data])

    useEffect(()=>{
      {!isLoading&&setCredits(data2)}
    },[data2])

    useEffect(()=>{
      {!isLoading3&& setSimilars(data3)}
    },[data3])
    
    useEffect(()=>{
      {!isLoading4&& setVedio(data4)}
      
    },[data4])

    useEffect(()=>{
      if(!isLoading){
        vedio.results?.map((v)=>{
        if(v.name=="Official Trailer" || v.type=="Trailer" || v.type=="Clip"){
          setVedkey(v.key)
        }
      })}
    },[vedio])
   
    
    
  return (
  <div className="mx-2 my-2 md:my-8  md:mx-8">
    <div ref={y} className="flex flex-col md:flex-row  ">
      <div>
        <img src={`https://image.tmdb.org/t/p/w500${details.poster_path}`} className=" w-full   md:w-2/3 md:h-4/5 rounded-md" alt=""/>
      </div>
      <div className="ml-2 mt-2 md:-ml-24 md:mt-12 space-y-2 font-bold">
        <h2>Title:     {details.name} {details.title}</h2>
        <h3>Geners:   {details.genres?.map((g)=><span className="ml-2">{g.name}</span>)}</h3>
        <h3>Release date:     {details.first_air_date}  {details.release_date}</h3>
        <h3 >Spoken languages: {details.spoken_languages?.map((s)=><span className="ml-2">{s.english_name}</span>)} </h3>
        <h3>Production countries:   {details.production_countries?.map((c)=><span className="ml-2">{c.name}</span>)}</h3>
        <h3>Vote average:   {details.vote_average}</h3>
        <div className="flex flex-row space-x-4 py-6 md:space-x-16  md:py-16 ">
          <button className="flex flex-row border border-slate-700 py-2 px-4 rounded-md " ><AiOutlinePlayCircle className="mt-1 mr-1"/>Wtach</button>
          <button className="flex flex-row border border-slate-700 py-2 px-4 rounded-md"><BsDownload className="mt-1 mr-1" />Download</button>
        </div>
      </div>
     
    </div>
     <div className="space-y-2">
        <h2 className="text-2xl">Overview:</h2>
        <h2 className="text-lg">{details.overview}</h2>
      </div>


        {vedkey&&<div className=" mt-16 flex place-content-center">
      <ReactPlayer url={`https://www.youtube.com/watch?v=${vedkey}`}/>
    </div>}
       

      <div className="mt-8">
      <h2 className="text-2xl">Cast:</h2>
      <div className="  w-full h-full mt-4 overflow-x-scroll scroll whitespace-nowrap scroll-smooth space-x-2 ">
      { !isLoading2&&
     <Credits  cdata={credits.cast}/>
    }
      </div>
      </div>

      

    


     <div className=" mt-4">
      <h2 className="text-2xl ">Seasons :</h2>
      {!isLoading&&
      <Season sedata={details.seasons} />
      }
     </div>

      <div className=" mt-4 m-4 md:mt-10 ">
      <h2 className="text-2xl ">Similar movies/series:</h2>
      <div className="mt-4 ">
      { !isLoading3&&
     <Similars typpe={type} y={y} sdata={similars.results}/>
      }
    
      </div>
      </div>
    
    
    
    
      
    </div>
   
  )
}

export default Details