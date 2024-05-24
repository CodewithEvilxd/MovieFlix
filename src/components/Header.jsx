import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../../src/assets/logo.png";
import user from "../../src/assets/user.jpg";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { navigation } from "../constants/index.js";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
  const [searchValue, setSearchValue] = useState(removeSpace);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchValue.trim() !== "") {
      navigate(`/search?q=${searchValue}`);
    }
  }, [searchValue]);

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <header className="fixed top-0 w-full h-16 bg-black bg-opacity-70 z-[999]">
      <div className="container mx-auto px-3 h-full flex items-center">
        <Link to={"/"}>
          <img src={logo} alt="logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center gap-1 ml-5">
          {navigation.map((nav, i) => (
            <NavLink
              key={nav.label}
              to={nav.href}
              className={({ isActive }) =>
                `px-2 hover:text-neutral-100 ${isActive && "text-neutral-100"}`
              }
            >
              {nav.label}
            </NavLink>
          ))}
        </nav>
        <div className="ml-auto flex items-center gap-7">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="search here..."
              className="bg-transparent px-4 py-1 outline-none hidden lg:block"
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
            />
            <button className="text-2xl text-white">
              <IoSearchOutline />
            </button>
          </form>

          <div className="w-8 h-8 rounded-full overflow-hidden cursor-pointer active:scale-75 transition-all">
            <img src={user} alt="User Icon" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
