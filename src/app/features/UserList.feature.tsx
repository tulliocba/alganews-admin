import React, {useEffect} from "react";
import {useUsers} from "../../core/hooks/userUsers";
import {Avatar, Button, Space, Switch, Table, Tag, Typography} from "antd";
import {EditOutlined, EyeOutlined} from "@ant-design/icons";
import {User} from "cms-alganews-sdk";
import {format} from "date-fns";

interface UserListProps {
}

export const UserList: React.FC<UserListProps> = () => {

    const {users, fetchUsers, toggleUserStatus} = useUsers();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const translateRole = (role: string) => {
        switch (role) {
            case 'EDITOR':
                return <Tag color="blue">Editor</Tag>
            case 'MANAGER':
                return <Tag color={"red"}>Gerente</Tag>
            case 'ASSISTANT':
                return <Tag color={"blue"}>Assistente</Tag>
            default:
                return <Tag>{role}</Tag>
        }
    }

    return (
        <>
            <Table<User.Summary> dataSource={users} columns={[
                {
                    dataIndex: 'name',
                    title: 'Nome',
                    render(name: string, row) {
                        return <Space>
                            <Avatar src={row.avatarUrls.small} size={"small"}/>
                            <Typography.Text ellipsis style={{maxWidth: '120px'}}>{name}</Typography.Text>
                        </Space>
                    }
                },
                {
                    dataIndex: 'email',
                    title: 'E-mail'
                },
                {
                    dataIndex: 'role',
                    title: 'Perfil',
                    align: 'center',
                    render(role) {
                        return translateRole(role);
                    }
                },
                {
                    dataIndex: 'createdAt',
                    title: 'Criação',
                    align: 'center',
                    render(createdAt: string) {
                        return format(new Date(createdAt), 'dd/MM/yyyy');
                    }
                },
                {
                    dataIndex: 'active',
                    title: 'Ativo',
                    align: 'center',
                    render(active: boolean, user) {
                        return <Switch defaultChecked={active} onChange={() => {
                            toggleUserStatus(user);
                        }
                        }/>;
                    }

                },
                {
                    dataIndex: 'id',
                    title: 'Ações',
                    align: 'center',
                    render() {
                        return <Space size={4}>
                            <Button size={"small"} icon={<EyeOutlined/>}/>
                            <Button size={"small"} icon={<EditOutlined/>}/>
                        </Space>
                    }
                },

            ]}/>
        </>
    );
};