import { connect } from 'dva';
import { Layout, Menu, Breadcrumb } from 'antd';
import styles from './index.less';
import { formatMessage } from 'umi-plugin-locale';
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const BasicLayout = props => {
  const { list, dispatch } = props
  const { isCollapsed } = list;
  const handleCollapseSwitch = collapsed => {
    console.log('collapsed', collapsed)
    dispatch({
      type: 'list/switchMenus',
      payload: {
        isCollapsed: collapsed,
      },
    });
  };
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible collapsed={isCollapsed} onCollapse={handleCollapseSwitch}>
        <div className={styles.logo} />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1">Option 1</Menu.Item>
          <Menu.Item key="2">Option 2</Menu.Item>
          <SubMenu key="sub1" title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">Files</Menu.Item>
        </Menu>
      </Sider>
      <Layout className={styles.siteLayout}>
        <Header className={styles.siteLayoutBackground} style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className={styles.siteLayoutBackground} style={{ padding: 24, minHeight: 360 }}>
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
