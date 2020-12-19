import React from 'react'
import {Link} from 'react-router-dom'

export default function CitizenCard(props) {
    return (
        <div>
            <Link to={`/citizens/${props.id}`}>
            <img src={props.thumbnail} width="250" height="300"/>
                <p>{props.name}</p>    </Link>
                
         
        </div>
    )
}
