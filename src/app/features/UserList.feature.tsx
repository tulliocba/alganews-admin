import React, {useEffect} from "react";
import {useUsers} from "../../core/hooks/userUsers";
import {Avatar, Button, Card, Descriptions, Input, Space, Switch, Table, Tag} from "antd";
import {EditOutlined, EyeOutlined, SearchOutlined} from "@ant-design/icons";
import {User} from "cms-alganews-sdk";
import {format} from "date-fns";
import {ColumnProps} from "antd/es/table";
import {Link} from "react-router-dom";

interface UserListProps {
}

export const UserList: React.FC<UserListProps> = () => {

    const {users, fetchUsers, toggleUserStatus, fetching} = useUsers();

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    const getColumnsSearchProps = (
        dataIndex: keyof User.Summary,
        displayName?: string
    ): ColumnProps<User.Summary> => ({
        filterDropdown: ({selectedKeys, setSelectedKeys, confirm, clearFilters}) => (<Card>
            <Space direction={"vertical"}>
                <Input
                    value={selectedKeys[0]}
                    placeholder={`Buscar ${displayName || dataIndex}`}
                    onChange={(e) => {
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }}
                    onPressEnter={() => confirm()}
                />
                <Space>
                    <Button
                        type={'primary'}
                        size={"small"}
                        style={{width: 90}}
                        onClick={() => confirm()}
                        icon={<SearchOutlined/>}>
                        Buscar
                    </Button>
                    <Button size={"small"} style={{width: 90}} onClick={clearFilters}>
                        Limpar
                    </Button>
                </Space>
            </Space>
        </Card>),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined
                style={{color: filtered ? '#0099ff' : undefined}}/>
        ),
        // @ts-ignore
        onFilter: (value, record) => {
            return record[dataIndex] ? record[dataIndex].toString().toLowerCase().includes((value as string).toLowerCase())
                : ''
        }
    });

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
            <Table<User.Summary> rowKey={'id'} pagination={{pageSize: 10}} loading={fetching} dataSource={users} columns={[
                {
                    title: 'Usuários',
                    responsive: ['xs'],
                    render(user: User.Summary) {
                        return <Descriptions column={1} size={'small'}>
                            <Descriptions.Item label={'Nome'}
                                               contentStyle={{justifyContent: 'space-between', alignItems: 'center'}}>
                                {user.name}
                                <Avatar src={user.avatarUrls.small} size={"small"}/>
                            </Descriptions.Item>
                            <Descriptions.Item label={'E-mail'}>
                                {user.email}
                            </Descriptions.Item>
                            <Descriptions.Item label={'Criação'}>
                                {format(new Date(user.createdAt), 'dd/MM/yyyy')}
                            </Descriptions.Item>
                            <Descriptions.Item label={'Perfil'}>
                                {translateRole(user.role)}
                            </Descriptions.Item>
                            <Descriptions.Item label={'Ações'}>
                                <Space size={4}>
                                    <Button size={"small"} icon={<EyeOutlined/>}/>
                                    <Button size={"small"} icon={<EditOutlined/>}/>
                                </Space>
                            </Descriptions.Item>
                        </Descriptions>
                    }
                },
                {
                    dataIndex: 'avatarUrls',
                    title: '',
                    width: 48,
                    fixed: 'left',
                    render(avatarUrls: User.Summary['avatarUrls']) {
                        return <Avatar src={avatarUrls.small} size={"small"}/>
                    },
                    responsive: ['sm']
                },
                {
                    dataIndex: 'name',
                    title: 'Nome',
                    ellipsis: true,
                    width: 200,
                    responsive: ['sm']
                },
                {
                    dataIndex: 'email',
                    title: 'E-mail',
                    width: 250,
                    ...getColumnsSearchProps('email', 'E-mail'),
                    responsive: ['sm']
                },
                {
                    dataIndex: 'role',
                    title: 'Perfil',
                    align: 'center',
                    render(role) {
                        return translateRole(role);
                    },
                    width: 100,
                    responsive: ['sm']
                },
                {
                    dataIndex: 'createdAt',
                    title: 'Criação',
                    align: 'center',
                    render(createdAt: string) {
                        return format(new Date(createdAt), 'dd/MM/yyyy');
                    },
                    sorter(a, b) {
                        return new Date(a.createdAt) > new Date(b.createdAt) ? 1 : -1;
                    },
                    width: 120,
                    responsive: ['sm']
                },
                {
                    dataIndex: 'active',
                    title: 'Ativo',
                    align: 'center',
                    render(active: boolean, user) {
                        return <Switch checked={active} onChange={() => {
                            toggleUserStatus(user);
                        }
                        }/>;
                    },
                    width: 100,
                    responsive: ['sm']

                },
                {
                    dataIndex: 'id',
                    title: 'Ações',
                    align: 'center',
                    render(id: number) {
                        return <Space size={4}>
                            <Link to={`/users/${id}`}>
                                <Button size={"small"} icon={<EyeOutlined/>}/>
                            </Link>
                            <Link to={`/users/edit/${id}`}>
                                <Button size={"small"} icon={<EditOutlined/>}/>
                            </Link>
                        </Space>
                    },
                    width: 100,
                    responsive: ['sm']
                },

            ]}/>
        </>
    );
};