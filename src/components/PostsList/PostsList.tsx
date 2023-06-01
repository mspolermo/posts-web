import React, { FC, useEffect, useMemo, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";

import './PostsList.scss'
import Post from "../Post/Post";

import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Pagination from 'react-bootstrap/Pagination';
import { IPost } from "../../types/posts";

interface PostsListProps {
    typeOfSorting?: string;
    searchQuerry? : string;
}

const PostsList:FC<PostsListProps> = ({typeOfSorting, searchQuerry}) => {
    const {posts, error, limit, loading, page, counter} = useTypedSelector(state => state.posts);
    const {fetchPosts, setPostsPage} = useActions();
    const [pages, setPages] = useState(counter/ limit)

    const [currentPosts, setCurrentPosts] = useState(posts)

    
    useEffect(() => {
        fetchPosts(page, limit);
        setCurrentPosts(posts)
    }, []);

    useEffect(() => {
    if (typeOfSorting == 'title'){
        fetchPosts(1, 99999);
    } else {
        fetchPosts(page, limit);
    }
    },[typeOfSorting])

    useEffect(() => {
        if (searchQuerry && searchQuerry.length > 0) {
            console.log('попа')
            setCurrentPosts( posts.filter( (post) => post.body.includes(searchQuerry!) )
        )
        }
        if (typeOfSorting == 'title') {
            setCurrentPosts(posts.sort((a, b) => a[typeOfSorting as keyof typeof a].toString().localeCompare(b[typeOfSorting as keyof typeof b].toString())));
        }else {
            setCurrentPosts(posts)
            setPages(counter/limit)    
        }
    }, [posts])

    useEffect(() => {
        fetchPosts(page, limit)
        setCurrentPosts(posts)
    }, [page])

   //Пагинация
    let active = page;
    let items = [];
    for (let i=1; i <= pages; i++) {
        items.push(
            <Pagination.Item key={i} active={i === page} onClick={() => setPostsPage(i)}>
            {i}
            </Pagination.Item>,
        );
    } 



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
    return (
        <div className="postsList">
            {currentPosts.map((post) => <Post key={post.id} post={post} /> 
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