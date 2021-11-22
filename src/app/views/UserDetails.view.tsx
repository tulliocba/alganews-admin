import {
    Button,
    Card,
    Col,
    Row,
    Skeleton,
    Space,
    Typography,
    Progress,
    Descriptions,
    Divider,
} from 'antd';
import Avatar from 'antd/lib/avatar/avatar';
import { useEffect } from 'react';
import {
    Link,
    Redirect,
    useParams,
} from 'react-router-dom';
import {useUser} from "../../core/hooks/useUser";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

interface UserDetailsViewProps {
}

export const UserDetailsView: React.FC<UserDetailsViewProps> = () => {
    const {id} = useParams<{ id: string }>();
    const { lg } = useBreakpoint();
    const {user, fetchUser, userNotFound} = useUser();
    const userId = Number(id);

    useEffect(() => {
        if (!isNaN(userId)) fetchUser(userId);
    }, [fetchUser, userId]);

    if (isNaN(userId)) return <Redirect to={'/users'}/>;

    if (userNotFound) return <Card>Usuário não encontrado!</Card>;

    if (!user) return <Skeleton/>

    return (
        <Row gutter={24}>
            <Col xs={24} lg={4}>
                <Row justify={'center'}>
                    <Avatar size={120} src={user.avatarUrls.small} />
                </Row>
            </Col>
            <Col xs={24} lg={20}>
                <Space
                    style={{ width: '100%' }}
                    direction={'vertical'}
                    align={lg ? 'start' : 'center'}
                >
                    <Typography.Title level={2}>
                        {user.name}
                    </Typography.Title>
                    <Typography.Paragraph
                        style={{
                            textAlign: lg ? 'left' : 'center',
                        }}
                        ellipsis={{
                            rows: 2,
                        }}
                    >
                        {user.bio}
                    </Typography.Paragraph>
                    <Space>
                        <Link to={`/users/edit/${user.id}`}>
                            <Button type={'primary'}>
                                Editar perfil
                            </Button>
                        </Link>
                        <Button type={'primary'}>Remover</Button>
                    </Space>
                </Space>
            </Col>
            <Divider />
            <Col xs={24} lg={12}>
                <Space
                    direction='vertical'
                    style={{ width: '100%' }}
                >
                    {user.skills?.map((skill) => (
                        <div key={skill.name}>
                            <Typography.Text>
                                {skill.name}
                            </Typography.Text>
                            <Progress
                                percent={skill.percentage}
                                success={{ percent: 0 }}
                            />
                        </div>
                    ))}
                </Space>
            </Col>
            <Col xs={24} lg={12}>
                <Descriptions column={1} bordered size={'small'}>
                    <Descriptions.Item label={'País'}>
                        {user.location.country}
                    </Descriptions.Item>
                    <Descriptions.Item label={'Estado'}>
                        {user.location.state}
                    </Descriptions.Item>
                    <Descriptions.Item label={'Cidade'}>
                        {user.location.city}
                    </Descriptions.Item>
                    <Descriptions.Item label={'Telefone'}>
                        {user.phone}
                    </Descriptions.Item>
                </Descriptions>
            </Col>
        </Row>
    );
};