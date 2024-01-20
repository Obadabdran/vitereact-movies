import GlobalContext from "../hooks/GlobalContext";
import { useContext, useEffect, useState } from "react";
import {Poster} from '../components/index'
import { useGetPopularApiQuery } from "../services/popularApi";
import ReactPaginate from "react-paginate"


const ResultSearchGen = () => {

  
  const [dataresult,setDataresult]=useState([])
  const {genid,setGenid}=useContext(GlobalContext)

  const {data,error,isLoading}=useGetPopularApiQuery()
  console.log(data)

  
  console.log(genid)



  useEffect(()=>{
    console.log(data)
    {!isLoading?setDataresult(data.results):null}
  
  },[data])
  console.log(dataresult)
  

 


   
  

  

 
     
  return (
    <>
     <div className="flex flex-row flex-wrap place-content-center space-x-6 space-y-4 py-2  ">
      {dataresult?.map((dr)=>{
       return dr.genre_ids.map((g)=>{
          if(g==genid){
            return (<>  
              <Poster key={dr.id} type='movie' id={dr.id}  image={dr.poster_path} title={dr.title} />
                </>)
          }
      
      
        }
        )
      }
      )}
      
      
      
      
      
    </div>
    
    </>
  
  )
}

export default ResultSearchGen