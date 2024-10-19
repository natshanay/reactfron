// src/PostsList.js
import React, { useEffect, useState } from 'react';
// import './PostList.css'
import axios from 'axios';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Replace with your Laravel app URL
        axios.get('http://localhost:8000/api/posts')
            .then(response => setPosts(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <div>
            <h1>Posts List</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsList;
