import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";


const BlogDetails = () => {
    const { id } = useParams();
    const singleBlog = `http://localhost:8000/blogs/${id}`
    const { error, isLoading, data: blog } = useFetch(singleBlog);
    const history = useHistory();

    const handleDelete = (id) => {
        fetch(singleBlog, {
            method: 'DELETE',
        })
        .then(() => history.push('/'))
    }
    
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
                    <button onClick={() => handleDelete(id)}>Delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;