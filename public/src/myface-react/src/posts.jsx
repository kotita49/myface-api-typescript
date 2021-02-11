
import React, { useState, useEffect } from 'react';
import {Post} from './Post.jsx';
import './App.scss';


function PostsDisplay(){
    const [myPosts, setMyPosts] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/posts/').then(response => response.json()).then(data =>{console.log(data);
        setMyPosts(data)})
    }, []);
        if (!myPosts) {
        return <div>Waiting for data!</div>
    }    return myPosts.results.map((posts) =>
                   <div> <Post imageUrl={posts.imageUrl} post={posts.message} user={posts.postedBy.name} date={posts.createdAt} userId={posts.postedBy.id}
                   /></div>)
         
         
         
         
         
         
         
         
    
}


export {PostsDisplay};


// 