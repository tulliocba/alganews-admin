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
import {Link, useHistory, useLocation} from "react-router-dom";

export const SideBar = () => {

    const history = useHistory();
    const location = useLocation();

    return (
        <Layout.Sider className="site-layout-background" width={200} breakpoint='lg' collapsedWidth='0'>
            <Menu
                mode="inline"
                defaultSelectedKeys={[location.pathname]}
                defaultOpenKeys={[location.pathname.split("/")[0]]}
                style={{height: "100%"}}
            >
                <Menu.Item key={'/'} icon={<HomeOutlined/>} onClick={() => history.push("/")}>Home</Menu.Item>

                <Menu.SubMenu key="users" icon={<UserOutlined/>} title="Usuários">
                    <Menu.Item
                        key="/users"
                        icon={<TableOutlined/>}
                        onClick={() => history.push("/users")}>
                        <Link to={'/users'}>Consulta</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/users/new"
                        icon={<PlusCircleOutlined/>}
                        onClick={() => history.push("/users/new")}>
                        <Link to={'/users/new'}>Cadastro</Link>
                    </Menu.Item>
                </Menu.SubMenu>

                <Menu.SubMenu key="payments" icon={<LaptopOutlined/>} title="Pagamentos">
                    <Menu.Item
                        key="/payments"
                        icon={<TableOutlined/>}
                        onClick={() => history.push("/payments")}>
                        <Link to={'/payments'}>Consulta</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/payments/new"
                        icon={<PlusCircleOutlined/>}
                        onClick={() => history.push("/payments/new")}>
                        <Link to={'/payments/new'}>Cadastro</Link>
                    </Menu.Item>
                </Menu.SubMenu>
                <Menu.SubMenu key="cash-flow" icon={<DiffOutlined/>} title="Fluxo de Caixa">
                    <Menu.Item
                        key="/cash-flow/expenses"
                        icon={<FallOutlined/>}
                        onClick={() => history.push("/cash-flow/expenses")}>
                        <Link to={"/cash-flow/expenses"}>Despesa</Link>
                    </Menu.Item>
                    <Menu.Item
                        key="/cash-flow/revenues"
                        icon={<RiseOutlined/>}
                        onClick={() => history.push("/cash-flow/revenues")}>
                        <Link to={"/cash-flow/revenues"}>Receita</Link>
                    </Menu.Item>
                </Menu.SubMenu>
            </Menu>
        </Layout.Sider>
    );
};
