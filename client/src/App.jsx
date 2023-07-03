import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [names, setNames] = useState({})
  const url = "http://localhost:7000"
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url)
        const data = await res.json();
        console.log(data.names)
        setNames(data.names)
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();

  }, []);

  

  return (
    <>
      {JSON.stringify(names)}
      
    </>
  )
}

export default App
