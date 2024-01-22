import {Header,Footer,Details, ResultSearch, ResultSearchGen}from './sections/index'
import {Container, DetailsSeason} from './components/index'
import {Movies,Series} from "./pages/index"
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import { useState } from 'react'
import GlobalContext from './hooks/GlobalContext'

function App() {
  const [id,setId]=useState(0)
  const [type,setType]=useState("null")
  const[seasonnum,setSeasonnum]=useState()
  const [multname,setMultname]=useState("")
  const [genid,setGenid]=useState()

  return (
    <Router>
     
    <Header/>
    
    <GlobalContext.Provider value={{id,setId,type,setType,seasonnum,setSeasonnum,multname,setMultname,genid,setGenid}}>
      
    <Container>
      <Routes>
      <Route path='/vitereact-movies/' element={<Movies/>}/>
      <Route path='/vitereact-movies/series' element={<Series/>}/>
      <Route path='/vitereact-movies/details' element={<Details/>}/>
      <Route path='/vitereact-movies/detailsseason' element={<DetailsSeason/>}/>
      <Route path='/vitereact-movies/resultsearch' element={<ResultSearch/>}/>
      <Route path='/vitereact-movies/series/resultsearch' element={<ResultSearch/>}/>
      <Route path='/vitereact-movies/resultsearchgen' element={<ResultSearchGen/>}/>
      <Route path='/vitereact-movies/details/details' element={<Details/>}/>
      
      </Routes>
      </Container>
      </GlobalContext.Provider>
    
    <Footer/>
    
    </Router>
  )
}

export default App
