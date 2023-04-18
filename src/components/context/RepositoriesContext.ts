import { createContext } from "react"; 

const RepositoriesContext = createContext<string[]>([]);

export default RepositoriesContext;