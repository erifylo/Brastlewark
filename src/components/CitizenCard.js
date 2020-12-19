import React from 'react'
import {Link} from 'react-router-dom'

export default function CitizenCard(props) {
    return (
        <div>
            <Link to={`/citizens/${props.id}`}>
             <div class="box">
      <div class="card">
            <div class="imgBx">
            <img src={props.thumbnail} width="250" height="300"/>
            </div>
            <div class="details">
            <h2>{props.name}<br></br><span>Age: {props.age}</span></h2>  
                </div>
                </div>
                </div>
                </Link>
         
        </div>
    )
}
