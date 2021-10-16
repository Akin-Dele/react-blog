import Bloglist from './Bloglist';
import useFetch from './useFetch';

const Home = () => {
    const title = 'All Blogs';
    const allBlogs = 'http://localhost:8000/blogs';
    const { error, isLoading, data: blogs } = useFetch(allBlogs);

    //Delete Items from the blog list
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id);
    //     //Set it to the new state
    //     setBlogs(newBlogs);
    // };

    return ( 
        <div className="home">
            { error && <div><h1>{ error }</h1></div> }
            { isLoading && <div><h1>Loading .....</h1></div> }
         { blogs && <Bloglist blogs={ blogs } title={ title }/> }
            {/* <Bloglist blogs={ blogs.filter(blog => blog.author === 'mario') } title={ title } handleDelete={ handleDelete } /> */}
        </div>            
     );
}
 
export default Home;