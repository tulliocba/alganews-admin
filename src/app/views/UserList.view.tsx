import React from "react";
import {Col, Row} from "antd";
import {UserList} from "../features/UserList.feature";

interface UserListViewProps {
}

export const UserListView: React.FC<UserListViewProps> = () => {
    return (
        <Row>
            <Col xs={24}>
                <UserList />
            </Col>
        </Row>
    );
};