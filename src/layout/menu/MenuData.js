const menu = [
  
  {
    icon: "dashboard-fill",
    text: "Dashboard",
    link: "/",
  },
  
  {
    icon: "users",
    text: "User Manage",
    active: false,
    link: "/user-list-compact",
  
  },
 
  {
    icon: "grid-alt-fill",
    text: "Calendar",
    active: false,
    link: "/app-calender",
    
  },
  
  {
    icon: "file-docs",
    text: "Invitations",
    active: false,
    link: "/invoice-list",
   
  },
 
  
  {
    heading: "Misc Pages",
  },
  {
    icon: "light-fill",
    text: "Login",
    link: "/auth-login",
    active: false,
    newTab: true,

  },
];
export default menu;
