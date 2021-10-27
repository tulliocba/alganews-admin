import {ReactNode} from "react";
import {Layout} from "antd";
import {Header} from "./Header";
import {Content} from "./Content";
import {SideBar} from "./SideBar";
import {Breadcrumb} from "./Breadcrumb";

interface DefaultLayoutProps {
    children: ReactNode;
}

export const DefaultLayout = ({children}: DefaultLayoutProps) => {
    return (
        <Layout>
            <Header/>
            <Layout id={'PageLayout'}>
                <SideBar/>
                <Layout style={{padding: "0 24px 24px"}}>
                    <Breadcrumb/>
                    <Content>{children}</Content>
                </Layout>
            </Layout>
        </Layout>
    );
};
