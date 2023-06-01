import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

import './PostsList.scss'
import Post from "../Post/Post";

import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Pagination from 'react-bootstrap/Pagination';

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
        return (
            <Alert variant={'danger'}>{error}</Alert>
        )
    };

    let active = page;
    let items = [];
    for (let number = 1; number <= 5; number++) {
        items.push(
            <Pagination.Item key={number} active={number === active} onClick={() => setPostsPage(number)}>
            {number}
            </Pagination.Item>,
        );
    }

    return (
        <div className="postsList">
            {posts.map((post) => <Post key={post.id} post={post} /> 
            )}
            <Pagination>{items}</Pagination>
            {/* <div style={{display: 'flex'}}>
                
                {pages.map (p =>
                    <div
                        key={p}
                        onClick={() => setPostsPage(p)}
                        style={{border: p === page ? '2px solid green' : '1px solid gray'}}
                    >{p}</div>
                )}
            </div> */}
        </div>
    );
};

export default PostsList;