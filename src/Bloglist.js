import { Link } from "react-router-dom";

const Bloglist = ({ title, blogs }) => {
    // const title = props.title;
    // const blogs = props.blogs;
    return ( 
        <div className="blog-list">
            <h2>{ title }</h2>
        { blogs.map(blog => (
            <div className="blog-preview" key={blog.id}>
                <Link to={ `/blog/${blog.id}` }>
                    <h2>{ blog.title }</h2>
                    <p> <em>Written By: <span>{ blog.author}</span></em> </p>
                </Link>
            </div>
        ))}
    </div>
     );
}
 
export default Bloglist;