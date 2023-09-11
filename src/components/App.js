// create your App component here
import React from "react";
import { useState , useEffect } from "react";

function App(){
    const [image,setImage] = useState([]);
    const [isLoaded,setIsLoaded] = useState(false);

    const imageRequest = ()=>{
        fetch("https://dog.ceo/api/breeds/image/random")
        .then(resp => resp.json())
        .then(data => {
        const imageUrl = data.message;
        setImage(imageUrl);
        setIsLoaded(true);
      })
      .catch(error => console.error(error));
  }
    useEffect(
        ()=>imageRequest(),
        []
    )

  return (
    <div>
        {isLoaded ? <img src={image} alt="A Random Dog"/> : <p> Loading... </p>}
    </div>
  )  
}

export default App