const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div>
                <h1>The Dojo Blog</h1>
            </div>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">Add Blogs</a>
            </div>
        </nav>
     );
}
 
export default Navbar;