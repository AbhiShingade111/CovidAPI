import './App.css';
import CovidFetch from './components/CovidFetch';
import { useEffect, useState } from 'react';
import SearchAppBar from './components/Navbar';
import Footer from './components/Footer';
import StateData from './components/StateData';

function App() {

  const [stateData, setData] = useState({});
  const [st, setST] = useState([]);
  const fetchdata = async () => {
    const response = await fetch("https://api.rootnet.in/covid19-in/stats/latest");
    const data = await response.json();
    setData(data);
    setST(data.data.regional)
  }

  useEffect(() => {
    fetchdata();
  }, [])

  return (
    <div>
      <SearchAppBar />
      <CovidFetch datacovid={stateData}/>
      <StateData info={st} />
      <Footer />     
    </div>
  );
}

export default App;
