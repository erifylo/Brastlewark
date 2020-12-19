import React from 'react'
import {Link} from 'react-router-dom'

export default function CitizenCard(props) {
    return (
        <div>
            <Link to={`/citizens/${props.id}`}>
             <div className="box">
      <div className="card">
            <div className="imgBx">
            <img src={props.thumbnail} width="250" height="300"/>
            </div>
            <div className="details">
            <h2>{props.name}<br></br><span>Age: {props.age}</span></h2>  
                </div>
                </div>
                </div>
                </Link>
         
        </div>
    )
}
