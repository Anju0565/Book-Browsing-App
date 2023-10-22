import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import '../style/myBook.css'
import BookForm from "../components/BookForm";

const getMyBook = async (token) => {
    return await axios.get(`http://localhost:8080/user/book`, {
        headers: {
            token: token,
        },
    });
}
const deleteMyBook = async (token,id) => {
    return await axios.delete(`http://localhost:8080/book/${id}`, {
        headers: {
            token: token,
        },
    });
}
export default function MyBooks() {
    let LocalToken = JSON.parse(localStorage.getItem("token"));
    const [data, setData] = useState([]);
    useEffect(() => {
        getMyBook(LocalToken.token).then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            alert(err)
        })
    }, [])

   const handleDelete =(id)=>{
    deleteMyBook(LocalToken.token,id).then((res) => {
        getMyBook(LocalToken.token).then((res) => {
            setData(res.data.data)
        }).catch((err) => {
            alert(err)
        })
    }).catch((err)=>{
        alert(err)
    })
   }

    if(!data.length){
        return <h1>Book List is Empty</h1>
    }


    return (
        <div className="myBooks">
            <div className="myBook">
            {data.map((book) => (<div className="myBookStyle">
                <img src={book.ImageUrl} alt="bookImage" height={'80px'} width={'80px'}/>
                <h3 style={{color:"teal"}}>{book.Name}</h3>
                <p>Author: {book.Author}</p>
                <p>Price: ₹{book.Price}</p>
                <p>Genre: {book.Genre}</p>
                <div style={{marginBottom:"10px"}}>
                <button style={{height:"30px",backgroundColor:"teal",color:'whitesmoke'}} onClick={()=>{
                    handleDelete(book._id);
                }} >Delete</button>
                    <Link to={`/book/${book._id}`}><button style={{height:"30px",backgroundColor:"teal",color:'whitesmoke',marginLeft:"4px"}}>Details</button></Link>
                </div>
                
            </div>))}
        </div>
        </div>
        
    )
}