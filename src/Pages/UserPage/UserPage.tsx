import React, { FC, RefObject} from "react";
import { useParams } from "react-router-dom";
import './UserPage.scss'
import { UserPageParams } from "../../types/componentsTypes";

import Menu from '../../components/Menu/Menu';
import PostsList from "../../components/PostsList/PostsList";
import UserInfo from "../../components/UserInfo/UserInfo";


const UserPage:FC = () => {
    const params = useParams<UserPageParams>()
    const postListBlock = React.useRef() as RefObject<HTMLDivElement>
    
    return (
        <div className="userPage">

            <div className="container userPage__container">

                <UserInfo userId={params.id!} hiddenBlock={postListBlock}/>

                <div className="userPage__postListBlock" ref={postListBlock}>
                    <h2 className="userPage__heading">Список постов пользователя:</h2>
                    <PostsList userId={Number(params.id!)}/>    
                </div>
                
            </div>

            <Menu /> 
            
        </div>
    )
}
export default UserPage;