import React, { useState, createContext } from "react";
import { studentData } from "./StudentData";

export const StudentContext = createContext();

export const StudentContextProvider = (props) => {
  const [data, setData] = useState(studentData);

  return <StudentContext.Provider value={{ contextData: [data, setData] }}>{props.children}</StudentContext.Provider>;
};
