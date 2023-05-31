import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import Spinner from 'react-bootstrap/Spinner';
import './PostsList.scss'
import Post from "../Post/Post";

const PostsList:FC = () => {
    const {posts, error, limit, loading, page, counter} = useTypedSelector(state => state.posts);
    const {fetchPosts, setPostsPage} = useActions();
    const [pages, setPages] = useState([0])

    useEffect(() => {
        fetchPosts(page, limit);
        
    }, []);

    useEffect(() => {
        setPages(Array.from({length: (counter/ limit) }, (_, index) => index + 1));
    }, [posts])

    useEffect(() => {
        fetchPosts(page, limit)
        
    }, [page])

    if (loading) {
        return (
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        )
    };
    
    if (error) {
        return <h1>{error}</h1>
    };

    return (
        <div className="postsList">
            {posts.map((post) => <Post key={post.id} post={post} /> 
            )}
            <div style={{display: 'flex'}}>
                
                {pages.map (p =>
                    <div
                        key={p}
                        onClick={() => setPostsPage(p)}
                        style={{border: p === page ? '2px solid green' : '1px solid gray'}}
                    >{p}</div>
                )}
            </div>
        </div>
    );
};

export default PostsList;