import {Avatar, Layout, Row} from "antd";
import logo from "../../../assets/logo.svg";

export const Header = () => {
    return (
        <Layout.Header className="header">
            <Row
                justify={"space-between"}
                style={
                    {
                        height: '100%',
                        maxWidth: 1190,
                        margin: '0 auto',
                    }
                }
                align={"middle"}>
                <img src={logo} alt={'Alganew-Admin'}/>
                <Avatar/>
            </Row>
        </Layout.Header>
    );
};
