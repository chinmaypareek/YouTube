import { useDispatch } from "react-redux";
import {
  HAMBURGER_MENU_ICON,
  USERICON,
  YOUTUBE_LOGO,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";

function Head() {
  const dispatch = useDispatch();

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  return (
    <div className="grid grid-flow-col p-5 m-2 shadow-lg">
      <div className="flex col-span-1">
        <img
          onClick={toggleMenuHandler}
          className="h-8 mx-2 cursor-pointer"
          alt="menu"
          src={HAMBURGER_MENU_ICON}
        />
        <img className="h-8" alt="Youtube-logo" src={YOUTUBE_LOGO} />
      </div>
      <div className="col-span-10 px-52">
        <input
          className="w-1/2 border border-gray-400 p-2 rounded-l-full"
          type="text"
        />
        <button className="border border-gray-400 p-2 px-4 rounded-r-full bg-gray-100">
          Search
        </button>
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="usericon" src={USERICON} />
      </div>
    </div>
  );
}

export default Head;
