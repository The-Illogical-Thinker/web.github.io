import { createContext, useState } from "react";

export const VisibleContext = createContext()

export function VisibleProvider({ children }){
  const [isVisible, setVisible] = useState(true);
  return <VisibleContext.Provider value={{isVisible: isVisible, setVisible: setVisible}}>
    {children}
  </VisibleContext.Provider>
}