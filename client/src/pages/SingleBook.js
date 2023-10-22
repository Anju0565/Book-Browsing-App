import axios from "axios"
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import '../style/single.css'

const getSingleBook = async(id)=>{
    return  await axios.get(`http://localhost:8080/book/${id}`);
}

export default function SingleBook(){
    const [data,setData]=useState({});

    const { id } = useParams()
    
    useEffect(()=>{
     getSingleBook(id).then((res)=>{
       setData(res.data)
     }).catch((err)=>{
        alert(err)
     })
    },[])

  
    return (
    <div className="singlePage">
    <div>
      <img src={data.ImageUrl} alt="Book Cover" height={'400px'} width={'300px'}/>
    </div>
    <div className="details">
      <h1 style={{color:"teal"}}>{data.Name}</h1>
      <div><span className="title" style={{color:"teal"}}>Author:</span> {data.Author}</div>
      <div><span className="title" style={{color:"teal"}}>Price:</span> {data.Price}</div>
      <div><span className="title" style={{color:"teal"}}>Genre:</span> {data.Genre}</div><br />
      <div><span className="title" style={{color:"teal"}}>Description:</span> {data.Desc}</div>
    </div>
  <div>
  
</div>
    </div>
     
    )
    }