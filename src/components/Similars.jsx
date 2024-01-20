import { Link } from "react-router-dom"
import GlobalContext from '../hooks/GlobalContext'
import { useContext } from 'react'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Similars.css'
import { useNavigate } from "react-router-dom";
import {Poster} from './index'

const Similars = (props) => {
  
    console.log(props.sdata)
    console.log(props.typpe)
    const navigate=useNavigate()

    const {id,setId}=useContext(GlobalContext)
    const {type,setType}=useContext(GlobalContext)
    const handleSimilar=async(s)=>{
      console.log('ok')
       setId(s.id)
      await setType(props.typpe)
       //if(proptype=="serie"){
       // setType("tv")}
        //else setType(s.type)
        console.log(id)
        console.log(type)
       navigate('/details/details')
       props.y.current.scrollIntoView({
        behavior:"smooth"
       })
      
        
       }


       var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };


       //<Poster key={s.id} type={type} id={s.id}  image={s.poster_path} title={s.title} />
       return (
  
    <>
      
      <Slider {...settings}>
      {props.sdata?.map((s)=>(
        
        <div className="  bg-slate-700 border border-slate-800 rounded-xl flex flex-col justify-center py-4   text-white text-center">
         <img className=" w-60 h-80 rounded-md -mt-3" src={`https://image.tmdb.org/t/p/w500${s.poster_path}`}/>
         <h2 className="  py-1   text-[12px]    " >{s.title}{s.name}</h2>
         <button className=" mb-0 font-thin text-sm border border-slate-700 bg-slate-800 px-2 rounded-xl  hover:bg-white hover:text-slate-800"  onClick={()=>{handleSimilar(s)}} >Watch/Download</button>
        </div>
        
      )
       )}
    </Slider>
    </>
    
    
    
  )
}

export default Similars