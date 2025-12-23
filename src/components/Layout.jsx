import Header from './Header';
import Navbar from './Navbar';
import Showcase from './Showcase';
import Sidebar from './Sidebar';
import Footer from './Footer';

function Layout({ children }) {
    return (
        <>
            <Header />
            <Navbar />
            <Showcase />
            <main>{children}</main>
            <Sidebar />
            <Footer />
        </>
    );
}

export default Layout;


