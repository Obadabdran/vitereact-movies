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
      <Route path='/' element={<Movies/>}/>
      <Route path='/series' element={<Series/>}/>
      <Route path='/details' element={<Details/>}/>
      <Route path='/detailsseason' element={<DetailsSeason/>}/>
      <Route path='/resultsearch' element={<ResultSearch/>}/>
      <Route path='/series/resultsearch' element={<ResultSearch/>}/>
      <Route path='/resultsearchgen' element={<ResultSearchGen/>}/>
      <Route path='/details/details' element={<Details/>}/>
      
      </Routes>
      </Container>
      </GlobalContext.Provider>
    
    <Footer/>
    
    </Router>
  )
}

export default App
