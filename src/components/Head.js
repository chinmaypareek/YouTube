import { useDispatch, useSelector } from "react-redux";
import {
  HAMBURGER_MENU_ICON,
  USERICON,
  YOUTUBE_LOGO,
  YOUTUBE_SEARCH_API,
} from "../utils/constants";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import { cacheResults } from "../utils/searchSlice";

function Head() {
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  // Make an API call after every Key Press but if the differencebetween 2 API calls < 200ms then decline the API call
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 400);

    return () => {
      clearTimeout(timer);
    };
  }, [searchQuery]);

  const getSearchSuggestions = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
    const json = await data.json();
    setSuggestions(json[1]);
    // Updating the cache
    dispatch(
      cacheResults({
        [searchQuery]: json[1],
      })
    );
  };

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
      <div className="relative col-span-10 px-10">
        <div>
          <input
            className="px-5 w-1/2 border border-gray-400 p-2 rounded-l-full"
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setShowSuggestions(false)}
          />
          <button className="border border-gray-400 py-2 px-5 rounded-r-full bg-gray-100">
            Search
          </button>
        </div>
        {showSuggestions && (
          <div className="absolute bg-white py-2 px-2 w-[32rem] shadow-lg rounded-lg border border-gray-100">
            <ul>
              {suggestions.map((s) => (
                <li key={s} className="py-2 px-3 shadow-sm hover:bg-gray-100">
                  {s}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <img className="h-8" alt="usericon" src={USERICON} />
      </div>
    </div>
  );
}

export default Head;
