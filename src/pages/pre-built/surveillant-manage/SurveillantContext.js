import React, { useState, createContext } from "react";
import { surveillantData } from "./SurveillantData";

export const SurveillantContext = createContext();

export const SurveillantContextProvider = (props) => {
  const [data, setData] = useState(surveillantData);

  return <SurveillantContext.Provider value={{ contextData: [data, setData] }}>{props.children}</SurveillantContext.Provider>;
};
