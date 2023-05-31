import React, { FC, useEffect, useState } from "react";
import './Post.scss'
import { IPost } from "../../types/posts";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import Comment from "../Comment/Comment";
import CommentsList from "../CommentsList/CommentsList";


interface PostProps {
    post: IPost
}
const Post:FC<PostProps> = ({post}) => {

    function openCommentsBlock (e:React.MouseEvent<HTMLButtonElement>) {
        e.currentTarget.parentElement?.children[2].classList.toggle('post__commentsBlock_active')
    }

    return(
            <div>
                <p>{post.id} - {post.title}</p>
                <button className="post__btn" onClick={openCommentsBlock}>Комментарии</button>
                <div className="post__commentsBlock" >
                    <CommentsList postId={post.id} />
                </div>
            </div>
    )
}
export default Post;
