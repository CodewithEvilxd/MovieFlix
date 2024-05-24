import { NavLink } from "react-router-dom";
import { mobileNavigation } from "../constants/index.js";

const MobileNavigation = () => {
  return (
    <section className="lg:hidden h-14 w-full bg-black bg-opacity-60 backdrop-blur-2xl fixed bottom-0 z-40">
      <div
        className={`flex items-center justify-between h-full text-neutral-400 `}
      >
        {mobileNavigation.map((nav, index) => {
          return (
            <NavLink
              key={nav.label + "mobilenavigation"}
              to={nav.href}
              exact={nav.label === "Home" ? "true" : "false"}
              className={({ isActive }) =>
                `px-3 flex items-center justify-center flex-col ${
                  isActive && "text-white"
                }`
              }
            >
              <div className="text-2xl">{<nav.icon />}</div>
              <p className="text-sm">{nav.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNavigation;
