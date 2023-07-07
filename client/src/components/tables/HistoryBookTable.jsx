const HistoryBookTable = ({ books }) => {
    return (
        <>
        <h2>History Books</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Author</th>
                        <th scope="col">Price</th>
                        <th scope="col">Pages</th>
                        <th scope="col">Rating</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        books?.map(book => (
                            <tr key={crypto.randomUUID()}>
                                <th scope="row"></th>
                                <td>{book[1]}</td>
                                <td>{book[2]}</td>
                                <td>{book[5]}</td>
                                <td>{book[3]}</td>
                                <td>{book[4]}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    );
};

export default HistoryBookTable;