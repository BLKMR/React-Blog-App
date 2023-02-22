import { useState } from "react";
import { useNavigate, redirect } from "react-router-dom";

const Create = () => {

    var today = new Date();
    var strDate = 'm-d-Y'
    .replace('Y', today.getFullYear())
    .replace('m', today.getMonth()+1)
    .replace('d', today.getDate());


    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('');
    const [isPending, setIsPending] = useState(false);
    const [date, setDate] = useState(strDate);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author, date };

        setIsPending(true);
        
        fetch('http://localhost:8000/blogs',
        {
            method: 'Post',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            navigate("/")
        })
    }


    return ( 
        <div className="create">
            <h2>Create a new blog!</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input
                    type="text"
                    required
                    value={title }
                    onChange={(e) => setTitle(e.target.value)}
                     />
                <label>Blog body:</label>
                <textarea required
                value={ body }
                onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <label>Blog author:</label>
                <select
                value={ author }
                onChange={(e) => setAuthor(e.target.value)}>
                    <option value="Michael Blackmer">Michael Blackmer</option>
                    <option value="Michelle Whiterem">Michaell Whiterem</option>
                </select>
                { !isPending && <button>Submit</button> }
                { isPending && <button>Adding Blog...</button> }
                
                <p>Title Preview: { title }</p>
                <br/>
                <p>Author Preview: { author }</p>
                <br/>
                <p>Body Preview: { body }</p>
                <br/>
                Today's Date:
                <p>{ strDate }</p>

            </form>
        </div>
     );
}
 
export default Create;