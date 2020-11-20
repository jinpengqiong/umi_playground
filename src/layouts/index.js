import { connect } from 'dva';
import { Layout, Menu, Breadcrumb } from 'antd';
import styles from './index.less';
import {
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout = props => {
  const { list, dispatch } = props
  const { isCollapsed } = list;
  const handleCollapseSwitch = collapsed => {
    dispatch({
      type: 'list/switchMenus',
      payload: {
        isCollapsed: collapsed,
      },
    });
  };
  const logoStyle = isCollapsed ? styles.logo_collapsed : styles.logo;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={handleCollapseSwitch}
        // collapsedWidth={60}
      >
        <div className={logoStyle}>{isCollapsed ? '' : 'VXI QA Automation'}</div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            List
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            Details
          </Menu.Item>
          {/* <SubMenu key="sub1" title="User" icon={<UserOutlined />}>
            <Menu.Item key="3">Details</Menu.Item>
          </SubMenu> */}
          {/* <SubMenu key="sub2" title="Team" icon={<TeamOutlined />}>
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu> */}
          {/* <Menu.Item key="9" icon={<FileOutlined />}>
            Details
          </Menu.Item> */}
        </Menu>
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header className={styles.siteLayoutHeaderBackground} style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div
            className={styles.siteLayoutContentBackground}
            style={{ padding: 24, minHeight: 360 }}
          >
            {props.children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>VXI QA Automation</Footer>
      </Layout>
    </Layout>
  );
};


export default connect(({ list }) => ({
  list,
}))(BasicLayout);
