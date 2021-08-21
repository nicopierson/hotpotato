import { Menu, Dropdown } from 'antd';
import './DropDownMenu.less';
import './DropDownMenu.css'

// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// import 'antd/lib/button/style';

import './DropDownMenu.css'
import React from 'react'

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="https://www.antgroup.com">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="https://www.aliyun.com">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const DropDownMenu = () => {
  return (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link most-recent--color" onClick={e => e.preventDefault()}>
          Most Recent <i class="fas fa-caret-down"></i>
        </a>
      </Dropdown>
    </>
  )
}
export default DropDownMenu
