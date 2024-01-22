import GlobalContext from '../hooks/GlobalContext'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

const Poster = (props) => {

  const {setId}=useContext(GlobalContext)
  const {setType}=useContext(GlobalContext)
  const handleDetails=()=>{
   setId(props.id)
   if(props.type=="serie"){
   setType("tv")}
   else setType(props.type)
   
  }
  return (
    <>
      <div className=" relative   w-3/4 md:w-1/4 m-2  bg-slate-700 border border-slate-800 rounded-xl flex flex-col place-items-center py-4  px-2 text-white text-center">
      <img className=" w-60 h-80 rounded-md -mt-3" src={`https://image.tmdb.org/t/p/w500${props.image}`}/>
        <h2 className="py-2   " >{props.title}</h2>
        <Link className=" absolute -bottom-3 border border-slate-700 bg-slate-800 px-2 rounded-xl  hover:bg-white hover:text-slate-800" to='/vitereact-movies/details' onClick={handleDetails}>Watch/Download</Link>
      </div>
    </>
  )
}

export default Poster