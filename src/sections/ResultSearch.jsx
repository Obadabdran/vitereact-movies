import GlobalContext from "../hooks/GlobalContext";
import { useContext, useEffect, useState } from "react";
import {Poster} from '../components/index'
import { useGetGenSearchApiQuery } from "../services/popularApi";


const ResultSearch = () => {
  const {multname}=useContext(GlobalContext)
  const [dataresult,setDataresult]=useState()
  const {genid,setGenid}=useContext(GlobalContext)

 // const {data,error,isLoading}=useGetGenSearchApiQuery(genid)
 // console.log(data)

  console.log(multname)
  console.log(genid)



  const options = {
    method: 'GET',
    headers: {
      'accept': 'application/json',
      'Authorization': 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkN2RjNjkyMzMwMDU3YzUwMzM1NGNiYzVhY2Y2ZmE1ZSIsInN1YiI6IjY0Zjk5YzYwYThiMmNhNGYxYmM5MDA2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oR9BABS0CbAJ3HCKkdEmVNUFBTV_U2WRBnr1Xcxwn7o'
    }
  };
  
  useEffect(()=>{
    fetch(`https://api.themoviedb.org/3/search/multi?query=${multname}&include_adult=false&language=en-US&page=1?api_key=d7dc692330057c503354cbc5acf6fa5e`, options)
    .then(response => response.json())
    .then((response) =>{
       setDataresult(response.results)
      console.log(dataresult)
      })
    .catch(err => console.error(err));
  },[multname])

  console.log(dataresult)
  

   
    
   
 



  

      
  return (
    
     <div className="flex flex-col md:flex-row flex-wrap place-content-center  py-2   ">
      {dataresult?.map((dr)=>(<>  
         <Poster key={dr.id} type={dr.media_type} id={dr.id}  image={dr.poster_path} title={dr.title || dr.name} />
        </>)
      )}


    </div>
    
  
  )
}

export default ResultSearch