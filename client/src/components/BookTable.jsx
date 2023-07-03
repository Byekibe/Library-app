const BookTable = ({ books }) => {
    return (
        <>
            <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th scope="row">1</th>
                </tr>
                {
                        books.map(book => (
                            <tr>
                                <td>
                                    {book.name}
                                </td>
                                <td>
                                    {book.author}
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