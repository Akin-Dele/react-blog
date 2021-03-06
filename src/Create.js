import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
    
    const handleSubmit =(e) => {
        e.preventDefault();

        const blog = { title, body, author };

        setIsPending(true);

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log('New Blog Added');
            setIsPending(false);
            //Redirect to Home Page
            //history.go(-1) to go back || history.go(1) to go forward  
            history.push('/');
        })
        .catch((err) => {console.log(err)
        })
    }
    return ( 
        <div className="create">
            <h1>Add a New Blog</h1>
            <form onSubmit={handleSubmit} action="">
                <label htmlFor="">Blog Title:</label>
                <input type="text"
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
                <label htmlFor="">Blog Title:</label>
                <textarea
                required
                value={ body }
                onChange={ e => setBody(e.target.value)}>
                </textarea>
                <label htmlFor="">Blog Author:</label>
                <select 
                required
                value={ author }
                onChange={ e => setAuthor(e.target.value)}>
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button disabled>Adding Blog...</button> }
            </form>
        </div>
     );
}
 
export default Create;