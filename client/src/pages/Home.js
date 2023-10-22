import { useEffect } from "react";
import BookCard from "../components/BookCard";
import Pagination from "../components/Pagination";
import { useDispatch, useSelector } from "react-redux";
import { getBooks, updatePage, updateQuantity, updateSortBy, updateSorting } from "../redux/books/booksActions";
import '../style/home.css'

export default function Home() {
    const dispatch = useDispatch();
    const { query, suggestions, selectedOption, sortOrder, books,page,quantity,totalPages } = useSelector(
        (state) => state.books
    );

    useEffect(() => {

        dispatch(getBooks({ query: query,selectedOption: selectedOption,sortOrder: sortOrder,page:page,quantity:quantity}))
    }, [query, selectedOption, sortOrder,page,quantity]);

    const handleSortBy = (e) => { 
        dispatch(updateSortBy(e.target.value));
    };

    const handleSortingChange = (e) => {
        dispatch(updateSorting(e.target.value));
    };
    const handleQuantityChange = (e) => {
        dispatch(updateQuantity(e.target.value));
    };

    const handlePageChange =(data)=>{
        dispatch(updatePage(data))
    }

    return (
        <div className="home">
            <div className='booksContainer'>
                <div className="filter">
                    <div><br />
                        <h3>Filter Books By:</h3>
                        <ul>
                            {suggestions.map((suggestion, index) => (
                                <li key={index}>{suggestion}</li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        <select className='selectFilter' value={selectedOption}
                          onChange={handleSortBy}>
                            <option value={""} style={{ fontStyle: 'italic' }}>Sort by</option>
                            <option value={"Name"}>Name</option>
                            <option value={"Author"}>Author</option>
                            <option value={"Price"}>Price</option>
                            <option value={"Genre"}>Genre</option>
                        </select>
                    </div>
                    <div>
                        <select className='selectFilter' value={sortOrder}
                        onChange={handleSortingChange}>
                            <option value={"asc"}>Asc</option>
                            <option value={"desc"}>Desc</option>
                        </select>
                    </div>
                    <div>
                        <select className='selectFilter' value={quantity} onChange={handleQuantityChange}>
                            <option value={""} style={{ fontStyle: 'italic' }}>Per Page</option>
                            <option value={10}>10</option>
                            <option value={20}>20</option>
                            <option value={30}>30</option>
                            <option value={40}>40</option>
                            <option value={50}>50</option>
                        </select>
                    </div>
                </div>

                <div className='bookList'>
                    {books.map((book, index) => (
                        <BookCard key={index} book={book} />
                    ))}
                </div>
            </div><br /><br />
            <Pagination totalPages={totalPages} currentPage={page} onPageChange={handlePageChange} ></Pagination>
        </div>

    )
}