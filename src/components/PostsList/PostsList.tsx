import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import './PostsList.scss';
import { PostsListProps } from "../../types/componentsTypes";

import Post from "../Post/Post";
import Spinner from 'react-bootstrap/Spinner';
import Alert from 'react-bootstrap/Alert';
import Pagination from 'react-bootstrap/Pagination';

const PostsList:FC<PostsListProps> = ({typeOfSorting, searchQuerry , setTypeOfSorting, userId}) => {
    
    //Логика поиска, сортировки и отрисовки постов
    const {posts, error, limit, loading, page, counter} = useTypedSelector(state => state.posts);
    const {fetchPosts, setPostsPage} = useActions();
    const [pages, setPages] = useState(counter/ limit);
    const [currentPosts, setCurrentPosts] = useState(posts);

    useEffect(() => {
        if ( userId && userId > 0) {
            fetchPosts(1, 99999);
        } else {
            fetchPosts(page, limit);
        }
    }, []);

    useEffect(() => {
        if ( userId && userId > 0) {return};

        if (typeOfSorting == 'title'){
            fetchPosts(1, 99999);
        } else {
            fetchPosts(page, limit);
        };
    },[typeOfSorting])

    useEffect(() => {
        //Условие для отрисовки списка постов на странице пользователя
        if ( userId && userId > 0) {
            setCurrentPosts( posts.filter( (post) => post.userId == userId ));
            return;
        };
        
        //Условия для функционирования поиска, сортировки и отрисовки
        if (searchQuerry && searchQuerry.length > 0) {
            setCurrentPosts( posts.filter( (post) => post.title.includes(searchQuerry!) ));
            return;
        };

        if (typeOfSorting == 'title') {
            setCurrentPosts(posts.sort((a, b) => a[typeOfSorting as keyof typeof a].toString().localeCompare(b[typeOfSorting as keyof typeof b].toString())));
        }else {
            setCurrentPosts(posts)
            setPages(counter/limit)    
        };

    }, [posts, searchQuerry])

    useEffect(() => {
        if ( userId && userId > 0) {return};

        if ( searchQuerry && searchQuerry.length > 0) {
            fetchPosts(1, 99999)
        } else {
            fetchPosts(page, limit)
            setTypeOfSorting?.('userId')
        };
    }, [searchQuerry])

    useEffect(() => {
        if ( userId && userId > 0) {return};

        fetchPosts(page, limit);
        setCurrentPosts(posts);

    }, [page])

   //Пагинация
    let items = [];
    for (let i=1; i <= pages; i++) {
        items.push(
            <Pagination.Item key={i} active={i === page} onClick={() => setPostsPage(i)}>
            {i}
            </Pagination.Item>,
        );
    }; 



    if (loading) {
        return (
            <Spinner animation="border" role="status" className="postsList__loading">
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
            { ( (searchQuerry =='') && (typeOfSorting !== 'title') ) &&
                <Pagination className="postsList__pagination">{items}</Pagination>
            }
        </div>
    );
};

export default PostsList;