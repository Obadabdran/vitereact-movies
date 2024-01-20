import { Link } from "react-router-dom"
import GlobalContext from '../hooks/GlobalContext'
import { useContext } from 'react'

const Season = (props) => {

    const {setSeasonnum}=useContext(GlobalContext)
   
    
  return (
    <div className='w-full h-full mt-0 overflow-x-scroll scroll whitespace-nowrap scroll-smooth space-x-2 '>
        {props.sedata?.map((s)=>
        <Link to='/detailsseason' onClick={()=>{{setSeasonnum(s)} }}  className=' inline-block w-1/5  place-items-center border border-slate-800 rounded-lg'>
                
            <img src={`https://image.tmdb.org/t/p/w500${s.poster_path}`}/>
             <h2 className='text-center text-sm'>{s.name}</h2>
             
        </Link> 
        )}
        
    </div>
  )
}

export default Season