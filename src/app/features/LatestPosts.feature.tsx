import {useLatestPost} from "../../core/hooks/useLatestPost";
import {useEffect} from "react";
import {Avatar, Card, Col, Row} from "antd";

export const LatestPosts = () => {
    const {posts, fetchPosts} = useLatestPost();

    useEffect(() => {
        fetchPosts();
    }, [fetchPosts])

    return <Row gutter={16}>
        {posts?.map(post => (
            <Col xs={24} md={8} key={post.id}>
                <Card cover={<img alt={post.title} src={post.imageUrls.small} style={{
                    height: 168,
                    objectFit: 'cover'
                }}/>}>
                    <Card.Meta title={post.title} avatar={<Avatar src={post.editor.avatarUrls.small}/>}/>
                </Card>
            </Col>
        ))}
    </Row>
}