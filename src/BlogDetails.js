import { useParams } from "react-router";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const singleBlog = `http://localhost:8000/blogs/${id}`
    const { error, isLoading, data: blog } = useFetch(singleBlog);
    
    return ( 
        <div className="blog-details">
            { error && <div><h1>{ error }</h1></div> }
            { isLoading && <div><h1>Loading .....</h1></div> }
            { blog && (
                <article>
                    <h2> { blog.title } </h2>
                    <p><em>Written By: </em><span> { blog.author } </span></p>
                    <br />
                    <div> { blog.body } </div>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;