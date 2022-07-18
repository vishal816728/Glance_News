
import './App.css';
import Container from "react-bootstrap/Container"
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Header from './components/Header/Header';
import HomePage from './pages/HomePage';
import { useEffect, useState } from 'react';
import axios from "axios"
import Business from './pages/Business';
import Sports from './pages/Sports';
import Politics from './pages/Politics';
import Technology from './pages/Technology';
import Entertainment from './pages/Entertainment';
import SciencePage from './pages/SciencePage';
import HealthPage from './pages/HealthPage';

function App() {
  const [generalNews,setGeneralNews]=useState()
  const [businessNews,setBusinessNews]=useState()
  const [sportsNews,setSportsNews]=useState()
  const [politicsNews,setPoliticsNews]=useState()
  const [technologyNews,setTechnologyNews]=useState()
  const [entertainmentNews,setEntertainmentNews]=useState()
  const [scienceNews,setScienceNews]=useState()
  const [healthNews,setHealthNews]=useState()
  useEffect(()=>{
    loadnews()
},[])
  async function loadnews(){
    try{
      const news=await axios.get('http://localhost:5000/general-headlines')
      setGeneralNews(news)
      const businessnews=await axios.get('http://localhost:5000/business-headlines')
      setBusinessNews(businessnews)
      const sportsnews=await axios.get('http://localhost:5000/sports-headlines')
      setSportsNews(sportsnews)
      const politicsnews=await axios.get('http://localhost:5000/politics-headlines')
      setPoliticsNews(politicsnews)
      const technologynews=await axios.get('http://localhost:5000/technology-headlines')
      setTechnologyNews(technologynews)
      const entertainmentnews=await axios.get('http://localhost:5000/entertainment-headlines')
      setEntertainmentNews(entertainmentnews)
      const sciencenews=await axios.get('http://localhost:5000/science-headlines')
      setScienceNews(sciencenews)
      const healthnews=await axios.get('http://localhost:5000/health-headlines')
      setHealthNews(healthnews)
    }catch(err){
      console.log(err)
    }
  }
 
  return (
   <Container>
        <BrowserRouter>
          <Header />
          
          {generalNews && businessNews && sportsNews && politicsNews && technologyNews && entertainmentNews && scienceNews && healthNews?
              
          <Routes>
              <Route path="/" element={<HomePage generalNews={generalNews} />}></Route>
              <Route path="/news/business" element={<Business businessNews={businessNews} />}></Route>
              <Route path="/news/sports" element={<Sports sportsNews={sportsNews} />}></Route>
              <Route path="/news/politics" element={<Politics politicsNews={politicsNews} />}></Route>
              <Route path="/news/technology" element={<Technology technologyNews={technologyNews} />}></Route>
              <Route path="/news/entertainment" element={<Entertainment entertainmentNews={entertainmentNews} />}></Route>
              <Route path="/news/science" element={<SciencePage scienceNews={scienceNews} />}></Route>
              <Route path="/news/health" element={<HealthPage healthNews={healthNews} />}></Route>
          </Routes>
          :""
          }
        </BrowserRouter>
   </Container>
  );
}

export default App;


