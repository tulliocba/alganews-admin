import {ReactNode} from "react";
import {Layout} from "antd";
import {Header} from "./Header";
import {Content} from "./Content";
import "antd/dist/antd.css";
import "./Default.layout.css";
import {SideBar} from "./SideBar";
import {Breadcrumb} from "./Breadcrumb";

interface DefaultLayoutProps {
    children: ReactNode;
}

export const DefaultLayout = ({children}: DefaultLayoutProps) => {
    return (
        <Layout>
            <Header/>
            <Layout>
                <SideBar/>
                <Layout style={{padding: "0 24px 24px"}}>
                    <Breadcrumb/>
                    <Content>{children}</Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
