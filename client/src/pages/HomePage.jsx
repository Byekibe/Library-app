import Header from '../components/Header.jsx';
import Books from '../components/Books.jsx';

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Books />
            </div>
        </>
    )
};

export default HomePage;