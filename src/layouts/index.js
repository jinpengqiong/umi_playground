import { connect } from 'dva';
import { Layout, Menu, Breadcrumb } from 'antd';
import styles from './index.less';
import {
  PieChartOutlined,
  UserOutlined,
} from '@ant-design/icons';
const { Header, Content, Footer, Sider } = Layout;
// const { SubMenu } = Menu;

const BasicLayout = props => {
  const { list, dispatch, history } = props;
  const { isCollapsed } = list;
  const handleCollapseSwitch = collapsed => {
    dispatch({
      type: 'list/switchMenus',
      payload: {
        isCollapsed: collapsed,
      },
    });
  };
  const handleMenuClick = ({ item, key, keyPath, domEvent }) => {
    history.push(key);
  };
  const logoStyle = isCollapsed ? styles.logo_collapsed : styles.logo;
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={isCollapsed}
        onCollapse={handleCollapseSwitch}
        // collapsedWidth={50}
      >
        <div className={logoStyle}>{isCollapsed ? '' : 'VXI QA Automation'}</div>
        <Menu
          theme="dark"
          defaultSelectedKeys={['/']}
          selectedKeys={[history.location.pathname]}
          mode="inline"
          onClick={handleMenuClick}
        >
          <Menu.Item key="/" icon={<PieChartOutlined />}>
            Call Analytics list
          </Menu.Item>
          {history.location.pathname === '/details' && (
            <Menu.Item key="/details" icon={<UserOutlined />}>
              Details
            </Menu.Item>
          )}

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
          <Breadcrumb style={{ margin: '10px 0' }}>
            {history.location.pathname === '/' ? (
              <div/>
            ) : (
              history.location.pathname.split('/').filter(i => i).map(item => {
                return (
                  <Breadcrumb.Item href={'/' + item}>
                    {item === '' ? 'Call Analytics list' : item}
                  </Breadcrumb.Item>
                );
              })
            )}
          </Breadcrumb>
          <div
            className={styles.siteLayoutContentBackground}
            style={{ padding: 10, minHeight: 360 }}
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
