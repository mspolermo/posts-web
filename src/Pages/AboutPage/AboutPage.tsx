import React, { FC, useEffect } from "react";
import './AboutPage.scss'
import { useTypedSelector } from "../../hooks/useTypedSelector";
import { useActions } from "../../hooks/useAction";
import Menu from '../../components/Menu/Menu';

const AboutPage:FC = () => {
    const {users, loading, error} = useTypedSelector( state => state.user);
    const {fetchUsers} = useActions()

    useEffect( () => {
        fetchUsers()
    },[])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    };

    if (error) {
        return <h1>{error}</h1>
    };

    return (
        <div className="aboutPage">
            <div className="container aboutPage__container">
                {users.map(user => 
                    <div key={user.id}>{user.name}</div>
                )}
            </div>
            <Menu /> 
        </div>
    )
}
export default AboutPage;