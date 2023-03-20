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
      { link: "/service", title: "Service 1" },
      { link: "/service-2", title: "Service 2" },
      { link: "/service-3", title: "Service 3" },
      { link: "/service-details", title: "Service Details" },
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
