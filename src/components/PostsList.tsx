import React, { FC, useEffect, useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useAction";
import Spinner from 'react-bootstrap/Spinner';

const CommentsList:FC = () => {
    const {posts, error, limit, loading, page, counter} = useTypedSelector(state => state.posts);
    const {comments} = useTypedSelector(state => state.comments);
    const {fetchPosts, setPostsPage} = useActions();
    const {fetchComments} = useActions();

    const [pages, setPages] = useState([0])

    useEffect(() => {
        fetchPosts(page, limit);
        fetchComments()
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
        <div>
            {posts.map((post) => 
                <div key={post.id}>
                    <p>{post.id} - {post.title}</p>
                    <div>
                        {comments.filter( comment => comment.postId == 1).map(
                            (comment) => 
                            <div key={comment.id}>{comment.body}</div>
                        )}
                    </div>
                </div>
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

export default CommentsList;