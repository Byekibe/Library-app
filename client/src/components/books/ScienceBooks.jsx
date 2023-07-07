import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../Spinner.jsx';
import BookTable from '../tables/ScienceBookTable.jsx';

const ScienceBooks = () => {
  
    const [books, setBooks] = useState()
    
    const url_science = "http://localhost:7000/science_books"
    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await fetch(url_science)
            const data = await res.json();
            setBooks(data.science)
          } catch (error) {
            console.log(error);
          }
        }
    
        fetchData();
    
      }, []);
    return (
        <>
            <Link to="/add-science">Add Science Book</Link>
            {
              typeof(books) === "undefined"? <Spinner /> : (<BookTable books={books} />)
            }

        </>
    )
};

export default ScienceBooks;