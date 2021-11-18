import React, {useCallback, useEffect} from "react";
import {UserForm} from "../features/UserForm";
import {useUser} from "../../core/hooks/useUser";
import {Skeleton} from "antd";
import {User} from "cms-alganews-sdk";
import moment from 'moment';

interface UserEditViewProps {
}

export const UserEditView: React.FC<UserEditViewProps> = () => {
    const {user, fetchUser} = useUser();
    useEffect(() => {
        fetchUser(1);
    }, [fetchUser]);

    const transformUserData = useCallback((user: User.Detailed) => {
        return {
            ...user,
            createdAt: moment(user.createdAt),
            updatedAt: moment(user.updatedAt),
            birthdate: moment(user.birthdate)
        }
    }, [])

    if (!user) return <Skeleton />

    return (
        <>
            <UserForm user={transformUserData(user)} />
        </>
    );
};