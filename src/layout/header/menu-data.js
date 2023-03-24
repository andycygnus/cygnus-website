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
    link: "",
    active: "",
    sub_menus: [
      {
        link: "",
        title: "Terminal Solutions",
        has_dropdown: true,
        sub_menus: [
          { link: "/products/terminals/pax", title: "PAX" },
          { link: "/products/terminals/dejavoo", title: "Dejavoo" },
          { link: "/products/terminals/firstdata", title: "FirstData" },
          { link: "/products/terminals/nmi", title: "NMI Gateway" },
          { link: "/products/terminals/valorpay", title: "ValorPay" },
        ],
      },
      {
        link: "",
        title: "POS Solutions",
        has_dropdown: true,
        sub_menus: [
          { link: "/products/pos/documentor", title: "Documentor POS" },
          { link: "/products/pos/supermenu", title: "Supermenu POS" },
          { link: "/products/pos/jmsc", title: "JMSC POS" },
          { link: "/products/pos/clover", title: "Clover POS" },
        ],
      },
      { link: "/products/online-ordering", title: "Online Ordering" },
      { link: "/products/mobile-app", title: "Mobile App" },
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
