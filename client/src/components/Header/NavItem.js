import { BiHomeAlt, BiChat, BiCategoryAlt } from "react-icons/bi";
import { TbWorld, TbAlbum, TbMessageReport } from "react-icons/tb";
const NavItem = (props) => {
  return (
    <div className="NavItem">
      <span className="icon">{
        {
            '홈':<BiHomeAlt />,
            '프로젝트':<TbAlbum />,
            '강의':<TbWorld />,
            '채팅':<BiChat />,
            '고객지원':<TbMessageReport />,
            '설정':<BiCategoryAlt />,
        }[props.value]  
      }</span>
      {props.value}
    </div>
  );
}

export default NavItem;
