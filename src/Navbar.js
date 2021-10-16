import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div>
                <h1>The Dojo Blog</h1>
            </div>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create">Add Blogs</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;