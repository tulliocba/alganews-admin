import {Col, Row, Typography} from "antd";
import React from "react";
import {CompanyMetrics} from "./app/features/CompanyMetrics.feature";

function App() {
    return (
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
    );
}

export default App;
