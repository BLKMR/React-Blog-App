import { useParams, Navigate, useNavigate } from "react-router-dom";
import useFetch from "./useFetch";
import React from 'react';

const BlogDetails = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id);

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            navigate("/");
        })

    }

    return (  
        <div className="blog-details">
            { isPending && <div>Loading...</div> }
            { error && <div> { error } </div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <p>{ blog.date }</p>
                    <br/>
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            )}
        </div>
    );
}
 
export default BlogDetails;