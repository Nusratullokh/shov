import axios from 'axios';
import './App.css';
import { useState, useEffect } from 'react';
import Card from './assets/components/card/Card';

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios("https://api.tvmaze.com/shows")
      .then(response => setData(response.data))
  }, []);

  return (
    <div className='app'>
      {
        data.map((item) => {
          return <Card  key={item.id} name={item.name} language={item.language} janr={item.genres[0]} rating={item.rating[0]} premiere={item.premiered} image={item.image.medium}/>
        })
      }
    </div>
  )
}

export default App