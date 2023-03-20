const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    title: "Home",
    link: "/home",
    active: "active",
    sub_menus: [/*
      { link: "/", title: "Home Style 1" },
      { link: "/home-2", title: "Home Style 2" },
      { link: "/home-3", title: "Home Style 3" },*/
    ],
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "About Us",
    link: "/about",
    active: "",
    sub_menus: [

    ],
  },
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    link: "/shop",
    active: "",
    sub_menus: [
      {
        link: "/service",
        title: "Terminal Solutions",
        sub_menus: [
          { link: "/terminal-1", title: "Terminal Solution 1" },
          { link: "/terminal-2", title: "Terminal Solution 2" },
        ],
      },
      {
        link: "/service-2",
        title: "POS Solutions",
        sub_menus: [
          { link: "/pos-1", title: "POS Solution 1" },
          { link: "/pos-2", title: "POS Solution 2" },
        ],
      },
      { link: "/service-3", title: "Online Ordering" },
      { link: "/service-details", title: "Mobile App" },
    ],
  },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Partners",
    link: "/team-1",
    active: "",
  },
  {
    id: 5,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact Us",
    link: "/contact",
    active: "",
  },
];
export default menu_data;
