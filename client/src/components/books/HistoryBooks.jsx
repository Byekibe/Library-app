import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import HistoryBookTable from "../tables/HistoryBookTable";
import Spinner from "../Spinner.jsx";

const HistoryBooks = () => {
    const [historyBooks, setHistoryBooks] = useState()

    const history_url = "http://localhost:7000/history_books"
    useEffect(() => {
        const getBooks = async () => {
            const res = await fetch(history_url);
            const data = await res.json();

            setHistoryBooks(data.history)
        };

        getBooks();
    }, []);


    return (
        <>
        <Link to="/add-history">Add History Book</Link>
            {
                typeof(historyBooks) === "undefined"? <Spinner /> : (<HistoryBookTable books={historyBooks} />)

            }
        </>
    );
};

export default HistoryBooks;