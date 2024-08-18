import { createContext,useContext,useState,useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({children})=>{
    const [isDarkTheme,setIsDarkTheme] = useState(false);
    const [search,setSearch] = useState("cat");
    const toggleDarkTheme = ()=>{
        const newDarkTheme = !isDarkTheme;
        document.querySelector("body").classList.toggle("dark-theme",newDarkTheme);
        setIsDarkTheme(newDarkTheme);

    }
    return <AppContext.Provider value={{toggleDarkTheme,isDarkTheme,search,setSearch}}>
        {children}
    </AppContext.Provider>

}

export const useGlobalContext = ()=>{
    return useContext(AppContext);
}