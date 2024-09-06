// createContext => context banane ke lye
// useContext    => context se value ko get krne ke ly

import { createContext, useState } from "react";

export const ThemeContext = createContext();
 

function ThemeContext({children}){
   const [theme , setTheme] = useState("dark");
   return <ThemeContext.provider value={{theme , setTheme}}>
    {children}
   </ThemeContext.provider>
}

export default ThemeContext;