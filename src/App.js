import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import TopContent from "./TopContent";
import Image from "./Image";
import MainContent from "./MainContent";


function App() {
  const [nasaData, setNasaData] = useState({});

  useEffect(() => {
    axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
    .then(response => {
      console.log(response);
      setNasaData(response.data);
    })
    .catch(error => {
      console.log('Error: ', error);
    })
  }, []);

  // if(!nasaData.title){
  //   return console.log('loading');
  // }
  // else{
  // console.log(nasaData.title);
  // }

  return (
    <div className="App">
      {/* <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p> */}
      <TopContent/>
      <Image image={nasaData.url}/>
      <MainContent 
        title={nasaData.title} 
        date={nasaData.date}
        description={nasaData.explanation}/>
      {/* <Image image={nasaData.hdurl}/> */}
    </div>
  );
}

export default App;
