import React, {useCallback, useEffect} from "react";
import {UserForm} from "../features/UserForm";
import {useUser} from "../../core/hooks/useUser";
import {Card, notification, Skeleton} from "antd";
import {User, UserService} from "cms-alganews-sdk";
import moment from 'moment';
import {Redirect, useParams} from "react-router-dom";

interface UserEditViewProps {
}

export const UserEditView: React.FC<UserEditViewProps> = () => {
    const {id} = useParams<{ id: string }>();
    const {user, fetchUser, userNotFound} = useUser();
    const userId = Number(id);

    useEffect(() => {
        if (!isNaN(userId)) fetchUser(userId);
    }, [fetchUser, userId]);

    const transformUserData = useCallback((user: User.Detailed) => {
        return {
            ...user,
            createdAt: moment(user.createdAt),
            updatedAt: moment(user.updatedAt),
            birthdate: moment(user.birthdate)
        }
    }, []);

    if (isNaN(userId)) return <Redirect to={'/users'}/>;

    if (userNotFound) return <Card>Usuário não encontrado!</Card>;

    if (!user) return <Skeleton/>

    function handleUserUpdate(user: User.Input) {
        UserService.updateExistingUser(userId, user).then(() => {
            notification.success({
                message: "Usuário alterado com sucesso!"
            })
        })
    }

    return (
        <>
            <UserForm onUpdate={handleUserUpdate} user={transformUserData(user)}/>
        </>
    );
};