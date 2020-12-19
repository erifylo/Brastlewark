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
            <h3>{citizen.name}</h3>
            <img src={citizen.thumbnail} alt="citizen"></img>
            <p>Age: {citizen.age}</p>
            <p>Weight: {citizen.weight}</p>
            <p>Height: {citizen.height}</p>
            <p>Hair Color: {citizen.hair_color}</p>
            <p>Profesions: <br></br>    {citizen.professions && citizen.professions.map((ele,index) => {
                return <span key={index}>{ele} <br></br></span>
            })} </p>
        
            <p>Friends: <br></br>  {citizen.friends && citizen.friends.map((ele,index) => {
                return <span key={index}>{ele} <br></br></span> 
            })} </p>
        </div>
    )
}
