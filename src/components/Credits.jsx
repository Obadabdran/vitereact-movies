

const Credits = (props) => {
  
    
  return (
   
    <>
      {props.cdata?.map((c=>(<div className="inline-block text-center " key={c.cast_id}>
        <img className="w-32 rounded-full " src={`https://image.tmdb.org/t/p/w500${c.profile_path}`} alt=""/>
        <h2 className="text-sm">{c.name}</h2>
        </div>
      )))}

   </> 
        
    
  
  )
}

export default Credits