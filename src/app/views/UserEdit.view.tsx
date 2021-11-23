import React, {useCallback, useEffect} from "react";
import {UserForm} from "../features/UserForm";
import {useUser} from "../../core/hooks/useUser";
import {Card, notification, Skeleton} from "antd";
import {User, UserService} from "cms-alganews-sdk";
import moment from 'moment';
import {Redirect, useHistory, useParams} from "react-router-dom";
import {NotFoundError} from "../components/NotFoundError";

interface UserEditViewProps {
}

export const UserEditView: React.FC<UserEditViewProps> = () => {
    const {id} = useParams<{ id: string }>();
    const {user, fetchUser, userNotFound} = useUser();
    const userId = Number(id);
    const history = useHistory();

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

    if (userNotFound) return (
        <Card>
            <NotFoundError
                title={'Usuário não encontrado'}
                actionDestination={'/users'}
                actionTitle={'Voltar para lista de usuários'}
            />
        </Card>
    );;

    if (!user) return <Skeleton/>

    async function handleUserUpdate(user: User.Input) {
       await UserService.updateExistingUser(userId, user).then(() => {
           history.push("/users");
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