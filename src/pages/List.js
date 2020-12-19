import React, {useState, useEffect} from 'react';
import axios from "axios";
import CitizenCard from "../components/CitizenCard"

export default function List() {
    const [listOfCitizens, setListOfCitizens] = useState([]);
    const [filter, setFilter]=useState("")

    useEffect(() => {
        if (listOfCitizens.length === 0) {
            axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
            .then((response) => {
                setListOfCitizens(response.data.Brastlewark);
                console.log(listOfCitizens)
            })
        }
    })


    const handleChange = (event) => {
        setFilter(event.target.value)
        axios.get("https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json")
        .then((response) => {
            const citizens=response.data.Brastlewark;
            let listCopy = citizens.filter((ele) => {
                return ele.name.toLowerCase().includes(event.target.value.toLowerCase())
            })
            setListOfCitizens(listCopy)
        })
    }


    return (
        <div>
      

        <form className="search-bar">
            <input type="text" name="text" placeholder="Search by Name" value={filter} onChange={handleChange}></input>
           
         </form>
        
            {listOfCitizens.map((ele,index) => {
                return<CitizenCard key={index}{...ele}></CitizenCard>
              
            })}
          
        </div>
    )
}
