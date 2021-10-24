import {Layout} from "antd";
import {ReactNode} from "react";

interface ContentProps {
    children: ReactNode;
}

export const Content = ({children}: ContentProps) => {
    return (
        <Layout.Content style={{padding: "0 24px", minHeight: 280}}>
            {children}
        </Layout.Content>
    );
};
