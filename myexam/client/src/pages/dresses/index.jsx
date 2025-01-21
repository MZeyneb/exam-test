import React, { useState, useEffect } from 'react'
import styles from "./index.module.scss"
import { BASE_URL } from '../../constants'
import axios from 'axios'

const Dresses = () => {
    const [dresses, setDresses] = useState([])
    const [search, setSearch] = useState("")
    const [sortt, setSort] = useState("name")
    const getAllDresses = async () =>{
        const res = await axios.get(`${BASE_URL}`)
        setDresses(res.data)
    }

    const sortDresses = (dress)=>{
        let sortedDresses = [...dress]
        if(sortt === "ASC"){
            sortedDresses.sort((a, b) => a.price - b.price);

        }
        else if(sortt === "DESC"){
            sortedDresses.sort((a, b)=> b.price- a.price)
        }
        return sortedDresses


    }

    console.log(dresses);

    
    const filtered = dresses.filter((d)=> d.name?.toLowerCase().includes(search.toLowerCase().trim()))        

    const sortAndFilter = sortDresses(filtered)
    useEffect(() => {   
      
    getAllDresses()
    
    }, [])

    

  return (
    <>
    <section className={styles["products"]}>


    <div className="container">
        <div className={styles["inp"]}>

        <input type="text" placeholder='Search' onChange={(e)=> setSearch(e.target.value)}/>


        </div>
        <div className={styles["selectt"]}>
    <select value={sortt} onChange={(e)=> setSort(e.target.value)}>
    <option value="ASC">ASC</option>
    <option value="DESC">DESC</option>


    </select>
        </div>
    <div className={styles["dresses"]}>
    {
        dresses.length> 0 && sortAndFilter.map((d)=>{
            return(
                <div className={styles["dress"]} key={d._id}>
            <div className={styles["imge"]}>
                <img src={d.image} alt="" />
            </div>
            <h3>{d.name}</h3>
            <p>${d.price}</p>
        </div>


)

})
}

    </div>

    </div>
</section>
    
    </>
  )
}

export default Dresses
