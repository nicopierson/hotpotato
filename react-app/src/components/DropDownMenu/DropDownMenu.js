import { Menu, Dropdown } from 'antd';
import './DropDownMenu.less';
import './DropDownMenu.css'
import { DownOutlined } from '@ant-design/icons';
// import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

// import 'antd/lib/button/style';

import './DropDownMenu.css'
import React, {useState} from 'react'




const DropDownMenu = () => {

  let word = "menu bar"
  const [menuText, setMenuText] = useState('')

  const menu = (
    <Menu>
      <Menu.Item key="0" onClick={()=> setMenuText("Most Recent") }>
        <div>Most Recent</div>
      </Menu.Item>
      <Menu.Item key="1" onClick={()=> setMenuText("Trending") }>
        <div>Trending</div>
      </Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3" onClick={()=> setMenuText("Surprise Me") } >Surprise Me</Menu.Item>
    </Menu>
  );


  return (
    <>
      <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link most-recent--color" onClick={e => e.preventDefault()}>
          {menuText || "Sort Me"}  <DownOutlined />
        </a>
      </Dropdown>
    </>
  )
}
export default DropDownMenu
