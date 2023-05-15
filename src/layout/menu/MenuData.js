const menu = [
  
  {
    icon: "dashboard-fill",
    text: "Student",
    link: "/",
  },
  
  {
    heading: "Student Space",
  },
 
  {
    icon: "grid-alt-fill",
    text: "Exams",
    active: false,
    subMenu: [
      {
        text: "Planing",
        link: "/app-calender",
      },
    ],
  },
  
  {
    icon: "file-docs",
    text: "Convocation",
    active: false,
    subMenu: [
      {
        text: "Convocation Details",
        link: "/invoice-details/1",
      }
    ]
    }
];
export default menu;
