const menu = [
  
  {
    icon: "dashboard-fill",
    text: "Dashboard",
    link: "/",
  },
  
  {
    icon: "users",
    text: "Gestion Professeurs",
    active: false,
    link: "/user-list-compact",
  },
  {
    icon: "users",
    text: "Gestion Etudiants",
    active: false,
    link: "/student-list-compact",
  },
  {
    icon: "users",
    text: "Gestion Surveillants",
    active: false,
    link: "/surveillant-list-compact",
  },
 
  {
    icon: "grid-alt-fill",
    text: "Calendrier",
    active: false,
    link: "/app-calender",
    
  },
  
  {
    icon: "file-docs",
    text: "Convocations",
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
