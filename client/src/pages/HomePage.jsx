import Header from '../components/Header.jsx';
import Books from '../components/Books.jsx';
import Footer from '../components/Footer.jsx';

const HomePage = () => {
    return (
        <>
            <Header />
            <div className="container">
                <Books />
            </div>
            <Footer />
        </>
    )
};

export default HomePage;