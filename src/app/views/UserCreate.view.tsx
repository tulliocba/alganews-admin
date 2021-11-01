import React from "react";
import {UserForm} from "../features/UserForm";

interface UserCreateViewProps {
}

export const UserCreateView: React.FC<UserCreateViewProps> = () => {
    return (
        <>
            <UserForm/>
        </>
    );
};