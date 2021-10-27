import {Col, Divider, Row, Space, Typography} from "antd";
import {CompanyMetrics} from "../features/CompanyMetrics.feature";
import {LatestPosts} from "../features/LatestPosts.feature";
import React from "react";

export const HomeView = () => {
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
            <Divider/>
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