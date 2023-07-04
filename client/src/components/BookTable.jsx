const BookTable = ({ books }) => {
    return (
        <>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                    </tr>
                </thead>
                <tbody>
                    
                    {
                        books.map(book => (
                            <tr key={crypto.randomUUID()}>
                                <td>
                                    {book.name}
                                </td>
                                <td>
                                    {book.author}
                                </td>
                                <td>
                                    {book.price}
                                </td>
                                <td>
                                    <button className="btn btn-sm btn-outline-secondary">
                                        Add to Cart
                                    </button>
                                </td>
                            </tr>
                        ))
                    }
                    
                </tbody>
            </table>
        </>
    );
};

export default BookTable;