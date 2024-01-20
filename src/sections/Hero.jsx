import { useEffect, useState } from "react"
import { useGetPopularApiQuery } from "../services/popularApi"
import {Poster} from '../components/index'
import { Search } from "../components/index"
import ReactPaginate from "react-paginate"


const Hero = () => {
  const { data, error, isLoading } = useGetPopularApiQuery()
  const[movies,setMovies]=useState([])
  const type="movie"
  const itemsPerPage=8

useEffect(()=>{
  console.log(data)
  {!isLoading?setMovies(data.results):null}

},[data])
console.log(movies)




  const [itemOffset, setItemOffset] = useState(0);

   
    
    const endOffset = itemOffset + itemsPerPage;
  
  const currentItems = movies.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(movies.length / itemsPerPage);


   
  

  
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % movies.length;
    
    setItemOffset(newOffset);
  };








  return (
    <>

   <Search/>
   
    <div className="flex flex-col md:flex-row flex-wrap place-content-center  py-2  ">
    {currentItems?.map((d)=><>
    <Poster key={d.id} type={type} id={d.id}  image={d.poster_path} title={d.title} />
    </>)}
    </div>



    
      <ReactPaginate
        breakLabel="..."
        nextLabel="next>"
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={pageCount}
        previousLabel="<previous"
        renderOnZeroPageCount={null}
        containerClassName="flex items-center justify-center mb-2 text-sm gap-5"
        pageLinkClassName="py-2 px-2 cursor-pointer border-solid  hover:bg-slate-600 hover:text-white "
        previousLinkClassName="py-2 px-4 text[4px] md:text-sm cursor-pointer border-solid  hover:bg-slate-600 hover:text-white"
        nextLinkClassName="py-2 px-2 text[4px] md:text-sm cursor-pointer border-solid  hover:bg-slate-600 hover:text-white"
        activeLinkClassName="active"
      />
    
   
    </>
  )
}


export default Hero