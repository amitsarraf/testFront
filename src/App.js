import {useEffect, useState} from 'react'
import './App.css'

function App() {

const [data, setData] = useState([])

  useEffect(()=>{
     async function fetchData() {
     const movieData = await fetch("/api");
      const response = await movieData.json()
      setData(response)
    }
    fetchData();
  },[]);

  return (
    <div className="container">
      <div>
        <h1 className="heading">Hello from react</h1>
      </div>
      <div style={{display: "flex", flexWrap: "wrap" , justifyContent: 'space-between' , marginBottom:"2px"}}>
        {data.map((item)=>{
          return(
            
        <div className="card" style={{ width: "18rem" }} key={item._id}>,
          <div className="card-body" >
            <h5 className="card-title">{item.movieName}</h5>
            <p className="card-text">
              {item.rating}
            </p>
            <p className="card-text">
              {item.releasedDate}
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
          )
})
}
      </div>
    </div>
  );
}

export default App;
