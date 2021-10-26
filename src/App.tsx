import {Col, Divider, Row, Space, Typography} from "antd";
import React from "react";
import {CompanyMetrics} from "./app/features/CompanyMetrics.feature";
import {LatestPosts} from "./app/features/LatestPosts.feature";

function App() {
    return (
        <Space direction={'vertical'} size={'small'} style={{maxWidth: '100%'}}>
            <Row>
                <Col span={24}>
                    <Typography.Title level={2}>
                        Olá, Jose Souza
                    </Typography.Title>
                    <Typography.Paragraph>
                        Este é o resumo da empresa nos últimos doze meses
                    </Typography.Paragraph>
                </Col>
                <Col span={24}>
                    <CompanyMetrics/>
                </Col>
            </Row>
            <Divider />
            <Row>
                <Col span={24}>
                    <Typography.Title level={3}>
                        últimos posts
                    </Typography.Title>
                </Col>
                <Col span={24}>
                    <LatestPosts/>
                </Col>
            </Row>
        </Space>
    );
}

export default App;
