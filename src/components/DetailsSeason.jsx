import GlobalContext from '../hooks/GlobalContext'
import { useContext } from 'react'
import {Episodes} from '../components/index'

const DetailsSeason = () => {
    const {seasonnum}=useContext(GlobalContext)
    console.log(seasonnum)
    const e=[]
const episodes =()=>{
   for (let i=1; i < seasonnum.episode_count ;i++){
    e.push( <Episodes num={i}/>)
     }
    return e}
  return (
    <div  className='p-8'>
    <div className='flex flex-col items-center space-x-6  mt-4 mr-10 '>
      <img className=' w3/5 md:w-2/5 rounded-sm ' src={`https://image.tmdb.org/t/p/w500${seasonnum.poster_path}`}/>
      <div className='space-y-2 md:space-y-5 mt-4 font-bold' >
        <h2>{seasonnum.name}</h2>
        <h2>date: {seasonnum.air_date}</h2>
        <h2>Episodes count:  {seasonnum.episode_count}</h2>
        </div> 
    </div>
    <div className="space-y-2 mt-4">
        <h2 className="text-2xl">Overview:</h2>
        <h2 className="text-lg">{seasonnum.overview}</h2>
      </div>
      <div className='mt-4'>
      <h2 className="text-2xl mt-2 mb-2">Episode:</h2>
      <div className='flex  flex-row flex-wrap  '>
      {episodes()}
      </div>
      </div>
    </div>
  )
}

export default DetailsSeason