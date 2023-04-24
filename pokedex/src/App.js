import React, { useState, useEffect } from "react";
import axios from "axios";
import "./index.css"
import logo from './logo.jpg';
import poke from './poke.png';
import home from './home.png';
import menu from './menu.png';

export default function PokeAPI() {
  const [name, setname] = useState("");
  const [Find, setFind] = useState("pikachu");
  const [Img, setImg] = useState("");
  const [ImgIcon, setImgIcon] = useState("");
  const [Type, setType] = useState("");
  const [Moves, setMoves] = useState("");
  const [Abilities, setAbilities] = useState("");
  const [Slide, setSlide]= useState(false);


  useEffect(() => {
    async function getData() {
      try {
        let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${Find}`);
        console.log(res.data);
        setImg(res.data.sprites.other.dream_world.front_default);
        setImgIcon(res.data.sprites.front_default);
        
        setType(res.data.types[0].type.name);
        setMoves(res.data.moves.map((e) => e.move.name));
        setAbilities(res.data.abilities.map((e) => e.ability.name ));
       
      } catch (error) {
        alert("PAVVINèèèèèè");
        
      }
    }
  
    getData();
  }, [Find]);
 
 


  const Typename = (event) => {
    setname(event.target.value);
  };

  const Search = () => {
    if (name !== "") setFind(name);
    setname("");
  };
  const handleSLide = () => {
    setSlide(!Slide);
   }

  return (
    <>
      <div className="header">
      <img src={poke} alt="" />
        <nav>
          <a href="#"> <img src={home} alt="" /></a>
          <a href="#"><img className="logo" src={logo}></img></a>
          <a href="#"> <img src={menu} alt="" /></a>
        </nav>


      </div>
      <div className="back">
        <div className="card">

          <div className="TopLeft">
            <div className="circleA"></div>
            <div className="circleB"></div>
            <div className="circleB"></div>
            <div className="circleB"></div>
          </div>
          <div className="screenLeft">
            <div className="grayCont">
              <div className="graybtn"></div>
              <div className="graybtn"></div>
            </div>
            <img src={`${Img}`} alt="" />
            <div className="redContainer">
              <div className="redBtn"></div>
              <div className="hamburger">
                <div className="ham1"></div>
                <div className="ham1"></div>
                <div className="ham1"></div>
              </div>
            </div>
          </div>

          <nav>
            
          <div className="type">{Type}</div>
          </nav>
          <button className="openPoke"onClick={handleSLide} >Open</button>
          
        </div>
        <div className= {Slide ? "card2" : "dex"}>
          <div className="top">
            <div className="name">{Find.toUpperCase()}</div>
            <div><img src={ImgIcon}/></div>
            
            <div className="type1">{Abilities}</div>
          </div>
          <div className="medium">
            <label For="">Cerca il tuo pokemon</label>
            <div className="input">

              <input type="text" className="testo" onChange={Typename} value={name} />

            </div>
            <div className="fake">
              <div className="btn-fake"></div>
              <div className="btn-fake"></div>
            </div>
          </div>
          <div className="bottom">
            <div className="first-bottom">
              <div className="useless-cont">
                <div className="btn-useless"></div>
                <div className="btn-useless"></div>
              </div>
              <button className="enter" onClick={Search}>Cerca</button>
            </div>
            <div className="second-bottom">
              <button className="btn-useless2" >

              </button>
              <div className="btn-useless3"></div>
            </div>
          </div>
        </div>

      </div>
      <footer>
        <p></p>
      </footer>
    </>
  );
}