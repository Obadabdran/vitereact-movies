import { useEffect, useState } from "react"
import { useGetPopularSeriesApiQuery } from "../services/popularApi"
import { Poster } from "../components/index"
import { Search } from "../components/index"
import ReactPaginate from "react-paginate"

const Serie = () => {
    const {data, error, isLoading }=useGetPopularSeriesApiQuery()
    const [series,setSeries] =useState([])
    const type="serie"
    const itemsPerPage=8
 
 useEffect(()=>{
    console.log(data);
    {!isLoading?setSeries(data.results):null}
 },[data])
 console.log(series)

 const [itemOffset, setItemOffset] = useState(0);

   
    
 const endOffset = itemOffset + itemsPerPage;

const currentItems = series.slice(itemOffset, endOffset);
const pageCount = Math.ceil(series.length / itemsPerPage);






const handlePageClick = (event) => {
 const newOffset = (event.selected * itemsPerPage) % series.length;
 
 setItemOffset(newOffset);
};
 
 
    return (
        <>
        <Search path='serie'/>
        <div className="flex flex-row flex-wrap place-content-center space-x-6 space-y-4 py-2 mb-4  ">
        {currentItems?.map((d)=>< >
        <Poster key={d.id} type={type} id={d.id} image={d.poster_path} title={d.name} />
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
        containerClassName="flex items-center justify-center mb-2 text-sm gap-5 "
        pageLinkClassName="py-2 px-2 cursor-pointer border-solid hover:bg-slate-600 hover:text-white "
        previousLinkClassName="py-2 px-4 text[4px] md:text-sm cursor-pointer border-solid  hover:bg-slate-600 hover:text-white "
        nextLinkClassName="py-2 px-2 text[4px] md:text-sm cursor-pointer border-solid  hover:bg-slate-600 hover:text-white"
        activeLinkClassName="active"
      />
        </>
  )
}

export default Serie