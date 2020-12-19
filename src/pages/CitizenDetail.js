import React, { useState, useEffect } from 'react'
import axios from "axios";


export default function CitizenDetail(props) {
    const [citizen, setCitizen]=useState({})

    useEffect(() => {
      
        axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
        .then((response) => {
            const result = response.data.Brastlewark
           const citizenDetail = result.find(element => element.id==props.match.params.id)
           setCitizen(citizenDetail)
        })
    })

    return (
        <div>
        <div class="card2">
            
          
            <h1>{citizen.name}</h1>
            <p class="title">Age: {citizen.age}</p>
            <img src={citizen.thumbnail} alt="citizen" id="cardImage" ></img>
            <p><h4>Weight:</h4> {citizen.weight}</p>
            <p><h4>Height: </h4>{citizen.height}</p>
            <p><h4>Hair Color:</h4> {citizen.hair_color}</p>
            <p><h5>Profesions:</h5>     {citizen.professions && citizen.professions.map((ele,index) => {
                return <span key={index}>{ele} <br></br></span>
            })} </p>
        
            <p><h5>Friends:</h5>   {citizen.friends && citizen.friends.map((ele,index) => {
                return <span key={index}>{ele} <br></br></span> 
            })} </p>
            <div className = "socialIcons">
            <a href="#"><i class="fa fa-dribbble"></i></a>
  <a href="#"><i class="fa fa-twitter"></i></a>
  <a href="#"><i class="fa fa-linkedin"></i></a>
  <a href="#"><i class="fa fa-facebook"></i></a>
  </div>
  <p><button>Contact</button></p>
            </div>
        </div>
    )
}
