import React, { useState, createContext } from "react";
import { professeurData } from "./ProfesseurData";

export const ProfesseurContext = createContext();

export const ProfesseurContextProvider = (props) => {
  const [data, setData] = useState(professeurData);

  return <ProfesseurContext.Provider value={{ contextData: [data, setData] }}>{props.children}</ProfesseurContext.Provider>;
};
