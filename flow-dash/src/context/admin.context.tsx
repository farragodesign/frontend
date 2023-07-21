import { createContext } from "react";

type RoleContextType = "controller" | "admin";

const ThemeContext = createContext<RoleContextType>("admin");