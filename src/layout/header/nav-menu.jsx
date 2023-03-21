import Link from "next/link.js";
import React from "react";
import menu_data from "./menu-data.js";

const NavMenu = ({ num = false }) => {
  const renderSubMenu = (subMenus) => {
    return (
      <ul className="sub-menu" style={{marginTop: '-15px'}}>
        {subMenus.map((sub_m, i) => (
          <li key={i} className={sub_m.has_dropdown ? "has-dropdown" : ""}>
            <Link href={sub_m.link}>{sub_m.title}</Link>
            {sub_m.has_dropdown && renderSubMenu(sub_m.sub_menus)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      <ul>
        {menu_data.map((menu, index) =>
          menu.has_dropdown ? (
            <li key={menu.id} className="has-dropdown">
              <Link className={`${menu?.active}`} href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
              {menu.has_dropdown && renderSubMenu(menu.sub_menus)}
            </li>
          ) : (
            <li key={menu.id}>
              <Link href={menu.link}>
                {num && index <= 9
                  ? `0${index + 1 + "."}`
                  : num && index + 1 + "."}
                {menu.title}
              </Link>
            </li>
          )
        )}
      </ul>
    </>
  );
};

export default NavMenu;
