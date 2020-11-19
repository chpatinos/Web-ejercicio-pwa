import React, { useEffect, useState } from "react";
import Caracter from "./caracter";
import logo from "../logo.svg";
import Error from "./error";

const URL =
  "https://gateway.marvel.com:443/v1/public/characters?apikey=f33114d37226145ffbda5ee598cfe5cb&hash=3c078ad78a462ccadfe0c551b448b894&ts=carlos";

const getRandomCharacter = async () => {
  let data = (await (await fetch(URL)).json()).data.results;
  let random = Math.floor(Math.random() * data.length);
  if (!data[random].description) data[random].description = "No description provided";
  return data[random];
};

const Marvel = () => {
  const [caracter, setCaracter] = useState("");

  useEffect(() => {
    if (!navigator.onLine) {
      if (localStorage.getItem("caracter") === null) setCaracter(null);
      else setCaracter(JSON.parse(localStorage.getItem("caracter")));
    } else {
      getRandomCharacter().then((resp) => {
        setCaracter(resp);
        localStorage.setItem("caracter", JSON.stringify(resp));
      });
    }
  }, []);

  return (
    <div className="container-fluid">
      <div className="row justify-content-center align-items-center">
        <div className="col-12 align-self-start my-4">
          <img className="img-fluid" width="200" src={logo} alt="logo"></img>
        </div>
        <div className="col-12 mt-5">
          {caracter ? <Caracter caracter={caracter}></Caracter> : <Error></Error>}
        </div>
      </div>
    </div>
  );
};

export default Marvel;
