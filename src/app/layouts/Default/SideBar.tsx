import {Layout, Menu} from "antd";
import {
    DiffOutlined,
    FallOutlined,
    HomeOutlined,
    LaptopOutlined,
    PlusCircleOutlined,
    RiseOutlined,
    TableOutlined,
    UserOutlined
} from "@ant-design/icons";

export const SideBar = () => {
    return (
        <Layout.Sider className="site-layout-background" width={200} breakpoint='lg' collapsedWidth='0'>
            <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{height: "100%"}}
            >
                <Menu.Item key={0} icon={<HomeOutlined/>}>Home</Menu.Item>

                <Menu.SubMenu key="sub1" icon={<UserOutlined/>} title="Usuários">
                    <Menu.Item key="1" icon={<TableOutlined/>}>Consulta</Menu.Item>
                    <Menu.Item key="2" icon={<PlusCircleOutlined/>}>Cadastro</Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="sub2" icon={<LaptopOutlined/>} title="Pagamentos">
                    <Menu.Item key="3" icon={<TableOutlined/>}>Consulta</Menu.Item>
                    <Menu.Item key="4" icon={<PlusCircleOutlined/>}>Cadastro</Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="sub3" icon={<DiffOutlined/>} title="Fluxo de Caixa">
                    <Menu.Item key="5" icon={<FallOutlined/>}>Despesa</Menu.Item>
                    <Menu.Item key="6" icon={<RiseOutlined/>}>Receita</Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    );
};
