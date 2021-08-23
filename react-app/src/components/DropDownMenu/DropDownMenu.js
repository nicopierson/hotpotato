import { Menu} from 'antd';
import Dropdown from 'react-dropdown';
// import Menu
import 'react-dropdown/style.css';
import './DropDownMenu.less';
import './DropDownMenu.css'
// import { DownOutlined } from '@ant-design/icons';
// import 'antd/lib/button/style';
import './DropDownMenu.css'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllRecipesUserFollowsByNew } from '../../store/recipe';
import { getAllRecipesUserFollowsByTrending } from '../../store/recipe';
import { getAllRecipesForGivenUser } from '../../store/recipe';


const DropDownMenu = ({user_id}) => {

  const [menuText, setMenuText] = useState('Most Recent')
  const dispatch = useDispatch()

  // on click, make query, and update the "users_recipes" field with query
  const update_recipes_most_recent = ()=>{
    dispatch(getAllRecipesUserFollowsByNew(user_id))
    setMenuText("Most Recent")
  }

  const update_recipes_by_trending = ()=>{
    dispatch(getAllRecipesUserFollowsByTrending(user_id))
    setMenuText("Trending")
  }

  const update_recipes_by_surprise = ()=>{
    dispatch(getAllRecipesForGivenUser(user_id))
    setMenuText("Surprise Me")
  }

  const options = (
    [
    <li onClick={() => update_recipes_most_recent()}>Most Recent</li>,
    <li onClick={() => update_recipes_by_trending()}>Trending</li>,
    <li onClick={() => update_recipes_by_surprise()}>Surprise Me</li>
  ]
  );

  const defaultOption = options[0];

  // const menu = (
  //   // <Menu>
  //   //   <Menu.Item key="0" onClick={()=>update_recipes_most_recent()}>
  //   //     Most Recent
  //   //   </Menu.Item>
  //   //   <Menu.Item key="1" onClick={()=>update_recipes_by_trending()}>
  //   //     Trending
  //   //   </Menu.Item>
  //   //   <Menu.Divider />
  //   //   <Menu.Item key="3" onClick={()=>update_recipes_by_surprise()} >Surprise Me</Menu.Item>
  //   // </Menu>
  // );


  return (
    <>
      {/* <Dropdown overlay={menu} trigger={['click']}>
        <a className="ant-dropdown-link most-recent--color" onClick={e => e.preventDefault()}>
          {menuText || "Sort Me"}  <DownOutlined />
        </a>
      </Dropdown> */}
      <Dropdown options={options} onChange={Dropdown._onSelect} value={defaultOption} placeholder="Select an option" />;
      {menuText || "Sort Me"}
    </>
  )
}
export default DropDownMenu
