import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu, Item, ItemGroup, Icon } = Menu;

class View extends React.Component {
    render() {
        return (
            <aside className="page-aside">
                <Menu mode="inline" theme="dark" >
                    <SubMenu key="auth" title="权限校验" >
                        <Menu.Item key="auth-1">
                            <Link to="/auth/mod1">场景1</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="form" title="表单" >
                        <Menu.Item key="form-1">
                            <Link to="/form/mod1">场景1</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="table" title="表格" >
                        <Menu.Item key="table-1">
                            <Link to="/table/mod1">基础</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="chart" title="图表" >
                        <Menu.Item key="chart-1">
                            <Link to="/chart/mod1">折线</Link>
                            <Link to="/chart/mod1">饼图</Link>
                            <Link to="/chart/mod1">热力图</Link>
                            <Link to="/chart/mod1">地图</Link>
                            <Link to="/chart/mod1">K线/深度图</Link>
                            <Link to="/chart/mod1">拓扑图</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="bmap" title="百度地图api" >
                        <Menu.Item key="chart-1">
                            <Link to="/bmap/mod1">基础</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="web-storage" title="web-storage" >
                        <Menu.Item key="web-storage-1">
                            <Link to="/web-storage/mod1">基础</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="svg" title="svg" >
                        <Menu.Item key="svg-1">
                            <Link to="/svg/mod1">基础</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="canvas" title="canvas" >
                        <Menu.Item key="canvas-1">
                            <Link to="/canvas/mod1">基础</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="css3" title="css3" >
                        <Menu.Item key="css3-1">
                            <Link to="/css3/mod1">flex/grid</Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </aside>
        );
    }
}

export default View;
