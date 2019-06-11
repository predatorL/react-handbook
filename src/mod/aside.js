import React from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu, Item, ItemGroup, Icon } = Menu;

class View extends React.Component {
    menus = [
        {
            key: 'lifecircle',
            title: '生命周期',
            items: [
                {
                    to: 'mod1',
                    title: '场景1'
                }
            ]
        },
        {
            key: 'hoc',
            title: 'HOC',
            items: [
                {
                    to: 'mod1',
                    title: '场景1'
                }
            ]
        },
        {
            key: 'hooks',
            title: 'hooks',
            items: [
                {
                    to: 'mod1',
                    title: '场景1'
                }
            ]
        },
        {
            key: 'auth',
            title: '权限校验',
            items: [
                {
                    to: 'mod1',
                    title: '场景1'
                }
            ]
        },
        {
            key: 'form',
            title: '表单',
            items: [
                {
                    to: 'mod1',
                    title: '场景1'
                }
            ]
        },
        {
            key: 'table',
            title: '表格',
            items: [
                {
                    to: 'mod1',
                    title: '基础'
                }
            ]
        },
        {
            key: 'chart',
            title: '图表',
            items: [
                {
                    to: 'mod1',
                    title: '折线'
                },
                {
                    to: 'mod2',
                    title: '饼图'
                },
                {
                    to: 'mod3',
                    title: '热力图'
                },
                {
                    to: 'mod4',
                    title: '地图'
                },
                {
                    to: 'mod5',
                    title: '深度图'
                },
                {
                    to: 'mod6',
                    title: '拓扑图'
                }
            ]
        },
        {
            key: 'bmap',
            title: '百度地图api',
            items: [
                {
                    to: 'mod1',
                    title: '基础'
                }
            ]
        },
        {
            key: 'web-storage',
            title: 'web-storage',
            items: [
                {
                    to: 'mod1',
                    title: '基础'
                }
            ]
        },
        {
            key: 'svg',
            title: 'svg',
            items: [
                {
                    to: 'mod1',
                    title: '基础'
                }
            ]
        },
        {
            key: 'canvas',
            title: 'canvas',
            items: [
                {
                    to: 'mod1',
                    title: '基础'
                }
            ]
        },
        {
            key: 'drag',
            title: '拖拽',
            items: [
                {
                    to: 'mod1',
                    title: '基础'
                }
            ]
        },
        {
            key: 'css3',
            title: 'css3',
            items: [
                {
                    to: 'mod1',
                    title: 'grid'
                }
            ]
        }
    ];

    render() {
        return (
            <aside className="page-aside">
                <Menu mode="inline" theme="dark">
                    {
                        this.menus.map(menu => {
                            return (
                                <SubMenu key={menu.key} title={menu.title} >
                                    {
                                        menu.items.map((item, i) => {
                                            return (
                                                <Menu.Item key={`${menu.key}-i`}>
                                                    <Link to={`/${menu.key}/${item.to}`}>{item.title}</Link>
                                                </Menu.Item>
                                            )
                                        })
                                    }
                                </SubMenu>
                            )
                        })
                    }

                </Menu>
            </aside>
        );
    }
}

export default View;
