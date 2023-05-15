const menu = [
  
  {
    icon: "dashboard-fill",
    text: "Dashboard",
    link: "/",
  },
  
  {
    heading: "Pre-built Pages",
  },
  {
    icon: "users-fill",
    text: "User Manage",
    active: false,
    subMenu: [
      {
        text: "User List - Default",
        link: "/user-list-default",
      },
      {
        text: "User List - Regular",
        link: "/user-list-regular",
      },
      {
        text: "User List - Compact",
        link: "/user-list-compact",
      },
      {
        text: "User Details - Regular",
        link: "/user-details-regular/1",
      },
      {
        text: "User Profile - Regular",
        link: "/user-profile-regular",
      },
      {
        text: "User Contact - Card",
        link: "/user-contact-card",
      },
    ],
  },
 
  {
    icon: "grid-alt-fill",
    text: "Applications",
    active: false,
    subMenu: [
      {
        text: "Calendar",
        link: "/app-calender",
      },
    ],
  },
  
  {
    icon: "file-docs",
    text: "Invoice",
    active: false,
    subMenu: [
      {
        text: "Invoice List",
        link: "/invoice-list",
      },
      {
        text: "Invoice Details",
        link: "/invoice-details/1",
      },
    ],
  },
 
  
  {
    heading: "Misc Pages",
  },
  {
    icon: "light-fill",
    text: "Auth Pages",
    active: false,
    subMenu: [
      {
        text: "Login / Signin",
        link: "/auth-login",
        newTab: true,
      },
      {
        text: "Forgot Password",
        link: "/auth-reset",
        newTab: true,
      },
    ],
  },
  {
    icon: "files-fill",
    text: "Error Pages",
    active: false,
    subMenu: [
      {
        text: "404 Classic",
        link: "/errors/404-classic",
        newTab: true,
      },
      {
        text: "504 Classic",
        link: "/errors/504-classic",
        newTab: true,
      },
      {
        text: "404 Modern",
        link: "/errors/404-modern",
        newTab: true,
      },
      {
        text: "504 Modern",
        link: "/errors/504-modern",
        newTab: true,
      },
    ],
  },
 
];
export default menu;
