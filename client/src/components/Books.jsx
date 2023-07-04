import { useState, useEffect } from 'react';
import Spinner from './Spinner.jsx';
import BookTable from './BookTable.jsx';

const Books = () => {
    const [books, setBooks] = useState()
    const url = "http://localhost:7000/books"
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(url)
            const data = await res.json();
            setBooks(data.books)
          } catch (error) {
            console.log(error);
          }
        }
    
        fetchData();
    
      }, []);
    return (
        <>
            {
                typeof(books) === "undefined"? <Spinner /> : (<BookTable books={books} />) 
            }
        </>
    )
};

export default Books;