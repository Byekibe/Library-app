import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SubmitAlert from "../SubmitAlert.jsx";

const AddScienceBook = () => {
    const [bookName, setBookName] = useState("");
    const [author, setAuthor] = useState("");
    const [pages, setPages] = useState("");
    const [price, setPrice] = useState("");
    const [rating, setRating] = useState("");

    const [message, setMessage] = useState("");

    const url = "http://localhost:7000/science-data"

    const postToBackend = async () => {
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({name: bookName, author: author, pages: pages, price: price, review: rating})
        }

        const res = await fetch(url, requestOptions);
        const data = await res.json();
        setMessage(data.message)
    };
    // useEffect(() => {
    //     postToBackend()
    // }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        if (bookName === "" && author === "" && pages === "" && price === "" && rating === "") {
            return
        }

        postToBackend()

        console.log(message)
        setBookName("");
        setAuthor("")
        setPages("")
        setPrice("")
        setRating("")
    }

    return (
        <div className="container">
            <form onSubmit={handleSubmit} className="needs-validation">
                <div className="mb-3">
                    <label htmlFor="bookName" className="form-label">Book Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="bookName" 
                        value={bookName} 
                        onChange={(e) => setBookName(e.target.value)}
                        required
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="author" className="form-label">Author</label>
                    <input type="text" className="form-control" id="author" value={author} onChange={(e) => setAuthor(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="pages" className="form-label">Pages</label>
                    <input type="number" className="form-control" id="pages" value={pages} onChange={(e) => setPages(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="price" className="form-label">Price</label>
                    <input type="number" step="0.01" className="form-control" id="price" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="rating" className="form-label">Rating</label>
                    <input type="number" step="0.01" className="form-control" min={1} max={5} id="rating" value={rating} onChange={(e) => setRating(e.target.value)} required />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
            <Link to="/">Go Back</Link>
            {message === "Data received from Form" ? <SubmitAlert message="Submitted successfully" /> : <SubmitAlert message="Not Submitted" /> }
        </div>
    );
};

export default AddScienceBook;